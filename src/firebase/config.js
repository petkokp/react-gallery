import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAvtB8X2BGCoLbOA3Y2pLz714DZPLVK4cE",
    authDomain: "react-gallery-11d0a.firebaseapp.com",
    databaseURL: "https://react-gallery-11d0a.firebaseio.com",
    projectId: "react-gallery-11d0a",
    storageBucket: "react-gallery-11d0a.appspot.com",
    messagingSenderId: "645516334970",
    appId: "1:645516334970:web:d3ee1f5a479ce9eea2e8c3",
    measurementId: "G-K11B688L3X"
  };
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };