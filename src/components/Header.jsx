const Header = () => {
  return (
    <div className="flex items-center justify-between bg-purple-600 p-4 shadow-md rounded-b-2xl">
      <h2 className="text-2xl font-bold text-white">RH Soft</h2>

      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            alt="Avatar de usuario"
            src="https://unavatar.io/AdrinEmir1"
          />
        </div>

        <div className="flex flex-col">
          <strong className="text-white">Nombre</strong>
          <span className="text-sm text-purple-200">Rol</span>
        </div>

        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition duration-200">
          Salir
        </button>
      </div>
    </div>
  );
};

export default Header;
