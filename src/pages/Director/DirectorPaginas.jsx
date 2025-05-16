import { Routes, Route } from "react-router-dom"
import ListarTrabajadoresDirector from "../../components/ListarTrabajadoresDirector"


function DirectorPaginas () {
    return(
        <Routes>
            <Route path="/dashboard" element={<ListarTrabajadoresDirector />} />
        </Routes>
    );
}

export default DirectorPaginas;