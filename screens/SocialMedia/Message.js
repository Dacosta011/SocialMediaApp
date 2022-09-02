import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import colors from "../../constants/colors";
import { useFocusEffect } from "@react-navigation/native";
import { firestore } from "../../database/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { LogInContext } from "../../store/context/LogInContext";

export default function Message({ navigation }) {
  const LoginCtx = useContext(LogInContext);
  const [amigo, setAmigo] = useState({});
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function test() {
        setLoading(true);
        const q = query(
          collection(firestore, "users"),
          where("id", "==", LoginCtx.id)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setAmigo(doc.data().amigos[0]);
        });
        setLoading(false);
      }
      test();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <TouchableOpacity
              style={styles.chat}
              onPress={() =>
                navigation.navigate("chat", {
                  friendId: amigo.id,
                })
              }
            >
              <Image
                style={styles.chatImg}
                source={{
                  uri: amigo.image,
                }}
              />
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatUser}>{amigo.name}</Text>
                <Text style={styles.chatMessage}>Last mesagge</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  chat: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  chatImg: {
    width: 50,
    height: 50,
    borderRadius: Platform.OS == "android" ? 200 : "50%",
    marginRight: 25,
  },
  chatUser: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  chatMessage: {
    color: colors.HardGrey,
  },
});
