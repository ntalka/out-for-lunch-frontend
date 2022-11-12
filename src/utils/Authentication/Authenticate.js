import { createContext, useContext, useState } from "react";
// noinspection ES6CheckImport
import { useLocation, Navigate, Outlet} from "react-router-dom";

const AuthContext = createContext(null);
let token = null;
export const useAuth = () => useContext(AuthContext);

export const Authenticator = ({ children }) => {
    //default sessionstorage user if present
    const [user, setUser] = useState(!localStorage.getItem("authToken") ? sessionStorage.getItem("authToken") : localStorage.getItem("authToken"));

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Bare bones authentication and redirect to nopermission page -AK
// TODO: add additional checks for admin privileges
export const Authenticate=()=>{
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return (
            <Navigate
                to={{ pathname: "/nopermission", state: { from: location } }}
            />
        );
    }
    else{
        token=user;
        return <Outlet/>
    }
};

export const getUser=()=>{
    return token;
}

