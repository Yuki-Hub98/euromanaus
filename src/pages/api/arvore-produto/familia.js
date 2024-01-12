
const Familia = async () =>{

    const response = await fetch("http://localhost:8080/arvore-produto/familia");

    const data = response.json();

    return data

}

export default Familia