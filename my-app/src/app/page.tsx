import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaHBWVbWGx78ixXtXtQ3qKXkpB8j3Mkf8",
  authDomain: "dbsheet-947ed.firebaseapp.com",
  projectId: "dbsheet-947ed",
  storageBucket: "dbsheet-947ed.appspot.com",
  messagingSenderId: "1074077914250",
  appId: "1:1074077914250:web:e007cd841a2d2cf8424973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function page() {
  return (
    <>

    <div className="formbi">
      <div className="form">
      <form action="">
      <label htmlFor="">name::</label>
      <input className='label'  required type="text" />
      <label htmlFor="">email::</label>
      <input className='label'  required type="email" />
      <label htmlFor="">password::</label>
      <input  className='label'  required type="password" />
      <input className='sbmit' type="submit" />

    </form>
  
    </div>
 <div className="aas mover">
 </div>
<div className="aas1 mover">
 </div>
    </div>
    </>

  )
}
