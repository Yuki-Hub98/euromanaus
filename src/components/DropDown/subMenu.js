import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const organizacao = ["Empresa", "Filial"]
const fiscal = ["Tipo de Notas"]
const financeiro = ["Caixa", "Contas a Pagar", "Contas a Receber", "Gerais"]
const compras = ["Árvore de Produtos", "Fornecedor",  "Produtos"]
const industrial = ["Centro de Estoque", "Recursos", "Etapa de Produção", "Ficha Técnica"]
const vendas = ["Consultor", "Clientes", "Promoção", "Barreira de Compras", "Procedencia"]
const expedicao = ["Veículos", "Motoristas"]


const style = "w-full flex items-center p-2  text-center font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"

const URL = (pag) =>{
    let url = `http://localhost:3000/`
    let pagAtt = pag.normalize('NFD').replace(/\p{Mn}/gu, "")
    if(pagAtt.indexOf(' ') >= 0){
        return url + pagAtt.replace(/\s+/g, '-').toLowerCase()
    }else{
        return url + pagAtt.toLowerCase()
    }
    
}


const SubMenu = (opcao) =>{
    const [subDrop, setSubDrop] = useState(false)
    switch (opcao.opcao) {
        case "Organização":
            return (
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62]">Organização</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {organizacao.map((org) => (
                            <li key={org} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a href={URL(org)}>{org}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            ) 
        case "Fiscal":
            return (
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Fiscal</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {fiscal.map((fisc) => (
                            <li key={fisc} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a href={ URL(fisc)}>{fisc}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            ) 
        case "Financeiro":
            return(
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Financeiro</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {financeiro.map((finan) => (
                            <li key={finan} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a href={URL(finan)}>{finan}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            )
        case "Compras":
            return(
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Compras</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {compras.map((comp) => (
                            <li key={comp} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a href={URL(comp)}>{comp}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            )
        
        case "Industrial":
            return(
                <>
                <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Industrial</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {industrial.map((ind) => (
                            <li key={ind} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a  href={URL(ind)}>{ind}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            )
        case "Vendas":
            return(
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Vendas</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {vendas.map((vend) => (
                            <li key={vend} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a  href={URL(vend)}>{vend}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            )
        case "Expedição":
            return(
                <>
                    <button type="button" onClick={() => setSubDrop(!subDrop)} className={`${style} text-sm`}>
                        <span className="flex-1 ml-6 text-left hover:text-[#edca62] whitespace-nowrap">Expedição</span>
                        <GoChevronDown/>
                    </button>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${subDrop ? 'max-h-60' : 'max-h-0'}`}>
                        {expedicao.map((expe) => (
                            <li key={expe} className={` text-sm font-normal cursor-pointer text-gray-900 rounded-lg duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>
                            <span className=' flex-1 ml-11 text-left hover:text-[#edca62] whitespace-nowrap'> <a href={URL(expe)}>{expe}</a> </span>
                        </li>
                        ))}
                    </ul>
                </>
            )
        default:
            break;
    }
}

export {SubMenu}