import axios from "axios";

const DOCUMENTO_API = "http://localhost:8080/archivos";

class ArchivoService {
    subirArchivo(archivo, prefijo) {
        const formData = new FormData();
        formData.append("archivo", archivo);
        formData.append("prefijo", prefijo);
        return axios.post(`${DOCUMENTO_API}/subir`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    descargarArchivo(nombreArchivo) {
        return axios.get(`${DOCUMENTO_API}/descargar/${nombreArchivo}`, {
            responseType: 'blob'
        });
    }

    listarArchivosPorTrabajador(id_trabajador) {
        return axios.get(`${DOCUMENTO_API}/listar/${id_trabajador}`);
    }
}

export default new ArchivoService();