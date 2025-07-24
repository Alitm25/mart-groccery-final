import React, {createContext, useContext, useEffect, useState} from "react";
import {UserType} from "@/types/api/Auth";

interface Props {
    children: React.ReactNode;
}

interface authContextType{
    isLogin: boolean,
    login: (jwt :string, user :UserType) =>void;
    logout: () => void;
}

const AuthContext = createContext<authContextType>({isLogin: false, login: () => {}, logout: () => {} })
export const useAuth = () => useContext(AuthContext)


export function AuthContextProvider({children} :Props) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setIsLogin(true);
        }
    }, []);

    const loginHandler = (jwt :string, user :UserType) => {
        window.localStorage.setItem('token', jwt);
        window.localStorage.setItem('user', JSON.stringify(user));
        setIsLogin(true);
    }

    const logOutHandler = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setIsLogin(false);
    }

    return (
       <AuthContext.Provider value={{isLogin: isLogin, login: loginHandler, logout: logOutHandler}}>{children}</AuthContext.Provider>
    )
}