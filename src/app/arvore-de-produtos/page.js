import React from "react";
import ArvoreProduto from "@/components/ArvoreProduto";


const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]


export default async function ArvoreDeProduto () {

    return (
        <>
        <div className="flex flex-col pl-2 h-screen bg-[#0000008e] ">
            <ArvoreProduto name={nav}/>
        </div>
        </>
    )
}