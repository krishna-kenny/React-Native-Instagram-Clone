import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>one</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>two</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>three</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>four</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>five</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 2,
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
