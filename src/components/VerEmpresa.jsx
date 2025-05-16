import { useState } from "react";

const VerEmpresa = () => {

    const [] = useState({
        nombre_empresa:"",
        razon_social:"",
        rfc_empresa:"",
        direccion_empresa:"",
        giro_empresarial:"",
        regimen_fiscal:"",
        telefono_empresa:"",
    })


    return (
        <div className="trabajador">
            <h2>Registro de trabajadores</h2>
            <div>
                <form className="trabajador-formulario">
                    <div>
                        <label>Nombre de la empresa</label>
                        <input type="text" placeholder="" name="nombre_empresa" value={formDataTrabajador.nombre} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Razón Social</label>
                        <input type="text" placeholder="" name="razon_social" value={formDataTrabajador.apellidoPaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>RFC</label>
                        <input type="text" placeholder="" name="rfc_empresa" value={formDataTrabajador.apellidoMaterno} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input type="text" placeholder="" name="direccion_empresa" value={formDataTrabajador.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Giro Empresarial</label>
                        <input type="text" placeholder="" name="giro_empresarial" value={formDataTrabajador.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Regimen Fiscal</label>
                        <input type="text" placeholder="" name="regimen_fiscal" value={formDataTrabajador.direccion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" placeholder="" name="telefono_empresa" value={formDataTrabajador.telefono} onChange={handleChange} />
                    </div>
                    <button className="" onClick={(e) => handleSubmit(e)}>Ir a Actualizar Información</button>
                </form>
            </div>
        </div>
    );

}
export default VerEmpresa;