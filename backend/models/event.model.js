import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyBcEI_HDiWrtpcZCWmsIVBqAjiC3lwsVKo",
  authDomain: "vaulted-splice-331215.firebaseapp.com",
  databaseURL: "https://vaulted-splice-331215-default-rtdb.firebaseio.com",
  projectId: "vaulted-splice-331215",
  storageBucket: "vaulted-splice-331215.appspot.com",
  messagingSenderId: "12349008749",
  appId: "1:12349008749:web:f9d97cb84e8a627df64864"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);