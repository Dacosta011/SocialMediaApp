import AsyncStorage from "@react-native-async-storage/async-storage";

async function setItem(key, value) {
  return await AsyncStorage.setItem(key, value);
}

async function getItem(key) {
  return await AsyncStorage.getItem(key);
}

async function removeItem(key) {
  return await AsyncStorage.removeItem(key);
}

export { setItem, getItem, removeItem };
