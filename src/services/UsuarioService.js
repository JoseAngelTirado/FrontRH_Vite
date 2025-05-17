import axios from "axios";

const USUARIO_API="http://localhost:8080/usuarios"

const getUsuarioByEmail = (email) => {
  return axios.get(`${API_URL}/email/${email}`);//obtenemos el usuario por email
};


class UsuarioService{

    getAllUsuarios(){
        return axios.get(USUARIO_API);

    }

    createUsuario(usuario){
        return axios.post(USUARIO_API, usuario);
    }

    getUsuarioById(id_usuario){
        return axios.get(USUARIO_API + '/' + id_usuario)
    }

    updateUsuario(id_usuario, usuario){
        return axios.put(USUARIO_API + '/' + id_usuario, usuario)
    }
        
    deleteUsuario(id_usuario){
        return axios.delete(USUARIO_API + '/' + id_usuario);
    }
    
}

export default new UsuarioService();