const Get = async (request) =>{
    const response = await fetch(`http://localhost:8080/arvore-produto/${request}`);
    const data = await response.json();
    
    
    return data;
    
}

export default Get