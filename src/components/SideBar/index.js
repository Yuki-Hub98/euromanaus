"use client"
import { useState } from "react";
import { GoChevronDown,  FaWpforms} from "react-icons/go";

const opcoesCadastro = ["Cadastro de Clientes", "Cadastro de Compras", "Cadastro de Financeiro", "Cadastro de Vendas"]
const opcoesConsulta = [ "Contas a Pagar",  "Movimento", "Pedidos" , "Produto"]
const opcoesMovimento = ["Atualizações no Geral"]
const style = "flex items-center p-2 w-full text-center font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
const DropDownNav = (name, opcoes) =>{
    const [drop, setDrop] = useState(false);
    return ( 
        <>
            <button type="button" onClick={() => setDrop(!drop)} className={style}>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
            <GoChevronDown/>
            </button>
                <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${drop ? 'max-h-60' : 'max-h-0'}`}><a href="http://localhost:3000/cadastro-fornecedor"></a>
                    {opcoes.map((op) => (
                        <li key={op} className={"text-center font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}><a href="http://localhost:3000/cadastro-fornecedor">{op}</a></li>

                    ))}
                </ul>
        </>
    )
}

const Sidebar = () => {
    
    return (
        <>
            <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-2">
                <li>
                    <a href="http://localhost:3000/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    {DropDownNav("Cadastro",opcoesCadastro)}
                </li>
                <li>
                    {DropDownNav("Consulta",opcoesConsulta)}
                </li>
                <li>
                    {DropDownNav("Movimento", opcoesMovimento)}
                </li>
                </ul>
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <span className="ml-3">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <span className="ml-3">Receipts</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                    <span className="ml-3">Settings</span>
                    </a>
                </li>
                </ul>
            </div>
            </aside>
        </>
    )
}

export default Sidebar;