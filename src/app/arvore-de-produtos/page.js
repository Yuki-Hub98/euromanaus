import React from "react";
import { NavArvore } from "@/components/NavBar";


const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]


export default async function ArvoreProduto () {

    return (
        <>
        <div className="flex flex-row h-screen bg-[#2b2b2a] ">
            <NavArvore name={nav}/>
        </div>
        </>
    )
}