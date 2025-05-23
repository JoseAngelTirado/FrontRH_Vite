import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ExpedienteService from '../services/ExpedienteService'

const RHListarExpedientes = () => {

  const [expedientes, setExpedientes] = useState([])

  useEffect(() => {
    listarExpedientes()
  }, [])

  const listarExpedientes = () => {
    ExpedienteService.getAllExpedientes().then(response => {
      setExpedientes(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const borrarExpediente = (id) => {
    console.log("Eliminar expediente", id)
  }

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Lista de Expedientes</h2>

      <table className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
        <thead className='bg-pink-300 text-gray-800'>
          <tr>
            <th className='px-6 py-3 text-left'>Número de Expediente</th>
            <th className='px-6 py-3 text-left'>Nombre del Trabajador</th>
            <th className='px-6 py-3 text-left'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {expedientes.map(expediente => (
            <tr key={expediente.id_expediente} className='border-b hover:bg-gray-100 text-black'>
              <td className='px-6 py-4'>{expediente.id_expediente}</td>
              <td className='px-6 py-4'>{expediente.trabajador.nombre}</td>
              <td className='px-6 py-4'>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to={`/rh/expedientes/ver/${expediente.id_expediente}`}
                    className='bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200'
                  >
                    Ver Expediente
                  </Link>
                  <button
                    onClick={() => borrarExpediente(expediente.id_expediente)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200'
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default RHListarExpedientes
