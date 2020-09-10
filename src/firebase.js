import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpfqY_XDRsK1np1dTCb-rv2no8ckXH80o",
  authDomain: "clone-34ebc.firebaseapp.com",
  databaseURL: "https://clone-34ebc.firebaseio.com",
  projectId: "clone-34ebc",
  storageBucket: "clone-34ebc.appspot.com",
  messagingSenderId: "36587377842",
  appId: "1:36587377842:web:52c57574f8aa4b8c9aa5ab",
  measurementId: "G-Q4G8V1MJZJ",
};

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
const db = firebaseApp.firestore();

// initialize the authentication
const auth = firebaseApp.auth();

export { db, auth };
