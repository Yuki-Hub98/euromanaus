import React from "react";
import { NavArvore } from "@/components/NavBar";


const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]


export default async function ArvoreProduto () {

    return (
        <>
        <div className="flex flex-col h-screen bg-[#2b2b2a] ">
                <div className='flex justify-center mt-14 h-14 items-center gap-y-3'>
                    <h1 className='font-bold text-white'>Arvore de Produto</h1>
                </div>
                <NavArvore name={nav}/>
        </div>
        </>
    )
}