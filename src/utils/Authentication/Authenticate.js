import { createContext, useContext, useState } from "react";
// noinspection ES6CheckImport
import { useLocation, Navigate, Outlet} from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

//TODO: local storage solution, integrating token with backend
export const Authenticator = ({ children }) => {
    //default sessionstorage user if present
    const [user, setUser] = useState(sessionStorage.getItem("user"));
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
    return <Outlet/>
};


