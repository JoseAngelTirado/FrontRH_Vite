import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPaginas from "./pages/Admin/AdminPaginas";
import RHPaginas from "./pages/RH/RHPaginas"
import DirectorPaginas from "./pages/Director/DirectorPaginas";
import TrabajadorPaginas from "./pages/Trabajador/TrabajadorPaginas";
import FormularioLogin from "./pages/FormularioLogin";

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FormularioLogin />} />

          <Route path="/admin/*" element={<AdminPaginas />} />
          <Route path="/trabajador/*" element={<TrabajadorPaginas />} />
          <Route path="/rh/*" element={<RHPaginas />} />
          <Route path="/director/*" element={<DirectorPaginas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;