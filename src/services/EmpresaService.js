import axios from "axios";

const EMPRESA_API = "http://localhost:8080/empresas"

class EmpresaService {
    getAllEmpresas() {
        return axios.get(EMPRESA_API);
    }

    createEmpresa(empresa) {
        return axios.post(EMPRESA_API, empresa);
    }

    getEmpresaById(id_empresa) {
        return axios.get(EMPRESA_API + '/' + id_empresa)
    }

    updateEmpresa(id_empresa, empresa) {
        return axios.put(EMPRESA_API + '/' + id_empresa, empresa)
    }
    deleteEmpresa(id_empresa){
        return axios.delete(EMPRESA_API + '/' + id_empresa);
    }
}

export default new EmpresaService();