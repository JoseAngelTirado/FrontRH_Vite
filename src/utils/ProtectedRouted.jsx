import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";


const ProtectedRoute= ({allowedRoles, redirectPath='/'}) =>{
    const {user, isAuthenticated} = useUser();


    if(!isAuthenticated){
        return <Navigate to={redirectPath} replace />;
    }   

    if (!allowedRoles.includes(user.rol)) {
    return <Navigate to="/no-autorizado" replace />;
  }

    return <Outlet/>
}
export default ProtectedRoute;