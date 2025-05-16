import { Routes, Route } from "react-router-dom"
import DirectorListarTrabajadores from "../../components/DirectorListarTrabajadores"


function DirectorPaginas () {
    return(
        <Routes>
            <Route path="/dashboard" element={<DirectorListarTrabajadores />} />
        </Routes>
    );
}

export default DirectorPaginas;