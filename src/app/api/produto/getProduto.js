import axios from "axios";

const SearchProduto = async (data) => {
  const response = await axios.get(`http://localhost:8080/produtos/produto?decricaoProduto=${data.descricao}&fornecedor=${data.fornecedor}`)
  .then((response) => {
    if (response) {
      return response?.data
    }
  })
  .catch((error) => {
    if (error) {
      return error?.response?.data
    }
  })

  return response
}

export default SearchProduto