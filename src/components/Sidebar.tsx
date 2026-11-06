import "../styles/Sidebar.css";

// una función que recibe el nombre de la sección y no devuelve nada
interface Props {
    setSeccion: (seccion: string) => void // aquí no pongo null porque los botones nuncah arán que sea null
}

function Sidebar({ setSeccion }: Props) {
    return (
        <div className="sidebar">
            {/* cuando hagan clic en este botón, ejecuta setSeccion('Personal') */}
            <button onClick={() => setSeccion("Personal")}>Personal</button>
            <button onClick={() => setSeccion("Inventario")}>Inventario</button>
            <button onClick={() => setSeccion("Incidencias")}>Incidencias</button>
        </div>
    )
}

export default Sidebar;