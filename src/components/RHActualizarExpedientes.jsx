import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ExpedienteService from "../services/ExpedienteService";

const RHActualizarExpedientes = () => {
  const navigate = useNavigate();
  const { id_expediente } = useParams();

  const [expediente, setExpediente] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    direccion: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpediente({ ...expediente, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const campo in expediente) {
      if (!expediente[campo].trim()) {
        alert(`El campo ${campo} es obligatorio.`);
        return;
      }
    }

    if (id_expediente) {
      ExpedienteService.updateExpediente(id_expediente, expediente)
        .then((response) => {
          console.log(response.data);
          navigate("/rh/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ExpedienteService.createExpediente(expediente)
        .then((response) => {
          console.log(response.data);
          navigate("/rh/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id_expediente) {
      ExpedienteService.getExpedienteById(id_expediente)
        .then((response) => {
          setExpediente({
            nombre: response.data.nombre,
            apellidoPaterno: response.data.apellidoPaterno,
            apellidoMaterno: response.data.apellidoMaterno,
            direccion: response.data.direccion,
            telefono: response.data.telefono,
          });
        })
        .catch((error) => {
          console.log(id_expediente);
          console.log(error);
        });
    }
  }, [id_expediente]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Registro de Expediente</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto space-y-4">
        <div>
          <label className="block font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={expediente.nombre}
            onChange={handleChange}
            placeholder="Digitar nombre"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Apellido Paterno</label>
          <input
            type="text"
            name="apellidoPaterno"
            value={expediente.apellidoPaterno}
            onChange={handleChange}
            placeholder="Digita Apellido Paterno"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Apellido Materno</label>
          <input
            type="text"
            name="apellidoMaterno"
            value={expediente.apellidoMaterno}
            onChange={handleChange}
            placeholder="Digita Apellido Materno"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Dirección</label>
          <input
            type="text"
            name="direccion"
            value={expediente.direccion}
            onChange={handleChange}
            placeholder="Digita dirección"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={expediente.telefono}
            onChange={handleChange}
            placeholder="Digita teléfono"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Guardar
          </button>
          <Link
            to="/rh/dashboard"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RHActualizarExpedientes;
