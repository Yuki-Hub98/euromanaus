export async function GET (request){

    const res = await fetch("http://localhost:8080/arvore-produto/linha");

    if (!res.ok) throw new Error("Algum problema");

    const data = await res.json();

    return data
}