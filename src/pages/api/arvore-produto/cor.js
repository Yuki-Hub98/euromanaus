const Cor = async () => {
    const response = await fetch("http://localhost:8080/arvore-produto-cor");

    const data =  response.json();

    return data

}

export {Cor}