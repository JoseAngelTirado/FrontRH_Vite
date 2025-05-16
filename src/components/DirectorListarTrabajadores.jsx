import { useState, useEffect } from 'react'
import TrabajadorService from '../services/TrabajadorService';

const DirectorListarTrabajadores = () => {
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

    return (
        <div className=''>
            <h2>Lista de Trabajadores </h2>
            <table className=''>
                <thead>
                    <tr>
                        <th>Nombre(s)</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
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
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default DirectorListarTrabajadores;