// react me improta las tres zonas 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./styles/index.css";
import { useState } from "react";

function App() { // componentes siempre en MAYUS
    // guarda el nombre de la pantalla que se ve ahora
    // puede ser un texto o nada y empieza en null porque no quiero que salga nada hasta darle a un botón
    // tiene que estar aquí en app porque es el padre de sidebar (que l ocambia) y de canvas (que lo lee)
    const [seccion, setSeccion] = useState<string | null>(null);

    return (
        <div className="app">
            <Header></Header>
            <div className="principal">
                <Sidebar setSeccion={setSeccion}></Sidebar>
                <Canvas seccion={seccion}></Canvas>
            </div>
        </div>
    );
}

export default App;