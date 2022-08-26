import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import colors from "../../constants/colors";
import Button from "../../components/Log/Button";
import Input from "../../components/Log/Input";
import { auth } from "../../database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setItem } from "../../utils/asyncStorage";
import { LogInContext } from "../../store/context/LogInContext";

export default function LogIn({ navigation }) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
  });

  const logInCtx = useContext(LogInContext);

  async function handleLogIn() {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredentials) => {
        const userLogged = userCredentials.user;
        setUser({ ...setUser, id: userLogged.uid });
      })
      .catch((error) => {
        console.log(error);
      });
    logInCtx.authenticate(user.id);
  }

  function handleTextChange(key, value) {
    setUser({
      ...user,
      [key]: value,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>LogIn</Text>
      </View>
      <View style={styles.footer}>
        <Input
          label="Mail"
          icon="person"
          placeholder="Your mail"
          AccesValue="email"
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
            onPress={handleLogIn}
          >
            LogIn
          </Button>
          <Button
            backgroundColor={colors.white}
            textColor={colors.primary}
            ButStyles={{
              borderColor: colors.primary,
              borderWidth: 1,
              marginTop: 15,
            }}
            onPress={() => navigation.navigate("SignInScreen")}
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
