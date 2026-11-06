import "../styles/IncidentCard.css"

// mis huecos: lo que la tarjeta necesita recibir de incidencias
interface Props {
    nombre: string;
    resuelta: boolean;
}

// las tarjetas de incidencias se pintan verde si están resueltas y rojas si no
function IncidentCard({ nombre, resuelta }: Props) {

    // si está resuelta devuelve la tarjeta verde y la función acaba aquí
    if (resuelta === true) {
        return (
            // esto tiene 2 clases
            <div className="tarjetaIncidencia resuelta">
                <h3>{nombre}</h3>
                <p>Resuelta</p>
            </div>
        )

    }

    // si no ha entrado en el if pq no está resuelta está pendiente: la tarjeta es roja
    return (
        <div className="tarjetaIncidencia pendiente">
            <h3>{nombre}</h3>
            <p>Pendiente</p>
        </div>
    )
}

export default IncidentCard;