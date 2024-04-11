import axios from "axios";

const Put = async (nameRequest, data) => {
  const response = await axios.put(`http://localhost:8080/recursos/${nameRequest}/edit/${data?.codigo}`, data)
  .then((response) => {
    if (response) {
      let dataPost ={
        data: response?.data,
        status: response?.status
      }
      return dataPost
    }
  })
  .catch((error) => {
    if (error.response.data) {
      return error.response.data
    }else if (error.response) {
      return error.response
    }
  })

  return response
}

export default Put