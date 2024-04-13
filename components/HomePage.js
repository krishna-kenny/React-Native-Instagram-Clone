import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "./HomePageComponents/Header";
import Footer from "./HomePageComponents/Footer";
import NewSpeakers from "./HomePageComponents/NewSpeakers";
import Languages from "./HomePageComponents/Languages";
import InternationalSpeakers from "./HomePageComponents/InternationalSpeakers";
import TrendingSpeakers from "./HomePageComponents/TrendingSpeakers";

export default function HomePage() {
  return (
    <View style={styles.homePage}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <NewSpeakers />
          <Languages />
          <InternationalSpeakers />
          <TrendingSpeakers />
        </View>
      </ScrollView>
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
    backgroundColor: "#f4f4f4",
  },
});
