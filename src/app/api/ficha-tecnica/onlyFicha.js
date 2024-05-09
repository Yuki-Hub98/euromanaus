import axios from "axios"
const OnlyFicha = async (nameRequest, data) => {

  const response = await axios.get(`http://localhost:8080/${nameRequest}/onlyFicha/${data?.codigo}`)
    .then((response) => {
      if (response) {
        return response?.data
      }
    })
    .catch((error) => {
      if (error.response?.data) {
        return error.response?.data
      }
      if (error.response) {
        return error?.response
      }
    })
  return response
}

export default OnlyFicha
