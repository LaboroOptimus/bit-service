import firebase from "firebase";

const  firebaseConfig = {
    apiKey: "AIzaSyD9_bt5G55PgVsoh3M20ZKAwe6MhroAOK8",
    authDomain: "bit-ser.firebaseapp.com",
    databaseURL: "https://bit-ser.firebaseio.com",
    projectId: "bit-ser",
    storageBucket: "bit-ser.appspot.com",
    messagingSenderId: "275011494974",
    appId: "1:275011494974:web:c10e216ac48698bfcc5d6f"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire
