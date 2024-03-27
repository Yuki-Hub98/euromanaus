import axios from "axios";

const Post = async (nameRequest, data) => {
  const response = await axios.post(`http://localhost:8080/${nameRequest}`, data)
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
    if (error) {
      return error?.response?.data
    }
  })

  return response
}

export default Post