// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const app = firebase.initializeApp({
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DB_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE,
   messageSenderId: process.env.REACT_APP_M_ID,
   appId: process.env.REACT_APP_ID,
   measurementId: process.env.REACT_APP_MEAS_ID
});


export const firestore = app.firestore();
export const auth = app.auth();
export default app;
