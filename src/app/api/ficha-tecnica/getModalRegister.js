import axios from "axios"
const GetModalRegisterFichaTecnica  = async (nameRequest) => {
    const response = await axios.get(`http://localhost:8080/${nameRequest}/modalItemRecursoEtapa`)
    .then((response) => {
      if (response) {
        return response.data
      }
      })
    .catch((error) => {
      if (error) {
        return error.response.data
      }
      })
      return response
}
export default GetModalRegisterFichaTecnica