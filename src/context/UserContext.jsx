import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const login = (id, rol,nombre, id_empresa) => {
        setUser({ id, rol,nombre, id_empresa });
        if (rol == "trabajador") {
            navigate("/" + rol + "/dashboard/"+ id);
        } else {
            console.log(id, rol)
            navigate("/" +rol + "/dashboard");
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