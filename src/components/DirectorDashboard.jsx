import { Link } from "react-router-dom";

const DirectorDashboard = () => {
    return (

        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Director</h1>
            <div className="space-y-4 w-full max-w-xs">

                <Link
                    to="/director/expedientes"
                    className="block w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition text-center"
                >
                    Empresa 3
                </Link>
                <Link
                    to="/director/expedientes"
                    className="block w-full bg-purple-500 text-white font-semibold py-3 rounded-xl hover:bg-purple-600 transition text-center"
                >
                    Empresa 1
                </Link>
                <Link
                    to="/director/expedientes"
                    className="block w-full bg-purple-400 text-white font-semibold py-3 rounded-xl hover:bg-purple-500 transition text-center"
                >
                    Empresa 2
                </Link>
            </div>

        </div>
    )
}
export default DirectorDashboard;
