import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";

// Add this import for the Image component

export default function ProfileData() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfilePhotosBanner />
        <BioData />
        <Feed />
        <Chat />
        <SimilarSpeakers />
      </View>
    </ScrollView>
  );
}

function ProfilePhotosBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const profilePictures = [
    { id: 1, image: "Image 1" },
    { id: 2, image: "Image 2" },
    { id: 3, image: "Image 3" },
    { id: 4, image: "Image 4" },
    // Add more profiles as needed
  ];

  const handleNext = () => {
    if (flatListRef.current) {
      const nextIndex = (currentIndex + 1) % profilePictures.length;
      flatListRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex % profilePictures.length);
    }
  };

  const handlePrev = () => {
    if (flatListRef.current) {
      const prevIndex =
        currentIndex - 1 < 0 ? profilePictures.length - 1 : currentIndex - 1;
      flatListRef.current.scrollToIndex({
        index: prevIndex,
        animated: true,
      });
      setCurrentIndex(prevIndex);
    }
  };

  const Banner = ({ profile }) => {
    return (
      <View style={styles.banner}>
        <Text style={styles.image}>{profile.image}</Text>
      </View>
    );
  };

  return (
    <View style={styles.newProfile}>
      <FlatList
        ref={flatListRef}
        data={profilePictures}
        renderItem={({ item }) => <Banner profile={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(data, index) => ({
          length: Dimensions.get("window").width,
          offset: Dimensions.get("window").width * index,
          index,
        })}
        initialScrollIndex={currentIndex}
        initialNumToRender={1}
        windowSize={2}
        maxToRenderPerBatch={1}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get("window").width
          );
          setCurrentIndex(index);
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

function BioData() {
  return (
    <>
      <View style={styles.section}>
        <Text>Section</Text>
      </View>
    </>
  );
}

function Feed() {
  return (
    <>
      <View style={styles.section}>
        <Text>Section</Text>
      </View>
    </>
  );
}

function Chat() {
  return (
    <>
      <View style={styles.section}>
        <Text>Section</Text>
      </View>
    </>
  );
}

const people = [
  {
    id: 1,
    name: "Krishna",
    image: "./././assets/images/saturn.jpg",
  },
  {
    id: 2,
    name: "Kenny",
    image: "./././assets/images/neptune.jpg",
  },
  {
    id: 3,
    name: "Rocks",
    image: "./././assets/images/sun.jpg",
  },
  {
    id: 4,
    name: "Krishna",
    image: "./././assets/images/saturn.jpg",
  },
  {
    id: 5,
    name: "Kenny",
    image: "./././assets/images/neptune.jpg",
  },
  {
    id: 6,
    name: "Rocks",
    image: "./././assets/images/sun.jpg",
  },
  // Add more people as needed
];

const PersonItem = ({ person }) => {
  return (
    <TouchableOpacity style={styles.personItem}>
      <Image source={person.image} style={styles.personImage} />
      <Text style={styles.personName}>{person.name}</Text>
    </TouchableOpacity>
  );
};

function SimilarSpeakers() {
  return (
    <View style={styles.similarSpeakers}>
      <Text style={styles.SimilarSpeakersTitle}>Similar Speakers </Text>
      <FlatList
        data={people}
        renderItem={({ item }) => <PersonItem person={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  newProfile: {
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  banner: {
    width: Dimensions.get("window").width,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", 
  },
  image: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
  section: {
    height: 250,
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  similarSpeakers: {
    padding: 15,
    backgroundColor: "#fff",
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  SimilarSpeakersTitle: {
    fontSize: 18,
    padding: 10,
  },
  personItem: {
    marginHorizontal: 8,
    alignItems: "center",
  },
  personImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
    borderWidth: 4,
    borderColor: "#ff0000",
  },
  personName: {
    fontSize: 12,
  },
});
