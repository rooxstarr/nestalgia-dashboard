import "../styles/Personal.css"
import EmployeeCard from "../components/EmployeeCard";
import { Search } from "lucide-react"
import { useState } from "react";

// personal es una vista porque es una pantalla completa
// pero la tarjeta de los empleados es un componente porque es una pieza que se repite dentro de esa pantalla

// como es un empleado en mi app, hago la interfaz lo más fácil posible y con mis nombres
interface Empleado {
    nombre: string;
    correo: string;
    ciudad: string;
}


// este componente dice "tengo 10 empleados voy a crear 10 tarjetas y a cada una le doy los datos de un empleado"

function Personal() {
    // lista de empleados ya traducidos a mi forma. empeiza vacía
    const [listaEmpleados, setListaEmpleados] = useState<Empleado[]>([]);
    const [busqueda, setBusqueda] = useState(""); // lo que se escribe en el buscador, también empieza vacío
    const [cargando, setCargando] = useState(false); // estamos cargando? pues al rpincipio no

    // pide empleados a la api, lo traduce a mi forma y lo guarda en el estado
    async function meterEmpleados() {
        setCargando(true); // empezamos a cargar los datos
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!respuesta.ok) {
                throw new Error("No se han podido cargar los empleados");
            }

            const datos = await respuesta.json();
            console.log(datos);

            // mapeo: para cada empleado de la api creo un empleado con mis nombres
            // así saco la ciudad de dentro de address por ejemplo
            const empleados: Empleado[] = datos.map((empleadoAPI) => {
                const empleado: Empleado = {
                    nombre: empleadoAPI.name,
                    correo: empleadoAPI.email,
                    ciudad: empleadoAPI.address.city
                };
                return empleado;
            })

            // guardo la lista que he traducido
            setListaEmpleados(empleados);

        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    }

    // me quedo solo con los empleados cuyo nombre tiene lo que he escrito
    // paso todo a minúscula para que ignore las mayus
    // si no se ha escrito nada salen todos
    const empleadosConFiltro = listaEmpleados.filter((empleado) => empleado.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    let mensajeDeCarga = null;

    if (cargando === true) {
        mensajeDeCarga = <p>Cargando datos del servidor…</p>;
    }

    return (
        <div className="personal">
            <h2>Personal</h2>
            {/* en el buscador, el icono de la lupa y el input van jutnos en la misma caja */}
            <div className="buscador">
                <Search size={18} color="#256466"></Search>
                {/* cada vez que escribo lo escrito se guarda en búsqueda */}
                <input type="text" placeholder="Escribe el nombre del empleado" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}></input>
            </div>

            <button onClick={() => meterEmpleados()}>Ver los empleados</button> {/* al pulsar se piden los empleados a la api */}

            {mensajeDeCarga}

            {/* y por cada empleado filtrado una tarjeta rellena sus huecos con sus datos */}
            <div className="empleados">
                {empleadosConFiltro.map((e) => <EmployeeCard nombre={e.nombre} correo={e.correo} ciudad={e.ciudad} />)}
            </div>
        </div>
    )
}

export default Personal;