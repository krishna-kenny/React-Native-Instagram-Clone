import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from "react-native";

export default function SearchOverlay({ isVisible, searchResults }) {
  if (!isVisible) return null;

  const renderPerson = ({ item }) => (
    <TouchableOpacity style={styles.personContainer}>
      <Text style={styles.searchImage}>IMAGE</Text>
      <Text>{item}</Text>
      <Text>{"hi " + item}</Text>
      <Text>{"bye " + item}</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={() => {}}
    >
      <View style={styles.overlayContent}>
        <FlatList
          data={searchResults}
          renderItem={renderPerson}
          keyExtractor={(item, index) => index.toString()}
          numColumns={Math.floor(Dimensions.get("window").width / 125)}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  overlayContent: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  columnWrapper: {
    justifyContent: "space-around",
  },
  personContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexBasis: Dimensions.get("window").width / 3 - 20,
  },
  bookButton: {
    backgroundColor: "black",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchImage: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
});
