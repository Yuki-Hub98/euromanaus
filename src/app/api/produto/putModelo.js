import axios from "axios";

const PutModelos = async (nameRequest, data) =>{
  const response = await axios.put(`http://localhost:8080/produtos/${nameRequest}/edit`, data)
	.then((response) =>{
		if (response) {
      let dataPut ={
        data: response?.data,
        status: response?.status
      }
      return dataPut
		}
	})
	.catch((error) =>{
		if(error?.response){
			return error.response.data
		}
	})
	return response 
}

export default PutModelos