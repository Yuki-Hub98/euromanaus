import axios from "axios";
const Get = async (nameRequest, data) => {
  const response = await axios.get(`http://localhost:8080/${nameRequest}`)
  .then((response) => {
    if (response) {
      return response?.data
    }
  })
  .catch((error) => {
    if (error) {
      return error?.response?.data
    }
  })
  return response
}

export default Get