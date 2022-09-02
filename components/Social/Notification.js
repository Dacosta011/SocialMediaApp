import { View, Text, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../constants/colors";

export default function Notifications() {
  return (
    <View style={styles.notificationContainer}>
      <Image
        style={styles.notiImage}
        source={{
          uri: "https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.notiText}>
          {" "}
          <Text style={styles.notiUser}>JuanFer </Text>Started following you.
        </Text>
      </View>
      <TouchableOpacity style={styles.notiButton}>
        <Text style={styles.textButton}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  notiImage: {
    flex: 1,
    width: 50,
    height: 50,
    minWidth: 50,
    minHeight: 50,
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: Platform.OS == "android" ? 200 : "50%",
    marginRight: 15,
  },
  textContainer: {
    flex: 3,
    flexDirection: "row",
    marginRight: 10,
  },
  notiText: {
    color: colors.white,
    fontSize: 14,
  },
  notiButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    height: 20,
    borderRadius: 50,
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
  },
  notiUser: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 15,
  },
});
