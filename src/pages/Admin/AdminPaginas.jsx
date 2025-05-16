import { Routes, Route } from "react-router-dom"
import AgregarUsuarioAdmin from "../../components/AgregarUsuarioAdmin"
import ListarUsuariosAdmin from "../../components/ListarUsuariosAdmin"


function AdminPagina() {
    return (
        <Routes>
            <Route path="/actualizar-usuario/:id_usuario" element={<AgregarUsuarioAdmin />} />
            <Route path="/agregar-usuario" element={<AgregarUsuarioAdmin />} />
            <Route path="/dashboard" element={<ListarUsuariosAdmin />} />
        </Routes>
    );
}

export default AdminPagina;