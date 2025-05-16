import axios from "axios";

const EXPEDIENTE_API = "http://localhost:8080/expedientes"

class ExpedienteService {
    getAllExpedientes() {
        return axios.get(EXPEDIENTE_API);
    }

    createExpediente(expediente) {
        return axios.post(EXPEDIENTE_API, expediente);
    }

    getExpedienteById(id_expediente) {
        return axios.get(EXPEDIENTE_API + '/' + id_expediente)
    }

    updateExpediente(id_expediente, expediente) {
        return axios.put(EXPEDIENTE_API + '/' + id_expediente, expediente)
    }
    deleteExpediente(id_expediente) {
        return axios.delete(EXPEDIENTE_API + '/' + id_expediente);
    }
}

export default new ExpedienteService();