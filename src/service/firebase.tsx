import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCi4-N7y-PpMMh3Ay6Way3wEPGrS0N40hw",
    authDomain: "hermes-26852.firebaseapp.com",
    databaseURL: "https://hermes-26852-default-rtdb.firebaseio.com",
    projectId: "hermes-26852",
    storageBucket: "hermes-26852.appspot.com",
    messagingSenderId: "912955608346",
    appId: "1:912955608346:web:64ad92942b5800112fb0a3"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export const Firebase = {
    db,
}