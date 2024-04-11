import axios from "axios";
const Get = async (nameRequest, data) => {
  if (data) {
    const response = await axios.get(`http://localhost:8080/recursos/${nameRequest}/search?descricao=${data.descricao}`)
    .then((response) => {
      if (response) {
        return response?.data
      }
    })
    .catch((error) => {
      if (error.response.data) {
        return error.response.data
      }
      if (error.response) {
        return error.response
      }
    })
    return response
  }


  const response = await axios.get(`http://localhost:8080/recursos/${nameRequest}`)
  .then((response) => {
    if (response) {
      return response?.data
    }
  })
  .catch((error) => {
    if (error.response.data) {
      return error.response.data
    }
    if (error.response) {
      return error.response
    }
  })
  return response
}

export default Get