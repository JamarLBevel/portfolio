import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
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
function App() {
  return (
    <div>
    <Navbar bg="dark" variant='dark' expand="lg">
     <Container>
       <Navbar.Brand href="#home">TREE DANCE</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Item>
           <Nav.Link href="/contact">Contact</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href='/da'>Sign In</Nav.Link>
           </Nav.Item>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>

     <Outlet/>
   </div>
  );
}

export default App;
