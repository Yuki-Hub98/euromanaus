import axios from "axios";

const Put = (nameRequest, data) => {
	if (data) {
		const response = axios.put(`http://localhost:8080/${nameRequest}/edit/${data?.idProduto}`, data)
		.then((response) => {
			if (response) {
				let dataPut ={
					data: response?.data,
					status: response?.status
				}
				return dataPut
			}
		})
		.catch((error) =>{
			if (error) {
				return error.response.data
			}
		})

		return response
	}
	
}

export default Put