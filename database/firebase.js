import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZzyjSNcfMzosf3mIUcc7w0J0NltiSf4",
  authDomain: "social-media-react-native.firebaseapp.com",
  databaseURL: "https://social-media-react-native-default-rtdb.firebaseio.com",
  projectId: "social-media-react-native",
  storageBucket: "social-media-react-native.appspot.com",
  messagingSenderId: "237950270874",
  appId: "1:237950270874:web:84b444a8ed8cebe9558e23",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
