import { Routes, Route } from "react-router-dom";
import TrabajadorActualizar from "../../components/TrabajadorActualizar";
import TrabajadorVer from "../../components/TrabajadorVer";
import TrabajadorDashboard from "../../components/TrabajadorDashboard";

function TrabajadorPaginas() {
  return (
    <Routes>
      <Route path="/dashboard/:id_trabajador" element={<TrabajadorDashboard />} />
      <Route path="/:id_trabajador" element={<TrabajadorVer />} />
      <Route path="/actualizar/:id_trabajador" element={<TrabajadorActualizar />} />
    </Routes>
  );
}

export default TrabajadorPaginas;
