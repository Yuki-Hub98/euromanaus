"use client"
import { DropDownNav } from "../DropDown";

const opcoesCadastro = ["Organização", "Fiscal", "Financeiro","Compras", "Industrial","Vendas", "Expedição"]

const Sidebar = () => {
    
    return (
        <>
            <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div className="overflow-y-auto py-5 px-3 h-full bg-[#2b2b2a] dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-2">
                <li>
                    <a href="http://localhost:3000/" className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-[white] dark:text-gray-900 hover:text-[#edca62] group">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <DropDownNav name={"Cadastro"} opcoes={opcoesCadastro}/>
                
                </li>
                <li>
                    <DropDownNav name={"Consulta"} opcoes={opcoesCadastro}/>
                </li>
                <li>
                    <DropDownNav name={"Movimento"} opcoes={opcoesCadastro}/>
                
                </li>
                </ul>
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-white bg-[#2b2b2a] rounded-lg transition duration-75 hover:bg-white dark:hover:bg-gray-700 dark:text-white hover:text-[#edca62] group">
                    <span className="ml-3">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-white bg-[#2b2b2a] rounded-lg transition duration-75 hover:bg-white dark:hover:bg-gray-700 dark:text-white hover:text-[#edca62] group">
                    <span className="ml-3">Receipts</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-white bg-[#2b2b2a] rounded-lg transition duration-75 hover:bg-white dark:hover:bg-gray-700 dark:text-white hover:text-[#edca62] group">
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