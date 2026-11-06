import "../styles/Canvas.css";
import Incidencias from "../views/Incidencias";
import Inventario from "../views/Inventario";
import Personal from "../views/Personal";

// canvas necesita recibir una sección que puede ser un texto o nada
interface Props {
    seccion: string | null;
}

// si sección es igual a personal, entonces pinta la pantalla personal (así con todos)
function Canvas({ seccion }: Props) {
    return (
        <div className="canvas">
            {seccion === "Personal" && <Personal />}
            {seccion === "Inventario" && <Inventario />}
            {seccion === "Incidencias" && <Incidencias />}
        </div>
    )
}

export default Canvas;