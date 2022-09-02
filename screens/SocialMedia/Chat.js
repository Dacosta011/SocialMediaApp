import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import Message from "../../components/Social/Message";
import { firestore } from "../../database/firebase";
import {
  getDocs,
  collection,
  onSnapshot,
  addDoc,
  where,
  query,
} from "firebase/firestore";
import { LogInContext } from "../../store/context/LogInContext";
import { useFocusEffect } from "@react-navigation/native";

export default function Chat({ route }) {
  const { friendId } = route.params;
  const [mesagges, setMesagges] = useState([]);
  const logInCtx = useContext(LogInContext);
  const [loading, setLoading] = useState(true);
  const [userMesagge, setUserMesagge] = useState("");

  async function getMesagges() {
    let messages = [];
    setLoading(true);
    const q = await getDocs(collection(firestore, "mesagges"));
    q.forEach((m) => {
      messages.push(m.data());
      setMesagges(messages);
    });
    setLoading(false);
  }
  useFocusEffect(
    useCallback(() => {
      getMesagges();
    }, [])
  );

  async function handleNewMesagge() {
    const docRef = await addDoc(collection(firestore, "mesagges"), {
      from: logInCtx.id,
      to: friendId,
      message: userMesagge,
    });
    setUserMesagge("");
    getMesagges();
  }
  const q = query(
    collection(firestore, "mesagges"),
    where("to", "==", logInCtx.id)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log("new messagge: ", change.doc.data());
      }
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            mesagges.map((m, index) => (
              <Message
                message={m.message}
                me={logInCtx.id == m.from ? true : false}
                key={index}
              />
            ))
          )}
        </ScrollView>
      </View>
      <View style={styles.typeContainer}>
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera" size={30} color={colors.primary} />
        </TouchableOpacity>
        <TextInput
          placeholder="Start Typing ..."
          style={styles.inputMessage}
          onChangeText={(value) => setUserMesagge(value)}
        />
        <TouchableOpacity style={styles.sendIcon} onPress={handleNewMesagge}>
          <Ionicons name="send" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  typeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cameraIcon: {
    flex: 1,
    marginRight: 10,
  },
  inputMessage: {
    flex: 8,
    backgroundColor: colors.HardGrey,
    marginRight: 10,
    height: 35,
    borderRadius: 20,
    padding: 10,
  },
  sendIcon: {
    flex: 1,
  },
});
