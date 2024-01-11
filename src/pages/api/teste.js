

export async function teste(req) {
    const res = await fetch("http://localhost:8080/arvore-produto-departamento");

    if (!res.ok) throw new Error("Algum problema");

    const data = await res.json();

    return data
}