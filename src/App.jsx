import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPaginas from "./pages/Admin/AdminPaginas";
import RHPaginas from "./pages/RH/RHPaginas"
import DirectorPaginas from "./pages/Director/DirectorPaginas";
import TrabajadorPaginas from "./pages/Trabajador/TrabajadorPaginas";
import FormularioLogin from "./pages/FormularioLogin";
import Header from "./components/Header";
import ProtectedRoute from "./utils/ProtectedRouted";
import { UserProvider } from "./context/UserContext";

function App() {

  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<FormularioLogin />} />
            <Route element={<ProtectedRoute allowedRoles={["admin"]}/>}>
              <Route path="admin/*" element=
                {
                  <>
                    <Header />
                    <AdminPaginas />
                  </>
                }
              />

            </Route>
            <Route element={<ProtectedRoute allowedRoles={["trabajador"]}/>}>
              <Route path="/trabajador/*" element=
                {
                  <>
                    <Header />
                    <TrabajadorPaginas />
                  </>
                }
              />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={["rh"]}/>}>
              <Route path="/rh/*" element=
                {
                  <>
                    <Header />
                    <RHPaginas />
                  </>
                }
              />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={["director"]}/>}>
              <Route path="/director/*" element=
                {
                  <>
                    <Header />
                    <DirectorPaginas />
                  </>
                }
              />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;