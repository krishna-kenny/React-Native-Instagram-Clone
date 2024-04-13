import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ProfileHeader() {
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <View style={styles.header}>
      <View style={styles.leftGroup}>
        <TouchableOpacity style={styles.left}>
          <Text>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.left}>
          <Icon name="share" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.left}>
          <Icon name="heart" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.right} numberOfLines={1}>
        Krishna Kenny
      </Text>
    </View>
  );
}

let { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    padding: 12,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 12 : 12,
  },
  leftGroup: {
    flexDirection: "row",
  },
  left: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: width > 300 ? 10 : 5,
    paddingVertical: 5,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginRight: 10,
  },
  right: {
    fontSize: 26,
    paddingRight: 16,
    fontWeight: "bold",
  },
});
