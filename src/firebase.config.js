
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlXeqUedZJZysNjnZVYRtE5XypnXF9zLk",
  authDomain: "healthy-food-ideas.firebaseapp.com",
  projectId: "healthy-food-ideas",
  storageBucket: "healthy-food-ideas.appspot.com",
  messagingSenderId: "1071661946107",
  appId: "1:1071661946107:web:c9a49606197651f8d3cc5e"
};


const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }