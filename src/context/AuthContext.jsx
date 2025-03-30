import { createContext, useState, useContext, useEffect } from "react";
import { RegisterRequest, LoginRequest, verifyToken } from '../api/auth'
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
    const [loading, setLoading] = useState(true);

    const SignUp = async (user)=>{
      try {
        const res = await RegisterRequest(user)
        console.log(res);
        setUser(res)
        setIsAuthenticated(true)
        setErrors([])
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

    // Borra errores después de 5 segundos
    useEffect(() => {
        if (errors && errors.length > 0) { // ✅ Agregado check para evitar error
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

  // Revisa si hay un token en las cookies al cargar la app
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
  
      try {
        const res = await verifyToken();
        console.log("Verificación de token:", res); // ✅ Verifica la respuesta
        if (!res) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
  
        setUser(res); // ✅ Guarda correctamente el usuario
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
  
    checkLogin();
  }, []);
  

    return(
        <AuthContext.Provider value={{SignUp,SignIn, loading, user, isAuthenticated, errors}}>
          {children}
        </AuthContext.Provider>
    )
}