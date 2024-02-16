import axios from "axios";

const Put = (nameRequest, data) => {
    if (data) {
        const response = axios.put(`http://localhost:8080/${nameRequest}/edit/${data.idCad}`, data)
        .then((response) => {
            if (response) {
                return response.data
            }
        })
        .catch((error) =>{
            if (error) {
                return error.response.data
            }
        })

        return response
    }
    
}

export default Put