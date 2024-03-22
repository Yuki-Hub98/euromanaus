import axios from "axios";

const ModeloLinha = async (data) => {
  const response = axios.get(`http://localhost:8080/produtos/modelo/linha?linha=${data}`)
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

export default ModeloLinha