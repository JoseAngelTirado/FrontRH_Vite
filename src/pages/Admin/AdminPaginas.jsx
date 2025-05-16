import { Routes, Route } from "react-router-dom"
import AgregarUsuarioAdmin from "../../components/AgregarUsuarioAdmin"
import ListarUsuariosAdmin from "../../components/ListarUsuariosAdmin"
import Header from "../../components/Header";


function AdminPagina() {
    return (
        <Routes>
            <Route path="/actualizar-usuario/:id_usuario" element={
                <>
                    <Header />
                    <AgregarUsuarioAdmin />
                </>
            } />
            <Route path="/agregar-usuario" element={
                <>
                    <Header />
                    <AgregarUsuarioAdmin />
                </>
            } />
            <Route path="/dashboard" element={
                <>
                    <Header />
                    <ListarUsuariosAdmin />
                </>
            } />
        </Routes>
    );
}

export default AdminPagina;