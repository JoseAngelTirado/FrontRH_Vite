import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TrabajadorService from "../services/TrabajadorService";
import '../assets/TrabajadorFormulario.css'

const ActualizarTrabajador = () => {
    const navigate = useNavigate();
    const { id_trabajador } = useParams();

    console.log(id_trabajador)

    const [formDataTrabajador, setFormDataTrabajador] = useState({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        direccion: "",
        telefono: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataTrabajador({ ...formDataTrabajador, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const campo in formDataTrabajador) {
            if (!formDataTrabajador[campo].trim()) {
                alert(`El campo  ${campo} es obligatorio.`);
                return;
            }
        }

        const trabajador = {
            nombre: formDataTrabajador.nombre,
            apellidoPaterno: formDataTrabajador.apellidoPaterno,
            apellidoMaterno: formDataTrabajador.apellidoMaterno,
            direccion: formDataTrabajador.direccion,
            telefono: formDataTrabajador.telefono
        };

        if (id_trabajador) {
            TrabajadorService.updateTrabajador(id_trabajador, trabajador).then((response) => {
                console.log(response.data);
                navigate('/trabajador/actualizar-trabajador:/id_usuario')
            }).catch(error => {
                console.log(error);
            })
        } else {
            TrabajadorService.createTrabajador(trabajador).then((response) => {
                console.log(response.data);
                navigate('/trabajador/actualizar-trabajador:/id_usuario')
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        if (id_trabajador) {
            TrabajadorService.getTrabajadorById(id_trabajador).then((response) => {
                setFormDataTrabajador({
                    nombre: response.data.nombre,
                    apellidoPaterno: response.data.apellidoPaterno,
                    apellidoMaterno: response.data.apellidoMaterno,
                    direccion: response.data.direccion,
                    telefono: response.data.telefono,
                })
            }).catch(error => {
                console.log(id_trabajador)
                console.log(error);
            })
        }
    }, [])

    return (
        <div className="trabajador">
            <h2>Registro de trabajadores</h2>
            <div>
                <form className="trabajador-formulario">
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="Digitar nombre" name="nombre" value={formDataTrabajador.nombre} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Paterno</label>
                        <input type="text" placeholder="Digita Apellido Paterno" name="apellidoPaterno" value={formDataTrabajador.apellidoPaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Materno</label>
                        <input type="text" placeholder="Digita Apellido Materno" name="apellidoMaterno" value={formDataTrabajador.apellidoMaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input type="text" placeholder="Digita direccion" name="direccion" value={formDataTrabajador.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" placeholder="Digita Telefono" name="telefono" value={formDataTrabajador.telefono} onChange={handleChange} />
                    </div>
                    <button className="" onClick={(e) => handleSubmit(e)}>Guardar</button>
                </form>
            </div>
        </div>

    )
}
export default ActualizarTrabajador;