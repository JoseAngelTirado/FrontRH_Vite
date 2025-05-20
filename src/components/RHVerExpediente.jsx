import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ExpedienteService from "../services/ExpedienteService"

const RHVerExpediente = () => {
  const { id_expediente } = useParams()
  const navigate = useNavigate()
  const [expediente, setExpediente] = useState(null)

  useEffect(() => {
    ExpedienteService.getExpedienteById(id_expediente)
      .then(response => setExpediente(response.data))
      .catch(error => console.log(error))
  }, [id_expediente])

  if (!expediente) {
    return <div className="p-8">Cargando expediente...</div>
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Expediente número: {expediente.id_expediente}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Información Personal</h3>
          <p className="text-gray-600">Nombre: <span className="font-medium">{expediente.trabajador?.nombre}</span></p>
          <p className="text-gray-600">RFC: <span className="font-medium">{expediente.rfc_trabajador}</span></p>
          <p className="text-gray-600">NSS: <span className="font-medium">{expediente.nss}</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Información Laboral</h3>
          <p className="text-gray-600">Fecha de registro: <span className="font-medium">{expediente.fechaRegistro}</span></p>
          <p className="text-gray-600">Antigüedad: <span className="font-medium">{expediente.antiguedad} años</span></p>
          <p className="text-gray-600">Sueldo: <span className="font-medium">${expediente.sueldo}</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Información de Empresa</h3>
          <p className="text-gray-600">Empresa: <span className="font-medium">{expediente.empresa?.nombre}</span></p>
          <p className="text-gray-600">RFC Empresa: <span className="font-medium">{expediente.rfc_empresa}</span></p>
        </div>

      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate(`/rh/expedientes/actualizar/${id_expediente}`)}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-200"
        >
          Actualizar Información Laboral
        </button>
        <button
          onClick={() => navigate("/rh/expedientes/listar")}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Volver a Lista
        </button>
      </div>
    </div>
  )
}

export default RHVerExpediente
