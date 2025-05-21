import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrabajadorService from "../services/TrabajadorService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const login = (id, rol, nombre, id_empresa) => {
        setUser({ id, rol, nombre, id_empresa });
        if (rol == "trabajador") {

            TrabajadorService.getAllTrabajadores().then(response => {
                const trabajadores = response.data;

                const trabajadorEncontrado = trabajadores.find(t =>
                    t?.usuario?.id_usuario === id
                );
                console.log(trabajadorEncontrado)
                if (trabajadorEncontrado) {
                    console.log("Trabajador encontrado. ID Trabajador:", trabajadorEncontrado.id_trabajador);

                    navigate("/" + rol + "/dashboard/" + trabajadorEncontrado.id_trabajador);
                }
            })
        } else {

            navigate("/" + rol + "/dashboard");
        }
    }
    const logout = () => {
        setUser(null);
        navigate("/");
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);