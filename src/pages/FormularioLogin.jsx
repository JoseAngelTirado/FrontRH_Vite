import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useUser } from '../context/UserContext'; // Importamos el hook del contexto
import UsuarioService from '../services/UsuarioService';

const FormularioLogin = () => {
  const [formDataCredenciales, setFormDataCredenciales] = useState({
    id_usuario: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    id_usuario: '',
    password: '',
  });

  // Usamos el contexto en lugar de useNavigate
  const { login } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataCredenciales({ ...formDataCredenciales, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validación básica
    let hasError = false;
    let newErrors = { id_usuario: '', password: '' };

    if (!formDataCredenciales.id_usuario.trim()) {
      newErrors.id_usuario = 'Ingresa tu usuario';
      hasError = true;
    }

    if (!formDataCredenciales.password.trim()) {
      newErrors.password = 'Ingresa tu contraseña';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {
      const response = await UsuarioService.getUsuarioById(formDataCredenciales.id_usuario);
      const usuario = response.data;

      if (usuario.password === formDataCredenciales.password) {
        // En lugar de localStorage y navigate, usamos la función login del contexto
        login(usuario.id_usuario, usuario.rol, usuario.nombre,usuario.empresa.id_empresa); // Esto actualiza el estado global y redirige automáticamente
      } else {
        alert('Contraseña incorrecta');
      }
    } catch (error) {
      console.log(error)
      alert('Usuario no encontrado');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Usuario</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="text"
                name="id_usuario"
                value={formDataCredenciales.id_usuario}
                onChange={handleChange}
                className={`w-full px-4 py-2 pl-10 border ${errors.id_usuario ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="ID de Usuario"
              />
            </div>
            {errors.id_usuario && <p className="text-red-500 text-sm mt-1">{errors.id_usuario}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                name="password"
                value={formDataCredenciales.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;