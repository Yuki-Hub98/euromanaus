
export async function POST(data){

    console.log("Data: ", data)

    const response = await fetch("http://localhost:8080/arvore-produto/departamento", {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    
    if (!response.ok) throw new Error("Algum problema");

    return response

}