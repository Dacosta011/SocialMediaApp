import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";

export default function Message({ message, me = true }) {
  return (
    <View style={me ? styles.fromMe : styles.fromThem}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fromMe: {
    alignSelf: "flex-end",
    backgroundColor: colors.primary,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: "75%",
    marginBottom: 20,
  },
  fromThem: {
    alignSelf: "flex-start",
    backgroundColor: colors.secondary,
    padding: 10,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: "75%",
    marginBottom: 20,
  },
});
