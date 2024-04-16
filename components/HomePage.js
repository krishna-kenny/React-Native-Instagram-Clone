import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "./HomePageComponents/Header";
import Footer from "./HomePageComponents/Footer";
import NewSpeakers from "./HomePageComponents/NewSpeakers";
import Languages from "./HomePageComponents/Languages";
import InternationalSpeakers from "./HomePageComponents/InternationalSpeakers";
import TrendingSpeakers from "./HomePageComponents/TrendingSpeakers";
import SearchOverlay from "./SearchOverlay";

export default function HomePage() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const reSearch = (searchText) => {
    setSearchResults([
      searchText,
      "Krishna",
      "Kenny",
      "Rocks!",
      "Krishna",
      "Kenny",
      "Rocks!",
      "Krishna",
      "Kenny",
      "Rocks!",
      "Krishna",
      "Kenny",
      "Rocks!",
      "Krishna",
      "Kenny",
      "Rocks!",
    ]);
  };

  return (
    <View style={styles.homePage}>
      <Header
        searchToggle={searchToggle}
        isSearchVisible={isSearchVisible}
        reSearch={reSearch}
      />
      {isSearchVisible ? (
        <SearchOverlay
          isVisible={isSearchVisible}
          searchResults={searchResults}
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <NewSpeakers />
            <Languages />
            <InternationalSpeakers />
            <TrendingSpeakers />
          </View>
        </ScrollView>
      )}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
