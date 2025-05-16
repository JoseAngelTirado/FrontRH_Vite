import { Routes, Route } from "react-router-dom"
import AdminAgregarUsuario from "../../components/AdminAgregarUsuario"
import AdminListarUsuarios from "../../components/AdminListarUsuarios"

function AdminPagina() {
    return (
        <Routes>
            <Route path="/actualizar/:id_usuario" element={<AdminAgregarUsuario />} />
            <Route path="/agregar" element={<AdminAgregarUsuario />} />
            <Route path="/dashboard" element={<AdminListarUsuarios />} />
        </Routes>
    );
}



export default AdminPagina;