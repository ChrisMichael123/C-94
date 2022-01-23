//ADD YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7kBtoJlEzYgtnFDA3cHumZrwNfkFbPpU",
  authDomain: "kwitter-5a291.firebaseapp.com",
  databaseURL: "https://kwitter-5a291-default-rtdb.firebaseio.com",
  projectId: "kwitter-5a291",
  storageBucket: "kwitter-5a291.appspot.com",
  messagingSenderId: "239797227643",
  appId: "1:239797227643:web:8b2e61cfd9771b9b1d12de"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function Add_User(){
     user_name=document.getElementById("input1").value ;
     firebase.database().ref("/").child(user_name).update({
         purpose:"Adding User"
     });
 }