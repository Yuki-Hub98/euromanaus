const Grupo = async () => {

    const response = await fetch("http://localhost:8080/arvore-produto/grupo")

    const data = response.json()

    return data
}

export {Grupo}