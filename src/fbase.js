import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAV3rVt4yp2HNT2hB4xauvqNlTeb6-9qiE",
    authDomain: "clockwork-bookstore-5e0dd.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-5e0dd.firebaseio.com",
    projectId: "clockwork-bookstore-5e0dd",
    storageBucket: "clockwork-bookstore-5e0dd.appspot.com",
    messagingSenderId: "897134018481"
});

const fbase = Rebase.createClass(firebaseApp.database());


export {fbase, firebaseApp};



