import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// Sample data for people's names and images
const people = [
  {
    id: 1,
    name: "John",
    image: "./././assets/images/neptune.jpg",
  },
  {
    id: 2,
    name: "Alice",
    image: "./././assets/images/sun.jpg",
  },
  {
    id: 3,
    name: "Bob",
    image: "./././assets/images/saturn.jpg",
  },
  {
    id: 4,
    name: "John",
    image: "./././assets/images/neptune.jpg",
  },
  {
    id: 5,
    name: "Alice",
    image: "./././assets/images/sun.jpg",
  },
  {
    id: 6,
    name: "Bob",
    image: "./././assets/images/saturn.jpg",
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

export default function InternationalSpeakers() {
  return (
    <View style={styles.container}>
      <Text style={styles.InternationalSpeakersTitle}>
        International Speakers
      </Text>
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
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 2,
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

  InternationalSpeakersTitle: {
    fontSize: 18,
    padding: 10,
  },
});
