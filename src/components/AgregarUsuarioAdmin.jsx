import { useState, useEffect } from "react";
import UsuarioService from "../services/UsuarioService";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../assets/UsuarioFormulario.css'

const AgregarUsuarioAdmin = () => {
    const navigate = useNavigate();
    const { id_usuario } = useParams();

    const [formDataUsuario, setFormDataUsuario] = useState({
        nombre: "",
        email: "",
        password:"",
        rol: "trabajador",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataUsuario({ ...formDataUsuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const campo in formDataUsuario) {   //Hacemos validacion que los campos no esten vacios
            if (!formDataUsuario[campo].trim()) {
                alert(`El campo  ${campo} es obligatorio.`);
                return;
            }
        }

        const usuario = {
            nombre: formDataUsuario.nombre,
            email: formDataUsuario.email,
            password:formDataUsuario.password,
            rol: formDataUsuario.rol
        };


        if (id_usuario) {
            UsuarioService.updateUsuario(id_usuario, usuario).then((response) => {
                console.log(response.data);
                navigate('/admin')
            }).catch(error => {
                console.log(error);
            })
        } else {
            UsuarioService.createUsuario(usuario).then((response) => {
                console.log(response.data);
                navigate('/admin')
            }).catch(error => {
                console.log("Error aqui:", error);
            })
        }
    }

    useEffect(() => {
        if (id_usuario) {
            UsuarioService.getUsuarioById(id_usuario).then((response) => {
                setFormDataUsuario({
                    nombre: response.data.nombre,
                    email: response.data.email,
                    rol: response.data.rol,
                })
            }).catch(error => {
                console.log(id_usuario)
                console.log(error);
            })
        }
    }, [])

    const titulo = () => {
        if (id_usuario) {
            return <h2>Actualizar usuario</h2>
        } else {
            return <h2>Agregar usuario</h2>
        }
    }

    return (
        <div className="usuario">
            <div>
                {titulo()}
            </div>
            <form className="usuario-formulario">
                <div>
                    <label>Nombre completo:</label>
                    <input type="text" name="nombre" value={formDataUsuario.nombre} onChange={handleChange} required />
                </div>

                <div>
                    <label>Correo electrónico:</label>
                    <input type="email" name="email" value={formDataUsuario.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formDataUsuario.password} onChange={handleChange} required />
                </div>

                <div>
                    <label>Rol:</label>
                    <select name="rol" value={formDataUsuario.rol} onChange={handleChange}>
                        <option value="trabajador">Trabajador</option>
                        <option value="rh">Recursos Humanos</option>
                        <option value="dirctivo">Director</option>
                    </select>
                </div>
                <button className="" onClick={(e) => handleSubmit(e)}>Guardar</button>
                <Link to='/admin/dashboard' className="">Cancelar</Link>
            </form>
        </div>
    );


};

export default AgregarUsuarioAdmin;