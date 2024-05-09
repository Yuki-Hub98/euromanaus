import axios from "axios"

const Get = async (nameRequest, data) => {
  const response = await axios.get(`http://localhost:8080/${nameRequest}?codigo=${data?.codigo}&descricaoItem=${data?.descricaoItem}&codBarra=${data?.codBarra}&departamento=${data?.departamento}&linha=${data?.linha}&modelo=${data?.modelo}`)
  .then((response) => {
    if (response) {
      return response.data
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