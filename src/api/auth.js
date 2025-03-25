import axios from './axios.js'

export const RegisterRequest = async (user)=>{try {
    const response = await axios.post('/api/register', user);
    return response.data; // Retorna los datos al frontend
  } catch (error) {
    // Captura errores y lanza un mensaje al frontend
    if (error.response) {
      throw new Error(error.response.data.message || 'Error al registrarse');
    } else {
      throw new Error('Error de conexión con el servidor');
    }
  }}

  export const LoginRequest = async (user)=>{try {
    const response = await axios.post('/api/login', user);
    return response.data; // Retorna los datos al frontend
  } catch (error) {
    // Captura errores y lanza un mensaje al frontend
    if (error.response) {
      throw new Error(error.response.data.message || 'Error al iniciar sesion');
    } else {
      throw new Error('Error de conexión con el servidor');
    }
  }}

  export const verifyToken = () => axios.get('/api/verifyToken')