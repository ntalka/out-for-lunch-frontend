import './App.css';
import React from 'react';
// noinspection ES6CheckImport
import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';
import Main from "../Main/Main";
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import AppBar from "../AppBar/AppBar";
import Register from "../Register/Register";
import {HuldBanner} from "../HuldBanner/HuldBanner";
import {
    Authenticator,
    Authenticate,
} from "../Authentication/Authenticate";
import NoPermission from "../NoPermission/NoPermission";



/*
    The root app functionality and browser routing system.
    Contains always on display AppBar
    TODO: And handles page authentication checks
    -AK
 */
const App = () => {
    /*
    TODO: Token handling

     */
        return (
            <div className="wrapper">
                <Authenticator>
                    <BrowserRouter>

                        <header className="App-header">
                            <AppBar/>
                        </header>

                                <Routes>
                                    <Route path="/nopermission" element={<NoPermission/>}/>

                                    <Route path="*" element={<Login/>}/>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register/>}/>

                                    <Route element={<Authenticate/>}>
                                        <Route path="/main" element={<Main />} />
                                        <Route path="/profile" element={<Profile />} />
                                    </Route>
                                </Routes>

                        <footer>
                            <HuldBanner/>
                        </footer>

                    </BrowserRouter>
                </Authenticator>
            </div>
        );

}

export default App;
