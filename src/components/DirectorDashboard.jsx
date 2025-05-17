import { Link } from "react-router-dom";

const DirectorDashboard = () => {



    return (
        <div>

            {/* <Link className='' to={`/expedientes/${expedientes.id_expediente}`}>Ver Expediente</Link> */}
            <ol>
                <li><Link to='/director/expedientes' className="">Empresa 1</Link></li>
                <li><Link to='/director/expedientes' className="">Empresa 2</Link></li>
                <li><Link to='/director/expedientes' className="">Empresa 3</Link></li>
            </ol>
        </div>
    )
}
export default DirectorDashboard;
