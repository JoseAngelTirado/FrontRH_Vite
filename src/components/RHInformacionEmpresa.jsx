import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpresaService from "../services/EmpresaService";
import { ArrowLeftCircle } from "lucide-react";

const RHInformacionEmpresa = () => {
  const navigate = useNavigate();
  const { id_empresa } = useParams();

  const [empresa, setEmpresa] = useState({
    razon_social: "",
    rfc_empresa: "",
    direccion: "",
    giro_empresarial: "",
    regimen_fiscal: "",
    telefono: "",
  });

  useEffect(() => {
    if (id_empresa) {
      EmpresaService.getEmpresaById(id_empresa)
        .then((response) => {
          setEmpresa(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id_empresa]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-purple-600">
            Información de Empresa #{id_empresa}
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-purple-600"
          >
            <ArrowLeftCircle size={28} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-500 mb-1">Razón Social</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.razon_social}
            </p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">RFC</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.rfc_empresa}
            </p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Dirección</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.direccion}
            </p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Giro Empresarial</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.giro_empresarial}
            </p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Régimen Fiscal</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.regimen_fiscal}
            </p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Teléfono</label>
            <p className="w-full bg-gray-100 rounded-xl px-4 py-2">
              {empresa.telefono}
            </p>
          </div>
        </div>

        {/* Botón para ir a editar */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate(`/empresa/ver/${id_empresa}`)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Actualizar Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default RHInformacionEmpresa;
