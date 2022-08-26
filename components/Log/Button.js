import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({
  children,
  backgroundColor,
  textColor,
  ButStyles,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.signIn,
        {
          backgroundColor: backgroundColor,
        },
        ButStyles,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.textSign,
          {
            color: textColor,
          },
        ]}
      >
        {" "}
        {children}{" "}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
