"use client";

import React from "react";
import { NavArvore } from "@/components/NavBar";

const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]

export default function ArvoreProduto () {

    return (
        <>
        <div className="flex flex-col h-screen bg-slate-600 ">
                <div className='flex justify-center mt-14 h-14 items-center gap-y-3'>
                    <h1 className='font-bold'>Arvore de Produto</h1>
                </div>
                <NavArvore name={nav} />
        </div>
        </>
    )
}