import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet} from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

//TODO: add session and local storage solutions, integrating token with backend
export const Authenticator = ({ children }) => {
    const [user, setUser] = useState(null);
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


