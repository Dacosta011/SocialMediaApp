import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import colors from "../../constants/colors";
import Button from "../../components/Log/Button";
import Input from "../../components/Log/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { setItem } from "../../utils/asyncStorage";
import { LogInContext } from "../../store/context/LogInContext";

export default function SignIn({ navigation }) {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const LogInCtx = useContext(LogInContext);

  async function createUserLogin() {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      );
      const userLoggedId = userCredentials.user.uid;
      return userLoggedId;
    } catch (error) {
      console.log(error);
    }
  }

  async function createUserDb(uid) {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        id: uid,
        name: userRegister.name,
        email: userRegister.email,
        phone: userRegister.phone,
        password: userRegister.password,
        posts: [],
      });
      return docRef.id;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignIn() {
    console.log(userRegister);
    const userLoggedId = await createUserLogin();
    const userDbId = await createUserDb(userLoggedId);
    LogInCtx.authenticate(userLoggedId);
    console.log("algo");
  }

  function handleTextChange(key, value) {
    setUserRegister({
      ...userRegister,
      [key]: value,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>SignIn</Text>
      </View>
      <View style={styles.footer}>
        <Input
          label="Name"
          icon="person"
          placeholder="Your name"
          AccesValue="name"
          onChangeText={handleTextChange}
        />
        <Input
          label="Mail"
          icon="mail"
          placeholder="Your mail"
          AccesValue="email"
          onChangeText={handleTextChange}
        />
        <Input
          label="Phone"
          icon="call"
          placeholder="Your phone"
          AccesValue="phone"
          onChangeText={handleTextChange}
        />
        <Input
          label="Password"
          icon="lock-closed"
          placeholder="Your Password"
          AccesValue="password"
          secureTextEntry={true}
          onChangeText={handleTextChange}
        />
        <View style={styles.button}>
          <Button
            backgroundColor={colors.primary}
            textColor={colors.white}
            onPress={handleSignIn}
          >
            SignIn
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
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
