import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>VorVertex</Text>
      {isSearchVisible && (
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#999" // Adjust the color as needed
            style={styles.searchInput}
          />
      )}
      <TouchableOpacity onPress={toggleSearch} style={styles.searchButton}>
        <Icon name="search" size={20} color="blue" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    padding: 12,
    paddingTop: StatusBar.currentHeight+'12',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchButton: {
    paddingVertical: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: "blue",
  },
  searchInput: {
    flex: 1,
    height: 35,
    backgroundColor: "#eee", // Match the text color with the header text
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
});
