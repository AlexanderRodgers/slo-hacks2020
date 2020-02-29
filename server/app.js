// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
require('dotenv').config();
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DB_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE,
   messageSenderId: process.env.REACT_APP_M_ID,
   appId: process.env.REACT_APP_ID,
   measurementId: process.env.REACT_APP_MEAS_ID
 };
 
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();