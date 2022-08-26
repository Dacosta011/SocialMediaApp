import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Input({
  icon,
  placeholder,
  secureTextEntry = false,
  label,
  AccesValue,
  onChangeText,
  autoCapitalize = "none",
  autoCorrect = false,
}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text_footer}>{label}</Text>
        <View style={styles.action}>
          <Ionicons name={icon} size={20} />
          <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            onChangeText={(value) => onChangeText(AccesValue, value)}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text_footer: {
    color: colors.secondary,
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: colors.secondary,
  },
});
