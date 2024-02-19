import axios from "axios";

const Post = async (nameRequest, data) => {
	const response = await axios.post(`http://localhost:8080/${nameRequest}`, data)
	.then( (response) => {
		if (response) {
			return response.data
		}
	})
	.catch((error) => {
		if (error.response) {
			console.log("error", error.response)
		}
	})
	return response
}

export default Post