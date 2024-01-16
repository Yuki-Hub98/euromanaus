import axios from "axios"

const Post = async (data, request) =>{
    const response = axios.post(`http://localhost:8080/arvore-produto/${request}`,data)
    .then((response) => console.log("Resposta: ", response))
    .catch((error) => console.log("Error: ", error))


}


export default Post