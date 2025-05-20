import { Routes, Route, useNavigate } from "react-router-dom";
import RHDashboard from "../../components/RHDashboard";
import RHActualizarExpedientes from "../../components/RHActualizarExpedientes";
import RHInformacionEmpresa from "../../components/RHInformacionEmpresa";
import RHListarExpedientes from "../../components/RHListarExpedientes";
import RHVerEmpresa from "../../components/RHVerEmpresa";
import RHVerExpediente from "../../components/RHVerExpediente";

function RHPagina() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Panel de Recursos Humanos</h2>
        </div>

        <div className="space-y-6">
          <Routes>
            <Route path="/dashboard" element={<RHDashboard />} />
            <Route path="/expedientes/listar" element={<RHListarExpedientes />} />
            <Route path="/expedientes/actualizar/:id_expediente" element={<RHActualizarExpedientes />} />
            <Route path="/expedientes/ver/:id_expediente" element={<RHVerExpediente />} />
            <Route path="/empresa/informacion" element={<RHInformacionEmpresa />} />
            <Route path="/empresa/ver/:id_empresa" element={<RHVerEmpresa />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default RHPagina;
