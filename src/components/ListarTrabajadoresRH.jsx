import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import TrabajadorService from '../services/TrabajadorService';

const ListarTrabajadoresRH = () => {
    const [trabajadores, setTrabajadores] = useState([]);

    useEffect(() => {
        listarTrabajadores();
    }, [])

    const listarTrabajadores = () => {
        TrabajadorService.getAllTrabajadores().then(response => {
            setTrabajadores(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const borrarTrabajador = (id_trabajador ) => {
        TrabajadorService.deleteTrabajador(id_trabajador).then((response) => {
            listarTrabajadores();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className=''>
            <h2>Lista de Trabajadores</h2>
            <table className=''>
                <thead>
                    <tr>
                        <th>Nombre(s)</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trabajadores.map(
                            trabajadores =>
                                <tr key={trabajadores.id_trabajador}>
                                    <td>{trabajadores.nombre}</td>
                                    <td>{trabajadores.apellidoPaterno}</td>
                                    <td>{trabajadores.apellidoMaterno}</td>
                                    <td>{trabajadores.direccion}</td>
                                    <td>{trabajadores.telefono}</td>
                                    <td>
                                        <Link className='' to={`/rh/actualizar-trabajador/${trabajadores.id_trabajador}`}>Actualizar</Link>
                                        <button onClick={() => borrarTrabajador(trabajadores.id_trabajador)}>Eliminar</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListarTrabajadoresRH;