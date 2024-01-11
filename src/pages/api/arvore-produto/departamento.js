const Departamento = async () =>{

    const response = await fetch("http://localhost:8080/arvore-produto-departamento");
    const data = await response.json();

    return data;

}

export default Departamento