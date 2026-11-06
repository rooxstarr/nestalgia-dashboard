import ProductCard from "../components/ProductCard";
import "../styles/Inventario.css"
import { useState } from "react";

// inventario es una vista porque es una pantalla completa
// y la tarjeta de producto es un componente porque se repite dentro de ella

// así es un producto en mi app
interface Producto {
    nombre: string;
    precio: number;
    imagen: string;
}

function Inventario() {

    // lista de productos ya traducidos a mi forma. empieza vacía
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState(false); // cargamos? al principio no

    // pide los productos a la api, los traduce a mi forma y los guarda en el estado
    async function meterProductos() {
        setCargando(true); // empezamos a cargar los datos
        try {
            const respuesta = await fetch("https://fakestoreapi.com/products?limit=6");

            if (!respuesta.ok) {
                throw new Error("No se han podido cargar los productos");
            }

            const datos = await respuesta.json();
            console.log(datos);

            // mapeo: por cada producto de la api creo un producto con mis nombres
            const productos: Producto[] = datos.map((productoAPI) => {
                const producto: Producto = {
                    nombre: productoAPI.title,
                    precio: productoAPI.price,
                    imagen: productoAPI.image
                };
                return producto;
            })

            // guardo la lista. al cambiar el estado se vuelve a pintar
            setListaProductos(productos);

        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    }

    let mensajeDeCarga = null;

    if (cargando === true) {
        mensajeDeCarga = <p>Cargando datos del servidor…</p>;
    }

    return (
        <div className="inventario">
            <h2>Inventario</h2>
            {/* al pulsar el botón se piden los productos a la api */}
            <button onClick={() => meterProductos()}>Ver los productos</button>
            {mensajeDeCarga}
            <div className="productos">
                {/* por cada producto una tarjeta */}
                {listaProductos.map((e) => <ProductCard nombre={e.nombre} precio={e.precio} imagen={e.imagen} />)}
            </div>
        </div>
    )
}

export default Inventario;