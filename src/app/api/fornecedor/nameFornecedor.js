import axios from "axios";
const NameFornecedor = async () => {
  const response = await axios.get(`http://localhost:8080/fornecedor/nameFornecedor`)
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

export default NameFornecedor