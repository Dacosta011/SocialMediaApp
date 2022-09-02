import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { useFocusEffect } from "@react-navigation/native";
import { LogInContext } from "../../store/context/LogInContext";
import { firestore } from "../../database/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function Profile({ navigation }) {
  const LoginCtx = useContext(LogInContext);
  const [user, setUser] = useState({});
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
          setUser(doc.data());
        });
        setLoading(false);
        console.log(user);
      }
      test();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <ImageBackground
            source={{
              uri: user.image,
            }}
            style={styles.backgroundImg}
            imageStyle={{ opacity: 0.5 }}
          >
            <Text style={styles.profileText}>{user.name}</Text>
            <TouchableOpacity style={styles.followBtn}>
              <Ionicons
                name="person-add-outline"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.profInfoContainer}>
            <View style={styles.profileBioCntainer}>
              <Text style={styles.profileBio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti expedita atque explicabo voluptatem magni assumenda
                sint numquam unde labore voluptates
              </Text>
            </View>
            <View style={styles.profileFollowContainer}>
              <View style={styles.followBox}>
                <Text style={styles.followText}>Followers</Text>
                <Text style={styles.followNumber}>1234</Text>
              </View>
              <View style={styles.followBox}>
                <Text style={styles.followText}>Following</Text>
                <Text style={styles.followNumber}>123</Text>
              </View>
            </View>
          </View>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    flex: 4,
  },
  profileText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 25,
  },
  followBtn: {
    width: 100,
    height: 40,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: colors.secondary,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
  },
  textFollow: {
    color: colors.white,
  },
  profileBioCntainer: {
    flex: 3,
  },
  profInfoContainer: {
    flex: 1,
    flexDirection: "row",
  },
  profileBio: {
    padding: 15,
  },
  profileFollowContainer: {
    flex: 1,
  },
  followBox: {
    flex: 1,
    padding: 15,
  },
  followText: {
    fontSize: 10,
  },
  followNumber: {
    fontWeight: "bold",
  },
  imagesContainer: {
    flex: 3,
    flexDirection: "row",
    paddingHorizontal: 15,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 100,
    minWidth: 100,
    maxWidth: 100,
    height: 100,
    flex: 1,
    margin: 5,
  },
});
