import '../styles/register.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Register = ()=>{
   const {register, handleSubmit} = useForm()
   const {SignUp, isAuthenticated} = useAuth()
   const Navigation = useNavigate()
   useEffect(()=>{
     if(isAuthenticated) Navigation('/')
   },[isAuthenticated])

   const Onsubmit = handleSubmit(async(values)=>{
      SignUp(values)
      })
   return(
        <form onSubmit={Onsubmit} className='AuthForm'>
           <h1>Crea tu cuenta</h1> 
           <input className='AuthInput' type="text" placeholder="nombre" {...register("userName", {required: true})}/>
           <input className='AuthInput' type="email" placeholder="correo electronico" {...register("email", {required: true})}/>
           <input className='AuthInput' type="password" placeholder="contraseña" {...register("password", {required: true})}/>
           <button className='AuthSubmit' type="submit">Empezar Ahora</button>
           <p>Ya tienes una cuenta? <a href="/login">Log in</a></p>
        </form>
   )
}

export default Register