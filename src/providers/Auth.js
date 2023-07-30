import React, { createContext, useContext, useEffect, useState } from "react";
import { useHook } from "./Hook";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const Auth = ({ children }) => {
    const hook = useHook();
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const checkIfLoggedIn = () => {
        if (window.localStorage.getItem('username')) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }

    // const storeActiveToken = (username, token) => {
    //     let timestamp = Date.now() + (1 * 12 * 60 * 60 * 1000);
    //     window.localStorage.setItem('token', "Token " + token);
    //     window.localStorage.setItem('username', username);
    //     window.localStorage.setItem('timestamp', timestamp);
    //     checkIfLoggedIn();
    // }

    const logOut = () => {
        window.localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        checkIfLoggedIn();
        return () => {
            return true;
        }
    }, [location]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}