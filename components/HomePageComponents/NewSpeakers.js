import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";

const speakers = [
  { id: 1, name: "Speaker 1", description: "Description 1", image: "Image 1" },
  { id: 2, name: "Speaker 2", description: "Description 2", image: "Image 2" },
  { id: 3, name: "Speaker 3", description: "Description 3", image: "Image 3" },
  { id: 4, name: "Speaker 4", description: "Description 4", image: "Image 4" },
  // Add more speakers as needed
];

const Banner = ({ speaker }) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.name}>{speaker.name}</Text>
      <Text style={styles.description}>{speaker.description}</Text>
      <Text style={styles.image}>{speaker.image}</Text>
    </View>
  );
};

export default function NewSpeakers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = Dimensions.get("window").width;
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (flatListRef.current) {
      const nextIndex = (currentIndex + 1) % speakers.length;
      flatListRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex % speakers.length);
    }
  };

  const handlePrev = () => {
    if (flatListRef.current) {
      const prevIndex =
        currentIndex - 1 < 0 ? speakers.length - 1 : currentIndex - 1;
      flatListRef.current.scrollToIndex({
        index: prevIndex,
        animated: true,
      });
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <View style={styles.newSpeaker}>
      <FlatList
        ref={flatListRef}
        data={speakers}
        renderItem={({ item }) => <Banner speaker={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(data, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
        initialScrollIndex={0}
        initialNumToRender={1}
        windowSize={2}
        maxToRenderPerBatch={1}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / windowWidth
          );
          setCurrentIndex(newIndex);
        }}
      />
      <TouchableOpacity
        onPress={handlePrev}
        style={[styles.arrow, styles.leftArrow]}
      >
        <Text>{"<"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNext}
        style={[styles.arrow, styles.rightArrow]}
      >
        <Text>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  newSpeaker: {
    backgroundColor: "#fff",
    marginBottom: 6,
    position: "relative",
    borderBottomWidth: 2,
  },
  banner: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    paddingHorizontal: 10,
    marginHorizontal: 16,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  leftArrow: {
    left: 0,
  },
  rightArrow: {
    right: 0,
  },
});
