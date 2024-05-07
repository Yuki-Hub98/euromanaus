import axios from "axios";

const Put = async (nameRequest, data) => {
  const response = await axios.put(`http://localhost:8080/${nameRequest}`, data)
  .then((response) => {
    let dataPut ={
      data: response?.data,
      status: response?.status
    }
    return dataPut
  })
  .catch((erro) => {
    if (erro) {
      return erro.response.data
    }
  })

  return response
}

export default Put