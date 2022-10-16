import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet, Link} from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const Authenticator = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Bare bones uthenthication and redirect to nopermission page -AK
// TODO: add additional checks for admin privileges
export const Authenticate=()=>{
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return (
            <Navigate
                to={{ pathname: "/nopermission", state: { from: location } }}
                reload
            />
        );
    }
    return <Outlet />;
};