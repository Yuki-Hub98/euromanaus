const Linha = async () =>{

    const response = await fetch("http://localhost:8080/arvore-produto/linha");
    const data = await response.json()

    return data

}

export default Linha