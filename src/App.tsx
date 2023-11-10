import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAuth, onAuthStateChanged } from  'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDEFKx8JiRJg5bo2t7PQafqB90NuZp-39M",
  authDomain: "treedanceentertainment-a873f.firebaseapp.com",
  projectId: "treedanceentertainment-a873f",
  storageBucket: "treedanceentertainment-a873f.appspot.com",
  messagingSenderId: "484872818811",
  appId: "1:484872818811:web:8cb8fd02da57cb303d52de",
  measurementId: "G-RP9JG2MYLY"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
function App() {
const [signedIn,setSignedIn] = useState(false);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user is logged in jamar")
    setSignedIn(true)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("user not logged in")
    setSignedIn(false)

  }
});
  return (

    <div>
    
    <Navbar bg="dark" variant='dark' expand="lg">
     <Container>
       <Navbar.Brand href="#home">TREE DANCE</Navbar.Brand>

         <Nav>
           <Nav.Item>
            <Nav.Link className=' p-2  bg-warning text-dark rounded-pill' href='/signIn'>Sign In</Nav.Link>
           </Nav.Item>
         </Nav>
         
     
     </Container>
   </Navbar>

     <Outlet/>
    

   </div>
  );
}

export default App;
