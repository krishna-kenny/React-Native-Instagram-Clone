import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";

export default function Header({ searchToggle, isSearchVisible, reSearch }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>VorVertex</Text>
      {isSearchVisible && (
        <TextInput
          onChangeText={(text) => reSearch(text)}
          placeholder="Type to search"
          placeholderTextColor="#999"
          style={styles.searchBar}
        />
      )}
      <TouchableOpacity
        onPress={searchToggle}
      >
        {isSearchVisible ? (
          <Icon name="close" size={20} color="red" />
        ) : (
          <Icon name="search" size={20} color="red" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    borderBottomWidth: 2,
    padding: 6,
    paddingTop: StatusBar.currentHeight + 12,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#fff',
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: "#222",
    color: '#eee',
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
});
