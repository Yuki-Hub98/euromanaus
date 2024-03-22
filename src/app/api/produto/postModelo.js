import axios from "axios";

const PostModelo= async (nameRequest, data) =>{
  const response = axios.post(`http://localhost:8080/produtos/${nameRequest}`, data)
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
    return error?.response?.data
  })

  return response
}

export default PostModelo