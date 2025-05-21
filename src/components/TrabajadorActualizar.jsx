import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TrabajadorService from "../services/TrabajadorService";
import { ArrowLeftCircle } from "lucide-react";

const TrabajadorVer = () => {
  const navigate = useNavigate();
  const { id_trabajador } = useParams();

  const [formDataTrabajador, setFormDataTrabajador] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    direccion: "",
    telefono: "",
    rfc: null,
    nss: null,
    curp: null,
    acta: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === "file") {
      setFormDataTrabajador(prev => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else {
      setFormDataTrabajador(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const trabajador = {
      nombre: formDataTrabajador.nombre,
      apellidoPaterno: formDataTrabajador.apellidoPaterno,
      apellidoMaterno: formDataTrabajador.apellidoMaterno,
      direccion: formDataTrabajador.direccion,
      telefono: formDataTrabajador.telefono,
    };

    console.log(trabajador)


    if (id_trabajador) {
      TrabajadorService.updateTrabajador(id_trabajador, trabajador)
        .then(() => {
          navigate("/trabajador/dashboard/" + id_trabajador);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id_trabajador) {
      TrabajadorService.getTrabajadorById(id_trabajador)
        .then((response) => {
          const data = response.data || {};
          const usuario = data.usuario || {};

          setFormDataTrabajador({
            nombre: data.nombre || "",
            apellidoPaterno: data.apellidoPaterno || "",
            apellidoMaterno: data.apellidoMaterno || "",
            direccion: data.direccion || "",
            telefono: data.telefono || "",
            rfc: data.rfc || null,
            nss: data.nss || null,
            curp: data.curp || null,
            acta: data.acta || null
          });

        })
        .catch((error) => {
          console.log("Error en getTrabajadorById:", error);
        });
    }
  }, [id_trabajador]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-purple-600">
            Información de Trabajador #{id_trabajador}
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
            <label className="block text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formDataTrabajador.nombre || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Apellido Paterno</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formDataTrabajador.apellidoPaterno || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Apellido Materno</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formDataTrabajador.apellidoMaterno || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formDataTrabajador.direccion || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formDataTrabajador.telefono || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">RFC</label>
            <div className="relative">
              <input
                type="file"
                name="rfc"
                accept=".pdf"
                onChange={(e) => {
                  handleChange(e);
                  const fileName = e.target.files[0]?.name || "Seleccionar PDF";
                  e.target.nextElementSibling.querySelector('span').textContent = fileName;
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 bg-white">
                <span className="text-gray-500 truncate">Seleccionar PDF</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">NSS</label>
            <div className="relative">
              <input
                type="file"
                name="nss"
                accept=".pdf"
                onChange={(e) => {
                  handleChange(e);
                  const fileName = e.target.files[0]?.name || "Seleccionar PDF";
                  e.target.nextElementSibling.querySelector('span').textContent = fileName;
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 bg-white">
                <span className="text-gray-500 truncate">Seleccionar PDF</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Curp</label>
            <div className="relative">
              <input
                type="file"
                name="curp"
                accept=".pdf"
                onChange={(e) => {
                  handleChange(e);
                  const fileName = e.target.files[0]?.name || "Seleccionar PDF";
                  e.target.nextElementSibling.querySelector('span').textContent = fileName;
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 bg-white">
                <span className="text-gray-500 truncate">Seleccionar PDF</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Acta de nacimiento</label>
            <div className="relative">
              <input
                type="file"
                name="acta"
                accept=".pdf"
                onChange={(e) => {
                  handleChange(e);
                  const fileName = e.target.files[0]?.name || "Seleccionar PDF";
                  e.target.nextElementSibling.querySelector('span').textContent = fileName;
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 bg-white">
                <span className="text-gray-500 truncate">Seleccionar PDF</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-xl hover:bg-purple-700 transition"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrabajadorVer;