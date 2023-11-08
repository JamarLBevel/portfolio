import React from "react";
import App from "./App";
import Contact from "./contact";
import Home from './home';
import Da from './da';
import Movies from "./movies";
import SignIn from "./signIn";
import { BrowserRouter,Route,Routes } from "react-router-dom";

export default function Main(){

    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="da" element={<Da/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="signIn" element={<SignIn />}/>
        </Route>
       </Routes>
       </BrowserRouter>
    );
}