import axios from "axios"

const Post = async (request, data) =>{
		
		const response = await axios.post(`http://localhost:8080/arvore-produto/${request}`, data)
		.then((response) => {
			let dataPost ={
        data: response?.data,
        status: response?.status
      }
      return dataPost
		})
		.catch((error) => {
				if (error?.response) {
						// A requisição foi feita e o servidor respondeu com um código de status
						// que sai do alcance de 2xx
						return error.response.data
				} else if (error.request) {
						// A requisição foi feita mas nenhuma resposta foi recebida
						// `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
						// http.ClientRequest no node.js
						console.error(error.request);
				} else {
						// Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
						console.error('Error', error.message);
				}
						console.error(error.config);
		});

		return response
		
}


export default Post