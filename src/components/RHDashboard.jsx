import { Link } from "react-router-dom";

const RHDashboard = () =>{


    return( 
        <div>

            <Link to={"/rh/expedientes"} className="">Ver expedientes</Link>

            <Link to={"/rh/empresa"} className="">Informacion de la Empresa</Link>

        </div>
    );

}

export default RHDashboard;