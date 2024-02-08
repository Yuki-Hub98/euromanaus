import axios from "axios";

const Cep = async (data) => {
    console.log(data)
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

export default Cep