import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ProfileFooter() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 2,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginHorizontal: 16,
    paddingVertical: 10,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
