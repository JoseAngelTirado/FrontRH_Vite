const RHDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Panel de Recursos Humanos
        </h2>

        <div className="space-y-4">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200">
            Ver Expedientes
          </button>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200">
            Agregar Expediente
          </button>

          <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition duration-200">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default RHDashboard;
