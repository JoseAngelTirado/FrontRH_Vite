import { Link } from "react-router-dom";

const DirectorDashboard = () => {



    return (
        <div className="grid gap-4 p-4 bg-gray-100 rounded-xl shadow-md w-full max-w-md mx-auto">
            <Link
                to="/director/expedientes"
                className="block bg-white p-4 rounded-lg shadow hover:bg-purple-100 transition-colors font-medium text-center text-gray-800"
            >
                Empresa 3
            </Link>
            <Link
                to="/director/expedientes"
                className="block bg-white p-4 rounded-lg shadow hover:bg-purple-100 transition-colors font-medium text-center text-gray-800"
            >
                Empresa 1
            </Link>
            <Link
                to="/director/expedientes"
                className="block bg-white p-4 rounded-lg shadow hover:bg-purple-100 transition-colors font-medium text-center text-gray-800"
            >
                Empresa 2
            </Link>
        </div>
    )
}
export default DirectorDashboard;
