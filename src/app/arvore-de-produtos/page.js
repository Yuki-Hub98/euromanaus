"use client";

import React, {useEffect, useState } from "react";
import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, 
    ModalFooter,Input,Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CadastroArvore } from "@/components/Cadastro";

const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especifidade"]

export default function ArvoreProduto () {

    const controle = (condicao) =>{

    }

    const [upDepartamento, setUpDepartamento] = useState(false);
    const [upLinha, setUpLinha] = useState(false);
    const [upFamilia, setUpFamilia] = useState(false);
    const [upGrupo, setUpGrupo] = useState(false);
    const [upCor, setUpCor] = useState(false);
    const [upEspecifidade, setUpEspecifidade] = useState(false);
    return (
        <>
        <div className="flex flex-col justify-center h-[rem96] bg-slate-600 ">
                <div className='flex justify-center h-14 items-center gap-y-3'>
                    <h1>Arvore de Produto</h1>
                </div>
                <div className='flex justify-center h-9 bg-slate-400' >
                    <div className='flex flex-row justify-around gap-2 w-full'>
                        <button onClick={() => setUpDepartamento(!upDepartamento) } className={`flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white hover:bg-white  dark:text-gray-900   hover:text-gray-700 rounded-lg `}>
                            <span>Departamento</span>
                        </button>
                        <button onClick={() => setUpLinha(!upLinha)} className='flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group'>
                            <span>Linha</span>
                        </button>
                        <button onClick={() => setUpFamilia(!upFamilia)} className='flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group'>
                            <span>Familia</span>
                        </button>
                        <button onClick={() => setUpGrupo(!upGrupo)} className='flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group'>
                            <span>Grupo</span>
                        </button>
                        <button onClick={() => setUpCor(!upCor)} className='flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group'>
                            <span>Cor</span>
                        </button>
                        <button onClick={() => setUpEspecifidade(!upEspecifidade)} className='flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group'>
                            <span>Especifidade</span>
                        </button>
                    </div>
                </div>
                <div className={`flex relative justify-center mt-2 ml-28 overflow-y-auto max-h-0 ${upDepartamento ?  'max-h-0' : 'max-h-max'} w-[90rem] rounded-md bg-slate-300`}>
                        <CadastroArvore name={"Departamento"} type={1} />
                </div>
                <div className={`flex relative justify-center mt-2 ml-28 overflow-y-auto max-h-0 ${upLinha ?  'max-h-0' : 'max-h-max'} w-[90rem] rounded-md bg-slate-300`}>
                        <CadastroArvore name={"Linha"} type={2} />
                </div>
        </div>
        </>
    )
}