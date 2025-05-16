import axios from "axios";

const USUARIO_API="http://localhost:8080/usuarios"

class UsuarioService{

    getAllUsuarios(){
        return axios.get(USUARIO_API);

    }

    createUsuario(usuario){
        return axios.post(USUARIO_API, usuario);
    }

    getUsuarioById(usuarioId){
        return axios.get(USUARIO_API + '/' + usuarioId)
    }

    updateUsuario(usuarioId, usuario){
        return axios.put(USUARIO_API + '/' + usuarioId, usuario)
    }
        
    deleteCliente(usuarioId){
        return axios.delete(USUARIO_API + '/' + usuarioId);
    }
    
}

export default new UsuarioService();