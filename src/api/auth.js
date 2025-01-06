import axios from 'axios'

export const RegisterRequest = (user)=>{axios.post('/api/register', user)}