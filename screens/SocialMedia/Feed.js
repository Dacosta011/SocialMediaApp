import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getItem } from "../../utils/asyncStorage";

export default function Feed() {
  useEffect(() => {
    async function getItembykey(key) {
      const value = await getItem(key);
      console.log(value);
    }
    getItembykey("id");
  }, []);

  return (
    <View>
      <Text>Feeddd</Text>
    </View>
  );
}
