import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ExpedienteService from "../services/ExpedienteService";

const RHActualizarExpedientes= () => {
    const navigate = useNavigate();
    const { id_expediente } = useParams();

    console.log(id_expediente)

    const [expediente, setExpediente] = useState({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        direccion: "",
        telefono: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpediente({ ...fexpediente, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const campo in expediente) {
            if (!expediente[campo].trim()) {
                alert(`El campo  ${campo} es obligatorio.`);
                return;
            }
        }

        const expediente = {
            nombre: formDataexpediente.nombre,
            apellidoPaterno: formDataexpediente.apellidoPaterno,
            apellidoMaterno: formDataexpediente.apellidoMaterno,
            direccion: formDataexpediente.direccion,
            telefono: formDataexpediente.telefono
        };

        if (id_expediente) {
            expedienteService.updateexpediente(id_expediente, expediente).then((response) => {
                console.log(response.data);
                navigate('/rh/dashboard')
            }).catch(error => {
                console.log(error);
            })
        } else {
            expedienteService.createexpediente(expediente).then((response) => {
                console.log(response.data);
                navigate('/rh/dashboard')
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        if (id_expediente) {
            expedienteService.getexpedienteById(id_expediente).then((response) => {
                setFormDataexpediente({
                    nombre: response.data.nombre,
                    apellidoPaterno: response.data.apellidoPaterno,
                    apellidoMaterno: response.data.apellidoMaterno,
                    direccion: response.data.direccion,
                    telefono: response.data.telefono,
                })
            }).catch(error => {
                console.log(id_expediente)
                console.log(error);
            })
        }
    }, [])

    return (
        <div className="expediente">
            <h2>Registro de expedientes</h2>
            <div>
                <form className="expediente-formulario">
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="Digitar nombre" name="nombre" value={formDataexpediente.nombre} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Paterno</label>
                        <input type="text" placeholder="Digita Apellido Paterno" name="apellidoPaterno" value={formDataexpediente.apellidoPaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Materno</label>
                        <input type="text" placeholder="Digita Apellido Materno" name="apellidoMaterno" value={formDataexpediente.apellidoMaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input type="text" placeholder="Digita direccion" name="direccion" value={formDataexpediente.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" placeholder="Digita Telefono" name="telefono" value={formDataexpediente.telefono} onChange={handleChange} />
                    </div>
                    <button className="" onClick={(e) => handleSubmit(e)}>Guardar</button>
                    <Link to='/rh/dashboard' className="">Cancelar</Link>
                </form>
            </div>
        </div>

    )
}
export default RHActualizarExpedientes;