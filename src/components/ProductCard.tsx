import "../styles/ProductCard.css"

// la tarjeta necesita recibir esto de inventario
interface Props {
    nombre: string;
    precio: number;
    imagen: string;
}

function ProductCard({ nombre, precio, imagen }: Props) {

    // esta etiqueta solo va a existir si el precio es +50
    // empieza en null y si el producto es caro, meto dentro el texto
    let etiqueta = null;

    if (precio > 50) {
        etiqueta = <p className="etiqueta">Activo de Alto Valor</p>
    }

    return (
        <div className="tarjetaProducto">
            <h3>{nombre}</h3>
            <p>{precio} €</p>
            {/* si el producto es caro aquí sale la etiqueta, si no, es null y no pinta */}
            {etiqueta}
            {/* la foto está en el enlace que guarda imagen */}
            <img src={imagen}></img>
        </div>
    )
}

export default ProductCard;