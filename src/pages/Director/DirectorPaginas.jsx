import { Routes, Route } from "react-router-dom"
import DirectorListarTrabajadores from "../../components/DirectorListarTrabajadores"
import DirectorDashboard from "../../components/DirectorDashboard";
import DirectorVerExpediente from "../../components/DirectorVerExpediente";


function DirectorPaginas() {
    return (

        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
                <div className="space-y-6">
                    <Routes>
                        <Route path="/dashboard" element={<DirectorDashboard />} />
                        <Route path="/expedientes" element={<DirectorListarTrabajadores />} />
                        <Route path="/expedientes/:id_expediente" element={<DirectorVerExpediente />} />
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default DirectorPaginas;