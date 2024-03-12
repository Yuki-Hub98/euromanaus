import axios from "axios";
const Del = async (request, data) =>{
		if (request === "linha" || request === "familia" || request === "grupo") {
				const response = await axios.delete(`http://localhost:8080/arvore-produto/${request}/del?descricao=${data?.descricao}`, {data: data})
				.then((response) => {
						if(response){
								return response.data
						}
				})
				.catch((error) => {
						if (error?.response) {
								// A requisição foi feita e o servidor respondeu com um código de status
								// que sai do alcance de 2xx
								return error.response.data
						}
				})
				return response;
		}else{
				const response = await axios.delete(`http://localhost:8080/arvore-produto/${request}/del?descricao=${data.descricao}`)
				.then((response) => {
						if(response){
								return response.data
						}
				})
				.catch((error) => {
						if (error?.response) {
								// A requisição foi feita e o servidor respondeu com um código de status
								// que sai do alcance de 2xx
								return error.response.data
						}
				})
				return response;
		}
}

export default Del;