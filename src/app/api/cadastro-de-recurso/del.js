import axios from "axios";

const Del = async (nameRequest, data) => {
	const response = await axios.delete(`http://localhost:8080/${nameRequest}/del/${data.codigo}`, {data})
	.then((response) => {
		if (response) {
			return response.data
		}
	})
	.catch((error) => {
		if (error) {
			return error.response
		}
	})
		

	return response
}

export default Del