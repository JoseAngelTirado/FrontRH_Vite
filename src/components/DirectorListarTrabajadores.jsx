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
        <div className=''>
            <h2>Lista de expedientes</h2>
            <div>
                <form>
                    <div>
                        <input type="text" name="buscador" placeholder="Buscar trabajador" />
                        <button>Buscar</button>
                    </div>
                </form>
            </div>
            <table className=''>
                <thead>
                    <tr>
                        <th>No de expediente</th>
                        <th>Nombre</th>
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
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to='/director/dashboard' className="">Regresar</Link>
        </div>
    )
}

export default DirectorListarExpedientes;