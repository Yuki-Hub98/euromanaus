import axios from "axios";
const CodBarras = async (data) => {
  const response = axios.post(`http://localhost:8080/codigoBarras`, data)
  .then((response) => {
    if(response){
      return response?.data
    }
  })
  .catch((error) => {
    if(error){
      return error?.response.data
    }
  })
  return response
}
export default CodBarras