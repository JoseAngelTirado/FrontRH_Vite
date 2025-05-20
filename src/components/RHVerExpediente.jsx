import { useParams } from "react-router-dom";


const RHVerExpediente = ()=>{
    const {id_expediente} = useParams();
    return(
        <div>
            <h2>Expediente numero: {id_expediente} Del trabajador: </h2>

            <div>

            </div>

            <div></div>
        </div>

    )
}

export default RHVerExpediente;