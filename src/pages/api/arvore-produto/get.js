import axios from "axios";

const Get = async (request) =>{
    const response = axios.get(`http://localhost:8080/arvore-produto/${request}`)
    .then((response) => response.data )
    .catch(error => {console.log(error)})

    const data = await response;
    return data;
    
}

export default Get