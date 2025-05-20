import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpresaService from "../services/EmpresaService";
import { ArrowLeftCircle } from "lucide-react";

const RHVerEmpresa = () => {
  const navigate = useNavigate();
  const { id_empresa } = useParams();

  const [formDataEmpresa, setFormDataEmpresa] = useState({
    razon_social: "",
    rfc_empresa: "",
    direccion: "",
    giro_empresarial: "",
    regimen_fiscal: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataEmpresa({ ...formDataEmpresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const empresa = {
      razon_social: formDataEmpresa.razon_social,
      rfc_empresa: formDataEmpresa.rfc_empresa,
      direccion: formDataEmpresa.direccion,
      giro_empresarial: formDataEmpresa.giro_empresarial,
      regimen_fiscal: formDataEmpresa.regimen_fiscal,
      telefono: formDataEmpresa.telefono,
    };

    if (id_empresa) {
      EmpresaService.updateEmpresa(id_empresa, empresa)
        .then(() => {
          navigate("/rh/empresa/informacion/" + id_empresa);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id_empresa) {
      EmpresaService.getEmpresaById(id_empresa)
        .then((response) => {
          setFormDataEmpresa(response.data);
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
            Editar Empresa #{id_empresa}
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-purple-600"
          >
            <ArrowLeftCircle size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Razón Social</label>
            <input
              type="text"
              name="razon_social"
              value={formDataEmpresa.razon_social}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">RFC</label>
            <input
              type="text"
              name="rfc_empresa"
              value={formDataEmpresa.rfc_empresa}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formDataEmpresa.direccion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Giro Empresarial</label>
            <input
              type="text"
              name="giro_empresarial"
              value={formDataEmpresa.giro_empresarial}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Régimen Fiscal</label>
            <input
              type="text"
              name="regimen_fiscal"
              value={formDataEmpresa.regimen_fiscal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formDataEmpresa.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-xl hover:bg-purple-700 transition"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default RHVerEmpresa;
