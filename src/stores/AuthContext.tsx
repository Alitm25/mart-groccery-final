import React, {createContext, useState} from "react";
import {UserType} from "@/types/api/Auth";

interface Props {
    children: React.ReactNode;
}

interface authContextType{
    isLogin: boolean,
    login: (jwt :string, user :UserType) =>void;
}

const AuthContext = createContext<authContextType>({isLogin: false, login: () => {} })


export function AuthContextProvicer({children} :Props) {
    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = (jwt :string, user :UserType) => {
        window.localStorage.setItem('token', jwt);
        window.localStorage.setItem('user', JSON.stringify(user));
        setIsLogin(true);
    }

    return (
       <AuthContext.Provider value={{isLogin: isLogin, login: loginHandler}}>{children}</AuthContext.Provider>
    )
}