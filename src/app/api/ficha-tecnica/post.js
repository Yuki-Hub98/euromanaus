import axios from "axios"
const Post = async (nameRequest, data) => {
  const response = axios.post(`http://localhost:8080/${nameRequest}`, data)
  .then((response) => {
    if (response) {
      let dataPost ={
        data: response?.data,
        status: response?.status
      }
      return dataPost
    }
  })
  .catch((erro) => {
    if (erro) {
      return erro.response.data
    }
  })

  return response
}

export default Post