import { Routes, Route } from "react-router-dom"
import TrabajadorActualizar from "../../components/TrabajadorActualizar"
import TrabajadorVer from "../../components/TrabajadorVer"


function TrabajadorPaginas () {
    return(
        <Routes>
            <Route path="/:id_trabajador" element={<TrabajadorVer />} />
            <Route path="/actualizar/:id_trabajador" element={<TrabajadorActualizar />} />
        </Routes>
    );
}

export default TrabajadorPaginas;