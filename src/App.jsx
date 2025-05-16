import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPaginas from "./pages/Admin/AdminPaginas";
import RHPaginas from "./pages/RH/RHPaginas"
import DirectorPaginas from "./pages/Director/DirectorPaginas";
import TrabajadorPaginas from "./pages/Trabajador/TrabajadorPaginas";
import FormularioLogin from "./pages/FormularioLogin";
import Header from "./components/Header";

function App() {

  return (

    <div>
      <BrowserRouter>

        <Routes>
          
          <Route exact path="/" element={<FormularioLogin />} />

          <Route path="/admin/*" element=
            {
              <>
                <Header />
                <AdminPaginas />
              </>
            }
          />
          <Route path="/trabajador/*" element=
            {
              <>
                <Header />
                <TrabajadorPaginas />
              </>
            }
          />


          <Route path="/rh/*" element=
            {
              <>
                <Header />
                <RHPaginas />
              </>
            }
          />
          <Route path="/director/*" element=
            {
              <>
                <Header />
                <DirectorPaginas />
              </>
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;