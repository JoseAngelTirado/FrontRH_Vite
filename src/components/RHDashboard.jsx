import { Link } from "react-router-dom";

const RHDashboard = () =>{


    return( 
        <div>
            <ol>
                <li><Link to={"/rh/expedientes"} className="">Ver expedientes</Link></li>
                <li><Link to={"/rh/empresa"} className="">Informacion de la Empresa</Link></li>
            </ol>
            

            

        </div>
    );

}

export default RHDashboard;