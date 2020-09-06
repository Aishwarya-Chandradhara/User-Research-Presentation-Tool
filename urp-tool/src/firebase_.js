import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAq8xeFYaY1AGg772IpShnyWZOgPuL3Yws",
  authDomain: "urp-tool.firebaseapp.com",
  databaseURL: "https://urp-tool.firebaseio.com",
  projectId: "urp-tool",
  storageBucket: "urp-tool.appspot.com",
  messagingSenderId: "946949170279",
  appId: "1:946949170279:web:a9931798e3d8fb2ac2e0c2",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;