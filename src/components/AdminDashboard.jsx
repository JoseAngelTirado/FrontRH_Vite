import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Administrador</h1>

      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/admin/listar")}
          className="w-full bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-700 transition duration-200"
        >
            Listar Usuarios

        </button>

        <button
          onClick={() => navigate("/admin/agregar")}
          className="w-full bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition duration-200"
        >
            Agregar Usuario
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
