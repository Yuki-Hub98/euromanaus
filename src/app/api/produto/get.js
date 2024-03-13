import axios from "axios";

const Get = async (nameRequest, data) => {
  if (data) {
    const response = axios.get(`http://localhost:8080/${nameRequest}/search?idItem=${data?.idItem}&descricaoItem=${data?.descricao}&codBarra&departamento=${data?.departamento}&linha=${data?.linha}&familia&grupo&fornecedor=${data?.fornecedor}&modelo=${data?.modelo}&tipoProduto&unidadeMedida=${data?.unidade}&cor&especificacao`)
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
  const response = axios.get(`http://localhost:8080/${nameRequest}`)
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

export default Get