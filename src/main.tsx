import React from "react";
import App from "./App";
import Contact from "./contact";
import Home from './home';
import { BrowserRouter,Route,Routes } from "react-router-dom";

export default function Main(){

    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Route>
       </Routes>
       </BrowserRouter>
    );
}