import axios from "axios";

const CstIcms = async (data) =>{
const response = axios.get(`http://localhost:8080/produtos/csticms?origem=${data}`)
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

export default CstIcms