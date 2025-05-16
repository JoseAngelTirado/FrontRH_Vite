import { Routes, Route } from "react-router-dom"
import RHListarExpedientes from "../../components/RHListarExpedientes"
import RHActualizarExpedientes from "../../components/RHActualizarExpedientes"
import RHDashboard from "../../components/RHDashboard";


function AdminPagina() {
    return (
        <Routes>
            <Route path="/dashboard" element={<RHDashboard />} />
            <Route path="/expedientes" element={<RHListarExpedientes />} />
            <Route path="/expedientes/:id_expediente" element={<RHDashboard />} />
            <Route path="/expedientes/actualizar/:id_expediente" element={<RHActualizarExpedientes />} />
        </Routes>
    );
}

export default AdminPagina;