import axios from "axios";

const Get = async (request, data) =>{
    if (data){
        const response = await axios.get(`http://localhost:8080/arvore-produto/${request}/search?descricao=${data?.descricao}`)
        .then((response) => {
            if (response) {
                return response.data
            }
        })
        .catch((error) => {
            if (error) {
                return error.response
            }
        })
        return response
    }
        
    const response = await axios.get(`http://localhost:8080/arvore-produto/${request}`)
    .then((response) => response.data )
    .catch((error) => error.response)
    return response
    
}

export default Get