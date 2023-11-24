
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBXholDck7_1U3wm7DlP38lPJn9dz4jHGs",
  authDomain: "techcareer-b51a5.firebaseapp.com",
  projectId: "techcareer-b51a5",
  storageBucket: "techcareer-b51a5.appspot.com",
  messagingSenderId: "848959305220",
  appId: "1:848959305220:web:08287eb80cd3db78d7e751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

export const provider = new GoogleAuthProvider