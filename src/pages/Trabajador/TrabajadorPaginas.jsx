import { Routes, Route } from "react-router-dom"
import ActualizarTrabajador from "../../components/ActualizarTrabajador"
import VerTrabajador from "../../components/VerTrabajador"


function TrabajadorPaginas () {
    return(
        <Routes>
            <Route path="/:id_trabajador" element={<VerTrabajador />} />
            <Route path="/actualizar/:id_trabajador" element={<ActualizarTrabajador />} />
        </Routes>
    );
}

export default TrabajadorPaginas;