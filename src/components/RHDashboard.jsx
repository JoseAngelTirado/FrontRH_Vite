import { useNavigate } from "react-router-dom";

function RHDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Recursos Humanos</h1>

      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={() => navigate("/rh/expedientes/listar")}
          className="w-full bg-pink-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-pink-200 transition duration-200"
        >
              Listar Expedientes
        </button>

        <button
          onClick={() => navigate("/rh/expedientes/actualizar/1")} // puedes cambiar el ID dinámicamente luego
          className="w-full bg-pink-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-pink-200 transition duration-200"
        >
          Actualizar Expediente
        </button>

        <button
          onClick={() => navigate("/rh/expedientes/ver/1")} // ejemplo, puedes cambiar el ID dinámicamente
          className="w-full bg-pink-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-pink-200 transition duration-200"
        >
          Ver Expediente
        </button>

        <button
          onClick={() => navigate("/rh/empresa/informacion")}
          className="w-full bg-pink-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-pink-200 transition duration-200"
        >
          Información de la Empresa
        </button>

        <button
          onClick={() => navigate("/rh/empresa/ver/1")} // ejemplo de ID
          className="w-full bg-pink-200 text-gray-800 px-4 py-3 rounded-xl hover:bg-pink-200 transition duration-200"
        >
          Ver Empresa
        </button>
      </div>
    </div>
  );
}

export default RHDashboard;
