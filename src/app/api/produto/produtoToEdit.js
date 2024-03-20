import axios from "axios";
const ProdutoToEdit = (data) => {
	const response = axios.get(`http://localhost:8080/produtos/produto/edit/${data}`)
	.then((response) => {
		if (response) {
		return response?.data
		}
		})
	.catch((error) =>{
			if (error) {
				return error.response.data
			}
		})

		return response
	
	
}

export default ProdutoToEdit