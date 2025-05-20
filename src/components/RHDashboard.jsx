import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function RHDashboard() {
  const {user} = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Recursos Humanos</h1>

      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={() => navigate("/rh/expedientes/listar")}
          className="w-full bg-pink-500 text-white px-4 py-3 rounded-xl hover:bg-pink-600 transition duration-200"
        >
          Expedientes
        </button>

        <button
          onClick={() => navigate(`/rh/empresa/informacion/${user.id_empresa}`)}
          className="w-full bg-pink-500 text-white px-4 py-3 rounded-xl hover:bg-pink-600 transition duration-200"
        >
          Empresas
        </button>
      </div>
    </div>
  );
}

export default RHDashboard;

