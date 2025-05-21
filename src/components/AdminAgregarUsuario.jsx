import { useState, useEffect } from "react";
import UsuarioService from "../services/UsuarioService";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrabajadorService from "../services/TrabajadorService";

const AdminAgregarUsuario = () => {
  const navigate = useNavigate();
  const { id_usuario } = useParams();

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "trabajador",
    id_empresa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const campo in usuario) {
      const valor = usuario[campo];

      if (
        (typeof valor === "string" && !valor.trim()) ||
        (typeof valor === "number" && (isNaN(valor) || valor <= 0))
      ) {
        alert(`El campo ${campo} es obligatorio.`);
        return;
      }
    }

    const nuevoUsuario = {
      nombre: usuario.nombre,
      email: usuario.email,
      password: usuario.password,
      rol: usuario.rol,
      empresa: {
        id_empresa: usuario.id_empresa
      }
    };

    try {
      if (id_usuario) {
        await UsuarioService.updateUsuario(id_usuario, nuevoUsuario);
        alert("Usuario actualizado");
      } else {
        const usuarioResponse = await UsuarioService.createUsuario(nuevoUsuario);
        const id_usuario = usuarioResponse.data.id_usuario;

        const mandar = {
          nombre: nuevoUsuario.nombre,
          usuario:{
            id_usuario:id_usuario
          }
        }

        console.log(mandar)

        await TrabajadorService.createTrabajador(mandar)

        alert("Usuario agregado");

      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
    }
  };  

  useEffect(() => {
    if (id_usuario) {
      UsuarioService.getUsuarioById(id_usuario)

        .then((response) => {
          setUsuario({
            id_empresa: response.data.empresa.id_empresa,
            nombre: response.data.nombre,
            email: response.data.email,
            password: response.data.password,
            rol: response.data.rol,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const titulo = () =>
    id_usuario ? "Actualizar usuario" : "Agregar usuario";

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {titulo()}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Id de empresa:
            </label>
            <input
              type="text"
              name="id_empresa"
              value={usuario.id_empresa}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digita la empresa"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nombre completo:
            </label>
            <input
              type="text"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digita el nombre"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              value={usuario.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Rol:
            </label>
            <select
              name="rol"
              value={usuario.rol}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="trabajador">Trabajador</option>
              <option value="rh">Recursos Humanos</option>
              <option value="directivo">Director</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Guardar
            </button>

            <Link
              to="/admin/dashboard"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAgregarUsuario;
