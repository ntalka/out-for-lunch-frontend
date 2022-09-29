import './App.css';
import React, {Component, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Redirect, BrowserRouter
} from 'react-router-dom';
import Main from "../Main/Main";
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import AppBar from "../AppBar/AppBar";
import {HuldBanner} from "../HuldBanner/HuldBanner";
import {render} from "react-dom";


const App = () => {
    /*
    TODO: Token handling, better routing system
    TODO: Move HuldBanner to app.js
     */
    //const [token, setToken] = useState();
    // if(!token) {
    //     return <Login setToken={setToken} />
    // }

        return (
            <div className="wrapper">
                <BrowserRouter>
                    <AppBar/>
                        <header className="App-header">
                                <Routes>
                                    <Route path="/main" element={<Main />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="*" element={<Login/>}/>
                                </Routes>
                        </header>
                </BrowserRouter>
            </div>
        );

}

export default App;
