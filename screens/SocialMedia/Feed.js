import { View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { getItem } from "../../utils/asyncStorage";
import Post from "../../components/Social/Post";
import colors from "../../constants/colors";

export default function Feed() {
  useEffect(() => {
    async function getItembykey(key) {
      const value = await getItem(key);
      console.log(value);
    }
    getItembykey("token");
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Post
          nameProf="David Acosta"
          likes={300}
          minutos={10}
          profImg="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
          postIng="https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
        />
        <Post
          nameProf="Julian Alvarez"
          likes={210}
          minutos={20}
          profImg="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
          postIng="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        />
        <Post
          nameProf="Emma Watson"
          likes={450}
          minutos={60}
          profImg="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          postIng="https://www.nyip.edu/images/cms/photo-articles/the-best-place-to-focus-in-a-landscape.jpg"
        />
        <Post
          nameProf="Daniel Gomez"
          likes={50}
          minutos={5}
          profImg="https://thumbs.dreamstime.com/b/man-perfect-brilliant-smile-unshaven-face-defocused-background-guy-happy-emotional-expression-outdoors-bearded-man-124640934.jpg"
          postIng="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
