const Departamento = async () =>{

    const response = await fetch("http://localhost:8080/arvore-produto/departamento");
    const data = await response.json();

    return data;

}


const DepartamentoPost = async (data) =>{
    const response = await fetch("http://localhost:8080/arvore-produto/departamento", {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())

    console.log(response)

}


export {Departamento, DepartamentoPost}