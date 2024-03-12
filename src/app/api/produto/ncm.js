import axios from "axios";

const Ncm = async (data) => {
  const response = axios.get(`http://localhost:8080/produtos/ncm?ncm=${data}`)
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

export default Ncm