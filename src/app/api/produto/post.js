import axios from "axios";

const Post = async (nameRequest, data) =>{
  const response = axios.post(`http://localhost:8080/${nameRequest}`, data)
  .then((response) => {
    if (response) {
      return response?.data
    }
  })
  .catch((error) => {
    return error?.response?.data
  })

  return response
}

export default Post