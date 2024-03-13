import axios from "axios";

const Modelo = async (data) => {
  const response = axios.get(`http://localhost:8080/produtos/modelo?linha=${data}`)
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

export default Modelo