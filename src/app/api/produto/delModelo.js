import axios from "axios";

const DelModelos = async (nameRequest, data) =>{
  const response = await axios.delete(`http://localhost:8080/produtos/${nameRequest}/del`, {data})
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

export default DelModelos