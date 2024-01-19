import axios from "axios";

const Get = async (request) =>{
    const response = await axios.get(`http://localhost:8080/arvore-produto/${request}`)
    .then((response) => response.data )
    .catch((error) => error.response)

    
    return response
    
}

export default Get