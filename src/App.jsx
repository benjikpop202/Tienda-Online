import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
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
import './styles/App.css'

function App() {
  return (
    <AuthProvider>
     <Router>
      <Navbar />  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Overlay contenido={<Register />}/>}/>
          <Route path='/login' element={<Overlay contenido={<Login />}/>}/>
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<AdminSection />} />
          <Route path="/product/:id" element={<ProductSection />} />
          <Route path="/carrito" element={<CarritoSection />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App
