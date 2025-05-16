import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TrabajadorService from "../services/TrabajadorService";
import '../assets/TrabajadorFormulario.css'

const VerTrabajador = () => {

    const navigate = useNavigate();
    const { id_trabajador } = useParams();

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
                    navigate('/trabajador/actualizar/' + id_trabajador)
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
    })

    return (
        <div className="trabajador">
            <h2>Información de Trabajador {id_trabajador}</h2>
            <div>
                <form className="trabajador-formulario">
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="" name="nombre" value={formDataTrabajador.nombre} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Paterno</label>
                        <input type="text" placeholder="" name="apellidoPaterno" value={formDataTrabajador.apellidoPaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Apellido Materno</label>
                        <input type="text" placeholder="" name="apellidoMaterno" value={formDataTrabajador.apellidoMaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input type="text" placeholder="" name="direccion" value={formDataTrabajador.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" placeholder="" name="telefono" value={formDataTrabajador.telefono} onChange={handleChange} />
                    </div>
                    <button className="" onClick={(e) => handleSubmit(e)}>Ir a Actualizar Información</button>
                </form>
            </div>
        </div>
    );

}

export default VerTrabajador;