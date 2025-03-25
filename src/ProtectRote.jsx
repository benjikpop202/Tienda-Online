import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import Loading from './components/loading';

const ProtectRoute = ()=>{
  const {isAuthenticated, loading} = useAuth()
  if (loading) return <Loading/>
  if(!isAuthenticated && !loading) return <Navigate to='/login' replace/>
  return <Outlet/>

}

export default ProtectRoute