import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './pages/home.jsx'
import Categorias from './pages/categorias.jsx';
import Contacto from './pages/contacto.jsx';
import AdminSection from './pages/admin.jsx';
import ProductSection from './pages/product.jsx';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Navbar />  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<AdminSection />} />
          <Route path="/product/:id" element={<ProductSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
