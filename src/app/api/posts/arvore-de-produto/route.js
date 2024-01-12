
export async function POST(request){

    const res = await request.json()

    const response = await fetch("http://localhost:8080/arvore-produto/departamento", {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(res)
    }).then((response) => response.json())
    
    if (!response.ok) throw new Error("Algum problema");

    console.log(response) 

}