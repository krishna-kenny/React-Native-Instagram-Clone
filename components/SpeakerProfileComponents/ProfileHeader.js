import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

export default function ProfileHeader() {
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <View style={styles.header}>
      <View style={styles.leftGroup}>
        <TouchableOpacity style={styles.left}>
          <Icon name="arrow-left" size={20} color="#eee" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.left}>
          <Icon name="share" size={20} color="#eee" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.left}>
          <Icon name="heart" size={20} color="#eee" />
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
    backgroundColor: "#000",
    borderBottomWidth: 2,
    padding: 12,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 6 : 6,
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
    borderColor: "#eee",
  },
  right: {
    fontSize: 26,
    paddingRight: 16,
    fontWeight: "bold",
    color: "#eee",
  },
});
