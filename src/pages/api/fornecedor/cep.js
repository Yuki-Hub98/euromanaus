import axios from "axios";

const Cep = async (data) => {

		if (data?.endereco && data?.cidade && data?.uf) {
				const response = await axios.get(`https://viacep.com.br/ws/${data?.uf}/${data?.cidade}/${data?.endereco.replace(/\s/g, '+')}/json/`)
				.then((response) => {
						if (response) {
							return response.data
						}
				})
				.catch((error) => {
						if (error) {
							console.log("error: ", error)
						}
				})
				return response
		}else{

			const response = await axios.get(`https://viacep.com.br/ws/${data}/json/`)
			.then((response) => {
					if (response) {
						return response.data
					}
			})
			.catch((error) => {
					if (error) {
						console.log("error: ", error)
					}
			})
			return response 
		}
}

export default Cep