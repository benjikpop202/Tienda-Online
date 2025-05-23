import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import Navbar from './components/NavBar.jsx';
import Home from './pages/home.jsx'
import Categorias from './pages/categorias.jsx';
import Contacto from './pages/contacto.jsx';
import AdminSection from './pages/admin.jsx';
import ProductSection from './pages/product.jsx';
import CarritoSection from './pages/carrito.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Overlay from './components/overlay.jsx';
import ProtectRoute from './ProtectRote.jsx';
import Loading from './components/loading.jsx';
import './styles/App.css'


function App() {
  const {loading} = useAuth()

  if (loading) return <Loading/>
  return (
     <Router>
      <Navbar />  
      <div className="App">
        <Routes>
          <Route path='/register' element={<Overlay contenido={<Register />}/>}/>
          <Route path='/login' element={<Overlay contenido={<Login />}/>}/>
          <Route element={<ProtectRoute />}>
           <Route path="/" element={<Home />} />
           <Route path="/categorias" element={<Categorias />} />
           <Route path="/contacto" element={<Contacto />} />
           <Route path="/admin" element={<AdminSection />} />
           <Route path="/product/:id" element={<ProductSection />} />
           <Route path="/carrito" element={<CarritoSection />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
