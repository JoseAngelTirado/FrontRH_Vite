import { Routes, Route, useNavigate } from "react-router-dom"
import AdminAgregarUsuario from "../../components/AdminAgregarUsuario"
import AdminListarUsuarios from "../../components/AdminListarUsuarios"

function AdminPagina() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Administrar Usuarios</h2>
          <button
            onClick={() => navigate("/admin/agregar")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            + Agregar Usuario
          </button>
        </div>

        <div className="space-y-6">
          <Routes>
            <Route path="/actualizar/:id_usuario" element={<AdminAgregarUsuario />} />
            <Route path="/agregar" element={<AdminAgregarUsuario />} />
            <Route path="/dashboard" element={<AdminListarUsuarios />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminPagina;
