import '../styles/home.css'
import Card from '../components/Cards'
import Buscador from '../components/buscador'
import { useState, useEffect } from "react";

const Home = ()=>{

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productos");  // Solicitud al proxy
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProducts();
  }, []);

    return(
        <div className="home-container">
          <div className="head">
          <Buscador/>
          <h1>Resultados de Productos</h1>
          </div>
          <div className='ProductsContainer'>
            <Card image={"/assets/products/Jacket man.jpeg"}
            title={"Camisa estilo casual"} descripcion={"camisa estilo causal a la venta"} precio={"$100.000"}></Card>
            <Card 
            image={"/assets/products/Mouse led.jpeg"}
            title={"Mouse con Bluetooth"}
            descripcion={"Mouse con Bluetooth y luces LED para una experiencia unica"}
            precio={"$20.000"}
            />
            <Card image={"/assets/products/Coverse.jpeg"} title={"Zapatillas Converse"} descripcion={"zapatillas converse celestes a la moda"} precio={"$40.000"}/>
            <Card image={"/assets/products/Cropped Woman.jpeg"} title={"Sudadera Cropped"} descripcion={"sudadera cropped femenina ideal para este verano"} precio={"$40.000"}/>
            <Card image={"/assets/products/A20 samsung.jpeg"} title={"Samsung Galxy S20"} descripcion={"samsung S20 5G Ultima version a la venta"} precio={"$120.000"}/>
            <Card image={"/assets/products/polera negra.jpeg"} title={"Sudadera Negra"} descripcion={"sudadera negra a un buen precio"} precio={"$20.000"}/>
            <Card image={"/assets/products/A12 green.jpeg"} title={"Galxy A12 Green Version"} descripcion={"un celular con estilo mas soft y aesthetic"} precio={"$125.000"}/>
            <Card image={"/assets/products/A12 samsung.jpeg"} title={"Samsung Galaxy A12"} descripcion={"Samsung A12 a la venta"} precio={"$120.000"}/>
            <Card image={"/assets/products/2023 Ford Ranger Raptor.jpeg"} title={"Ford Ranger Raptor"} descripcion={"Ford ranger a prueba de de de cualquier desafio"} precio={"$10.000.000"}/>
            <Card image={"/assets/products/descarga (11).jpeg"} title={"Adidas Shoes"} descripcion={"Zapatillas adidas blancas y negras"} precio={"$40.000"}/>
            <Card image={"/assets/products/descarga (10).jpeg"} title={"Toyota Hylux"} descripcion={"Toyota Hylux Gris modelo 2024"} precio={"$12.000.000"}/>
            <Card image={"/assets/products/Nike Shoes _ Nike Dunk Panda _ Color_ Black _ Size_ 9.jpeg"} title={"Nikes Dunk Panda"} descripcion={"Nikes Dunk Panda negras y blancas"} precio={"$50.000"}/>
          </div>
        </div>
    )
}

export default Home