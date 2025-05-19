import { useState, useEffect } from 'react'
import TrabajadorService from '../services/TrabajadorService';
import { Link } from 'react-router-dom';
import ExpedienteService from '../services/ExpedienteService';

const DirectorListarExpedientes = () => {
    const [expedientes, setExpedientes] = useState([]);

    useEffect(() => {
        listarExpedientes();
    }, [])

    const listarExpedientes = () => {
        ExpedienteService.getAllExpedientes().then(response => {
            setExpedientes(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Lista de expedientes</h2>
                <Link
                    to="/director/dashboard"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors"
                >
                    ⬅️ Regresar
                </Link>
            </div>

            <form className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="buscador"
                        placeholder="Buscar trabajador"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Buscar
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-purple-600 text-white text-left">
                            <th className="px-6 py-3">No de expediente</th>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expedientes.map(expediente => (
                            <tr key={expediente.id_expediente} className="border-b hover:bg-gray-100 text-gray-800">
                                <td className="px-6 py-4">{expediente.id_expediente}</td>
                                <td className="px-6 py-4">{expediente.nombre}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        className="text-blue-600 hover:underline"
                                        to={`/expedientes/${expediente.id_expediente}`}
                                    >
                                        📁 Ver Expediente
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DirectorListarExpedientes;