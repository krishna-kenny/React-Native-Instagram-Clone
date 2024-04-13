import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "French" },
  { id: 4, name: "English" },
  { id: 5, name: "Spanish" },
  { id: 6, name: "French" },
  // Add more languages as needed
];

const LanguageItem = ({ language }) => {
  return (
    <TouchableOpacity style={styles.languageItem}>
      <Text>{language.name}</Text>
    </TouchableOpacity>
  );
};

export default function Languages() {
  return (
    <View style={styles.languages}>
        <Text style={styles.languageTitle}>Choose your Language: </Text>
      <FlatList
        data={languages}
        renderItem={({ item }) => <LanguageItem language={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  languages: {    
    marginHorizontal: 12, marginVertical: 6,
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 2,
  },

  languageItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },

  languageTitle: {
    fontSize: 18,
    padding: 10
  }
});
