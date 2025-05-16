import { Routes, Route } from "react-router-dom"
import ActualizarTrabajador from "../../components/ActualizarTrabajador"

function TrabajadorPaginas () {
    return(
        <Routes>
            <Route path="/actualizar-trabajador:/id_usuario" element={<ActualizarTrabajador />} />
        </Routes>
    );
}

export default TrabajadorPaginas;