import React from "react";
import { NavArvore } from "@/components/NavBar";
import {Departamento, DepartamentoPost} from "@/pages/api/arvore-produto/departamento";
import Linha from "@/pages/api/arvore-produto/linha";
import Familia from "@/pages/api/arvore-produto/familia";
import { Grupo } from "@/pages/api/arvore-produto/grupo";
import {Cor} from "@/pages/api/arvore-produto/cor";
import { GET } from "../api/posts/route";


const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]

const teste = async () =>{
    const response = await fetch("http://localhost:3000/api/posts", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()
    return data

}



export default async function ArvoreProduto () {

    const departamento = await Departamento();
    const linha = await Linha();
    const familia = await Familia();
    const grupo = await Grupo();
    const cor = await Cor();

    const test = await teste()

    
    return (
        <>
        <div className="flex flex-col h-screen bg-slate-600 ">
                <div className='flex justify-center mt-14 h-14 items-center gap-y-3'>
                    <h1 className='font-bold text-white'>Arvore de Produto</h1>
                </div>
                <NavArvore name={nav} dataDepartamento={departamento} dataLinha={linha} dataCor={cor} dataGrupo={grupo} dataFamilia={familia}/>
        </div>
        </>
    )
}