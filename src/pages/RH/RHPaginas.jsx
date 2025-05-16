import { Routes, Route } from "react-router-dom"
import ListarTrabajadoresRH from "../../components/ListarTrabajadoresRH"
import ActualizarTrabajadoresRH from "../../components/ActualizarTrabajadoresRH"


function AdminPagina() {
    return (
        <Routes>
            <Route path="/dashboard" element={<ListarTrabajadoresRH />} />
            <Route path="/actualizar-trabajador/:id_trabajador" element={<ActualizarTrabajadoresRH />} />

        </Routes>
    );
}

export default AdminPagina;