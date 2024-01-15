
const Post = async (data, request) =>{
    const response = await fetch(`http://localhost:8080/arvore-produto/${request}`, {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())

    console.log(response)

}


export default Post