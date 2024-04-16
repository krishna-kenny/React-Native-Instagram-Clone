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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 2,
  },
  button: {
    flex: 1,   
    height: 40, 
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#bbb',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
