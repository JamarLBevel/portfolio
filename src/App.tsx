import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
    <Navbar bg="dark" variant='dark' expand="lg">
     <Container>
       <Navbar.Brand href="#home">Jamar Bevel Portfolio</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Item>
           <Nav.Link href="/contact">contact</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
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
