import { Routes, Route } from "react-router-dom"
import DirectorListarTrabajadores from "../../components/DirectorListarTrabajadores"
import DirectorDashboard from "../../components/DirectorDashboard";
import DirectorVerExpediente from "../../components/DirectorVerExpediente";


function DirectorPaginas () {
    return(
        <Routes>
            <Route path="/dashboard" element={<DirectorDashboard />} />
            <Route path="/expedientes" element={<DirectorListarTrabajadores />} />
            <Route path="/expedientes/:id_expediente" element={<DirectorVerExpediente />} />
        </Routes>
    );
}

export default DirectorPaginas;