import '../styles/register.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Register = ()=>{
   const {register, handleSubmit, formState:{errors}} = useForm()
   const {SignUp, isAuthenticated, errors: registerErrors} = useAuth()
   const Navigation = useNavigate()
   useEffect(()=>{
     if(isAuthenticated && !registerErrors) Navigation('/')
   },[isAuthenticated, registerErrors])

   const Onsubmit = handleSubmit(async(values)=>{
      try {
         SignUp(values)
      } catch (error) {
         console.log(error.message);
         
      }
     
      })
   return(
        <form onSubmit={Onsubmit} className='AuthForm'>
           <h1>Crea tu cuenta</h1> 
           {registerErrors && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          {Array.isArray(registerErrors) 
            ? registerErrors.map((error, index) => <p key={index}>{error}</p>)
            : <p>{registerErrors}</p>}
        </div>
      )}
           <input className='AuthInput' type="text" placeholder="nombre" {...register("userName", {required: true})}/>
           {errors.userName && (
            <p style={{color:'red'}}>Nombre de usuario requerido</p>
           )}
           <input className='AuthInput' type="email" placeholder="correo electronico" {...register("email", {required: true})}/>
           {errors.email && (
            <p style={{color:'red'}}>Email requerido</p>
           )}
           <input className='AuthInput' type="password" placeholder="contraseña" {...register("password", {required: true})}/>
           {errors.password && (
            <p style={{color:'red'}}>Contraseña requerida</p>
           )}
           <button className='AuthSubmit' type="submit">Empezar Ahora</button>
           <p>Ya tienes una cuenta? <a href="/login">Iniciar Sesión</a></p>
        </form>
   )
}

export default Register