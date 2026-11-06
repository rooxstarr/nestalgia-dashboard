import "../styles/Header.css";
import { useState } from "react";

function Header() {

    // esto me guarda la hora actual como texto
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

    setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    }, 1000);


    return (
        <div className="header">
            {/* agrupo el logo y los texxtos para que vayan juntitos a la izq */}
            <div className="marca">
                <img src="/bukligrisito.png" className="logo"></img>
                {/* aquí agrupo el nombre y la frasecilla una debajo de la otra */}
                <div className="texto">
                    <h1>Nestalgia</h1>
                    <p className="eslogan">Tu nido lector: construye el hábito, página a página</p>
                </div>
            </div>
            {/* esto me pinta la variable hora */}
            <p className="hora">{hora}</p>
        </div>
    )
}

export default Header;