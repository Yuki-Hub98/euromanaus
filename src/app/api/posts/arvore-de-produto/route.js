import { NextResponse } from "next/server";


export async function POST(data){

    const response = await fetch("http://localhost:8080/arvore-produto/departamento", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data})
    })
    
    if (!response.ok) throw new Error("Algum problema");

    const data = await response.json();

    return data


}