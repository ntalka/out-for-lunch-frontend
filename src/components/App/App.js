import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes as Switch, Route, Navigate} from 'react-router-dom';
import Main from "../Main/Main";
import Login from '../Login/Login';
import Profile from "../Profile/Profile";


function App() {
    /*
    TODO: Token handling, better routing system
     */
    //const [token, setToken] = useState();
    // if(!token) {
    //     return <Login setToken={setToken} />
    // }
    return (
        <div className="wrapper">
            <h1>Application main</h1>
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route path="/main" element={<Main />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Navigate replace to="/main" />} />
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
