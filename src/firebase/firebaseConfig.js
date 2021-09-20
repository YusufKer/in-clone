import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3LlfCpL1q4upUIpCAjnaFBNs_nqEwywY",
  authDomain: "instagram-clone-d03b1.firebaseapp.com",
  projectId: "instagram-clone-d03b1",
  storageBucket: "instagram-clone-d03b1.appspot.com",
  messagingSenderId: "643951544755",
  appId: "1:643951544755:web:ae29a063ae72d207a063c6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
