import axios from "axios";
const GetItensFichaTecnica = async (nameRequest, data) => {
  const response = axios.get(`http://localhost:8080/${nameRequest}/search/fichaTecnicaItemVendaFilter?idItem=${data?.idItem}&descricaoItem=${data?.descricaoItem}&codBarra=${data?.codBarra}&departamento=${data?.departamento}&linha=${data?.linha}&modelo=${data?.modelo}`)
  .then((response) => {
    if (response) {
      return response?.data
    }
  })
  .catch((error) => {
    if (error) {
      return error?.response
    }
  })
  return response

}

export default GetItensFichaTecnica