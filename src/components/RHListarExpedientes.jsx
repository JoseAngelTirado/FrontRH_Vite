import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import ExpedienteService from '../services/ExpedienteService';

const RHListarExpedientes = () => {

    const [expedientes, setExpedientes] = useState([]);

    useEffect(() => {
        listarExpedientes();
    }, [])

    const listarExpedientes = () => {
        ExpedienteService.getAllExpedientes().then(response => {
            setExpedientes(response.data);
            console.log(expedientes)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='text-black' >
            <h2>Lista de expedientes</h2>
            <table className=''>
                <thead>
                    <tr>
                        <th>Numero de expediente</th>
                        <th>Nombre del trabajador</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expedientes.map(
                            expedientes =>
                                <tr key={expedientes.id_expediente} className='border-b hover:bg-gray-100 text-black'>
                                    <td className='px-6 py-4'>{expedientes.id_expediente}</td>
                                    <td className='px-6 py-4'>{expedientes.trabajador.nombre}</td>
                                    <td>
                                        <Link className='' to={`/expedientes/ver/${expedientes.id_expediente}`}>Ver Expediente</Link>
                                        <button onClick={() => borrarExpediente(expedientes.id_trabajador)}>Eliminar</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default RHListarExpedientes;