import { createContext, useState, useContext } from "react";
import { RegisterRequest } from '../api/auth'

export const AuthContext = createContext()

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth debe ser usado con un AuthProvider")
    }
    return context
}

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const SignUp = async (user)=>{
        const res = await RegisterRequest(user)
        console.log(res);
        setUser(res)
        setIsAuthenticated(true)
    }
    return(
        <AuthContext.Provider value={{SignUp, user, isAuthenticated}}>
          {children}
        </AuthContext.Provider>
    )
}