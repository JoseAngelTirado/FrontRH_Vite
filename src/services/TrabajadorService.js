import axios from "axios";

const TRABAJADOR_API = "http://localhost:8080/trabajadores"

class TrabajadorService {
    getAllTrabajadores() {
        return axios.get(TRABAJADOR_API);
    }

    createTrabajador(trabajador) {
        return axios.post(TRABAJADOR_API, trabajador);
    }

    getTrabajadorById(trabajadorId) {
        return axios.get(TRABAJADOR_API + '/' + trabajadorId)
    }

    updateTrabajador(trabajadorId, trabajador) {
        return axios.put(TRABAJADOR_API + '/' + trabajadorId, trabajador)
    }
    deleteTrabajador(trabajadorId){
        return axios.delete(TRABAJADOR_API + '/' + trabajadorId);
    }
}

export default new TrabajadorService();