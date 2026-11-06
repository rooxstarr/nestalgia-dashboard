import "../styles/EmployeeCard.css"

// mi lista de huequitos
interface Props {
    nombre: string;
    correo: string;
    ciudad: string;
}

// saco estos 3 datos y tienen la forma que dice mi lsita de huequitos props
function EmployeeCard({ nombre, correo, ciudad }: Props) {
    return (
        <div className="tarjetaEmpleado">
            <h3>{nombre}</h3>
            <p>{correo}</p>
            <p className="textito">{ciudad}</p>
        </div>
    )
}

export default EmployeeCard