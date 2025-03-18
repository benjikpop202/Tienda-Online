import { createContext, useState, useContext, useEffect } from "react";
import { RegisterRequest, LoginRequest } from '../api/auth'
import Cookies from 'js-cookie'

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
    const [errors, setErrors] = useState([])

    const SignUp = async (user)=>{
      try {
        const res = await RegisterRequest(user)
        console.log(res);
        setUser(res)
        setIsAuthenticated(true)
        setErrors(null)
        } catch (error) {
            setErrors(error.message)
        }
    }

    const SignIn = async (user)=>{
        try {
            const res = await LoginRequest(user)
            console.log(res);
            setIsAuthenticated(true)
            setUser(res)
        } catch (error) {
            /*if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])*/
            setErrors([error.message])
            
            
        }
    }

    useEffect(() =>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return(
        <AuthContext.Provider value={{SignUp,SignIn, user, isAuthenticated, errors}}>
          {children}
        </AuthContext.Provider>
    )
}