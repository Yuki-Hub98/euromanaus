import axios from "axios";
const Get = async (nameRequest, data) => {
	if (data) {
		const response = await axios.get(`http://localhost:8080/${nameRequest}/search?nomeFatansia=${data?.nomeFantasiaFornecedor}&razaoSocial=${data?.razaoSocialFornecedor}&cpfCnpj=${data?.cpfCnpjFornecedor}`)
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
	
	const response = await axios.get(`http://localhost:8080/${nameRequest}`)
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

export default Get