import { useNavigate, useParams } from "react-router-dom";

const TrabajadorDashboard = () => {
  const { id_trabajador } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Bienvenido Trabajador {id_trabajador}</h1>

      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={() => navigate("/trabajador/" + id_trabajador)}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Ver Información Actual
        </button>

        <button
          onClick={() => navigate("/trabajador/actualizar/" + id_trabajador)}
          className="w-full bg-purple-500 text-white font-semibold py-3 rounded-xl hover:bg-purple-600 transition"
        >
          Actualizar Información
        </button>
      </div>
    </div>
  );
};

export default TrabajadorDashboard;
