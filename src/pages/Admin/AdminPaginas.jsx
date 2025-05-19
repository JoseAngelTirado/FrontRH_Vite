import { Routes, Route, useNavigate } from "react-router-dom"
import AdminAgregarUsuario from "../../components/AdminAgregarUsuario"
import AdminListarUsuarios from "../../components/AdminListarUsuarios"
import AdminDashboard from "../../components/AdminDashboard"

function AdminPagina() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        {/* <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Administración de Usuarios</h2>
        </div> */}

        <div className="space-y-6">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/listar" element={<AdminListarUsuarios />} />
            <Route path="/agregar" element={<AdminAgregarUsuario />} />
            <Route path="/actualizar/:id_usuario" element={<AdminAgregarUsuario />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminPagina;
