import axios from "axios";

const LastIdItem = async () => {
  const response = await axios.get(`http://localhost:8080/produtos/lastId`)
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

export default LastIdItem