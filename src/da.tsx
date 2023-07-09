import React from "react";
import { Container,Row,Col,Image,Card,Form,Button,Alert } from "react-bootstrap";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Da() {
    const [show,setShow] = useState(false);
    const auth = getAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    function signUp(){
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  setShow(true);
    }
    return (
<div className="p-4" style={{backgroundColor:'black',width:'100%',height:'100%',position:'fixed',color:'white'}}>
   <Container fluid>
      <h1 className="p-4">Sign Up</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address </Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="johnwick@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
      </Form.Group>
    </Form>
    <div className="d-grid gap-1">
    <Button onClick={signUp} size="lg" variant="warning">Sign Up</Button>
    </div>
    
    <Alert className="p-5 mt-3" show={show} variant="dark">
        <Alert.Heading>Thank you for Subscribing to Tree Dance</Alert.Heading>
        <p>
         Please download Tree Dance on the Apple App Store to continue.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
   </Container>
</div>
    );

}