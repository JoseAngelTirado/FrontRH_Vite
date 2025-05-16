import axios from "axios";

const DOCUMENTO_API = "http://localhost:8080/documentoes"

class DocumentoService {
    getAlldocumento() {
        return axios.get(DOCUMENTO_API);
    }

    createdocumento(documento) {
        return axios.post(DOCUMENTO_API, documento);
    }

    getdocumentoById(id_documento) {
        return axios.get(DOCUMENTO_API + '/' + id_documento)
    }

    updatedocumento(DOCUMENTO_API, documento) {
        return axios.put(DOCUMENTO_API + '/' + id_documento, documento)
    }
    deletedocumento(DOCUMENTO_API){
        return axios.delete(DOCUMENTO_API + '/' + id_documento);
    }
}

export default new DocumentoService();