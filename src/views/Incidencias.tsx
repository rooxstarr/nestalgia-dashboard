import IncidentCard from "../components/IncidentCard";
import "../styles/Incidencias.css"
import { useState } from "react";

// así es una incidencia en mi app
interface Incidencia {
    nombre: string;
    resuelta: boolean;
}

function Incidencias() {

    // lista de incidencias ya traducidas a mi forma. empieza vacía
    const [listaIncidencias, setListaIncidencias] = useState<Incidencia[]>([]);
    const [cargando, setCargando] = useState(false);

    // pide las incidencias a la api, las traduce a mi forma y las guarda en el estado
    async function meterIncidencias() {
        setCargando(true); // empezamos a cargar los datos
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");

            if (!respuesta.ok) {
                throw new Error("No se han podido cargar las incidencias");
            }

            const datos = await respuesta.json();
            console.log(datos);

            // mapeo: por cada incidencia de la api creo una incidencia con mis nombres
            const incidencias: Incidencia[] = datos.map((incidenciaAPI) => {
                const incidencia: Incidencia = {
                    nombre: incidenciaAPI.title,
                    resuelta: incidenciaAPI.completed
                };
                return incidencia;
            })

            setListaIncidencias(incidencias);

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
        <div className="incidencias">
            <h2>Incidencias</h2>
            {/* al pulsar le botón se piden la sincidencias a la api */}
            <button onClick={() => meterIncidencias()}>Ver las incidencias</button>
            {mensajeDeCarga}
            <div className="lista-incidencias">
                {/* por cada incidencia una tarjeta. la tarjeta decide si se pinta verde o rojo */}
                {listaIncidencias.map((e) => <IncidentCard nombre={e.nombre} resuelta={e.resuelta} />)}
            </div>
        </div>
    )
}

export default Incidencias;