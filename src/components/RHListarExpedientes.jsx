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
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=''>
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
                                <tr key={expedientes.id_expediente}>
                                    <td>{expedientes.nombre}</td>
                                    <td>
                                        <Link className='' to={`/expedientes/${expedientes.id_expediente}`}>Ver Expediente</Link>
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