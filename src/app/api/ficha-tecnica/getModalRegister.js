import axios from "axios"
const GetModalRegisterFichaTecnica  = async (nameRequest) => {
  if (nameRequest === "etapa-de-producao") {
    const response = await axios.get(`http://localhost:8080/${nameRequest}/fichaTecnica/${nameRequest}`)
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
  }else if (nameRequest === "grupo-recurso") {
    const response = await axios.get(`http://localhost:8080/recursos/grupo-de-recursos/${nameRequest}`)
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
  }else if (nameRequest === "descricao-item") {
    const response = await axios.get(`http://localhost:8080/produtos/${nameRequest}/fichaTecnicaItemMateriaPrima`)
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
  
}
export default GetModalRegisterFichaTecnica