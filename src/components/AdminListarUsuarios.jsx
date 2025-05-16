import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UsuarioService from '../services/UsuarioService';
import TrabajadorService from '../services/TrabajadorService';

const AdminListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios();
    }, [])

    const listarUsuarios =()=>{
        UsuarioService.getAllUsuarios().then(response => {
            setUsuarios(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    // const borrarUsuario = (id_usuario) =>{
    //     TrabajadorService.deleteTrabajador(id_usuario)
    //     UsuarioService.deleteUsuario(id_usuario).then((response)=>{

    //         listarUsuarios();
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }
    return (
        <div className=''>
            <h2>Lista de Usuarios</h2>
            <Link to='/admin/agregar' className=''>Agregar Usuario</Link>
            <table className=''>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(
                            usuarios =>
                                <tr key={usuarios.id_usuario}>
                                    <td>{usuarios.id_usuario}</td>
                                    <td>{usuarios.nombre}</td>
                                    <td>{usuarios.email}</td>
                                    <td>{usuarios.rol}</td>
                                    <td>
                                        <Link className='' to={`/admin/actualizar/${usuarios.id_usuario}`}>Actualizar</Link>
                                        {/* <button onClick={()=>borrarUsuario(usuarios.id_usuario)}>Eliminar</button> */}
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AdminListarUsuarios;