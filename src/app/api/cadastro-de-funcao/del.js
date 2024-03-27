import axios from "axios";

const Del = async (nameRequest, data) => {
	if (data) {
		const response = await axios.delete(`http://localhost:8080/${nameRequest}/del/${data?.codigo}`)
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
}

export default Del