import '../styles/register.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { SignIn, errors: loginErrors, isAuthenticated } = useAuth();
    const Navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated) Navigate('/')
      },[isAuthenticated])

    const Onsubmit = handleSubmit(async (values) => {
        try {
            await SignIn(values);
        } catch (error) {
            console.log(error.message);
        }
    });

    return (
        <form onSubmit={Onsubmit} className="AuthForm">
            <h1>Iniciar Sesión</h1>
            
            {loginErrors && loginErrors.map((error, index) => (
                <p key={index} style={{ color: 'red' }}>{error}</p>
            ))}

            <input className="AuthInput" type="email" placeholder="Correo electrónico" {...register("email", { required: true })} />
            {errors.email && <p style={{ color: 'red' }}>Email requerido</p>}

            <input className="AuthInput" type="password" placeholder="Contraseña" {...register("password", { required: true })} />
            {errors.password && <p style={{ color: 'red' }}>Contraseña requerida</p>}

            <button className="AuthSubmit" type="submit">Log in</button>
            <p>Nuevo en carrito express? <a href="/register">Registrarse</a></p>
        </form>
    );
}

export default Login