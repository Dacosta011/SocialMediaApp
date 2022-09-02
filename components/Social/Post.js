import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function Post({ profImg, postIng, likes, minutos, nameProf }) {
  return (
    <View style={styles.post}>
      <View style={styles.top}>
        <View style={styles.topSides}>
          <Image
            source={{
              uri: profImg,
            }}
            style={styles.proImage}
          />
          <Text style={styles.proName}>{nameProf}</Text>
        </View>
        <View style={styles.topSides}>
          <Text style={styles.MinText}>{minutos} Minutos</Text>
          <Ionicons name="options-sharp" size={20} color={colors.primary} />
        </View>
      </View>
      <View style={styles.middle}>
        <Image
          source={{
            uri: postIng,
          }}
          style={styles.postImage}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomIcons}>
          <Ionicons name="ios-save-outline" size={20} color={colors.primary} />
          <Ionicons
            name="share-social-outline"
            size={20}
            color={colors.primary}
          />
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={20}
            color={colors.primary}
          />
        </View>
        <View style={styles.bottomIconsRight}>
          <Text style={styles.likeText}>{likes}</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={25} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    height: 400,
    marginBottom: 5,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: colors.sofPrimary,
  },
  topSides: {
    flexDirection: "row",
    alignItems: "center",
  },
  proImage: {
    width: 40,
    height: 40,
    borderRadius: Platform.OS == "android" ? 100 : "50%",
    marginRight: 10,
  },
  middle: {
    flex: 6,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.sofPrimary,
  },
  bottomIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 200,
    alignItems: "center",
  },
  bottomIconsRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  proName: {
    fontSize: 15,
    color: colors.white,
  },
  MinText: {
    color: colors.white,
    marginRight: 15,
  },
  likeText: {
    fontSize: 15,
    color: colors.white,
  },
});
