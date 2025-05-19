import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UsuarioService from '../services/UsuarioService';

const AdminListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    listarUsuarios();
  }, [])

  const listarUsuarios = () => {
    UsuarioService.getAllUsuarios().then(response => {
      setUsuarios(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Lista de Usuarios</h2>

      <Link 
        to='/admin/agregar'
        className="inline-block mb-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
      >
        ➕ Agregar Usuario
      </Link>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre</th>
              <th className="px-6 py-3 text-left">Correo</th>
              <th className="px-6 py-3 text-left">Rol</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id_usuario} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-800">{usuario.id_usuario}</td>
                <td className="px-6 py-4 text-gray-800">{usuario.nombre}</td>
                <td className="px-6 py-4 text-gray-800">{usuario.email}</td>
                <td className="px-6 py-4 text-gray-800 capitalize">{usuario.rol}</td>
                <td className="px-6 py-4 space-x-2">
                  <Link 
                    className="text-blue-600 hover:underline"
                    to={`/admin/actualizar/${usuario.id_usuario}`}
                  >
                    ✏️ Actualizar
                  </Link>
                  {/* <button onClick={() => borrarUsuario(usuario.id_usuario)} className="text-red-600 hover:underline">🗑️ Eliminar</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminListarUsuarios;
