import axios from "axios";

const GetModelos = async (nameRequest, data) =>{
  const response = await axios.get(`http://localhost:8080/produtos/${nameRequest}`)
	.then((response) =>{
		if (response) {
			return response.data
		}
	})
	.catch((error) =>{
		if(error?.response){
			return error.response.data
		}
	})
	return response 
}

export default GetModelos