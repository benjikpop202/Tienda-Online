import '../styles/home.css'
import Card from '../components/Cards'

const Home = ()=>{
    return(
        <div className="home-container">
          <h1>Resultados de Productos</h1>
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
          </div>
        </div>
    )
}

export default Home