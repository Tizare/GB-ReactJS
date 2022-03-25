import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTtyPIDljxooyuZN0USpju6ivcMWscbKQ",
  authDomain: "todayapp-c2c1d.firebaseapp.com",
  databaseURL: "https://todayapp-c2c1d-default-rtdb.firebaseio.com",
  projectId: "todayapp-c2c1d",
  storageBucket: "todayapp-c2c1d.appspot.com",
  messagingSenderId: "1021075279262",
  appId: "1:1021075279262:web:e97a6bae1b62e4bef19a8f"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;