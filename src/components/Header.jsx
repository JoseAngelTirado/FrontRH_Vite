import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


const Header = () => {
    const {user, logout} = useUser();
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-purple-600 p-4 shadow-md rounded-b-2xl">
      <h2 className="text-2xl font-bold text-white">RH Soft</h2>

      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            alt="Avatar de usuario"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
        </div>

        <div className="flex flex-col">
          <strong className="text-white">Nombre: {user?.nombre}</strong>
          <span className="text-sm text-purple-200">Rol : {user?.rol}</span>
        </div>

        <button
          onClick={logout}
          className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Header;
