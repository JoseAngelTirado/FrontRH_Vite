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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataTrabajador({ ...formDataTrabajador, [name]: value });
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

    if (id_trabajador) {
      TrabajadorService.updateTrabajador(id_trabajador, trabajador)
        .then(() => {
          navigate("/trabajadores/actualizar/" + id_trabajador);
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
          setFormDataTrabajador({
            nombre: response.data.nombre,
            apellidoPaterno: response.data.apellidoPaterno,
            apellidoMaterno: response.data.apellidoMaterno,
            direccion: response.data.direccion,
            telefono: response.data.telefono,
          });
        })
        .catch((error) => {
          console.log(error);
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
              value={formDataTrabajador.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Apellido Paterno</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formDataTrabajador.apellidoPaterno}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Apellido Materno</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formDataTrabajador.apellidoMaterno}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formDataTrabajador.direccion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formDataTrabajador.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-xl hover:bg-purple-700 transition"
          >
            Ir a Actualizar Información
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrabajadorVer;