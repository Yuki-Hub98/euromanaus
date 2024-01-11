import React from "react";
import { NavArvore } from "@/components/NavBar";
import Departamento from "@/pages/api/arvore-produto/departamento";
import Linha from "@/pages/api/arvore-produto/linha";
import Familia from "@/pages/api/arvore-produto/familia";

const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]

export default async function ArvoreProduto () {

    const departamento = await Departamento();
    const linha = await Linha();
    const familia = await Familia();


    return (
        <>
        <div className="flex flex-col h-screen bg-slate-600 ">
                <div className='flex justify-center mt-14 h-14 items-center gap-y-3'>
                    <h1 className='font-bold'>Arvore de Produto</h1>
                </div>
                <NavArvore name={nav} dataDepartamento={departamento} dataLinha={linha} dataFamilia={familia}/>
        </div>
        </>
    )
}