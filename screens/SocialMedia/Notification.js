import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Notifications from "../../components/Social/Notification";
import colors from "../../constants/colors";

export default function Notification() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.thisWeek}>
          <Text style={styles.notificationText}>This Week</Text>
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
        </View>
        <View style={styles.thisWeek}>
          <Text style={styles.notificationText}>This Month</Text>
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
        </View>
        <View style={styles.thisWeek}>
          <Text style={styles.notificationText}>Earlier</Text>
          <Notifications />
          <Notifications />
          <Notifications />
          <Notifications />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  thisWeek: {
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  notificationText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});
