"use client";
import { useState } from "react";
import { CadastroArvore } from "@/components/Cadastro";

const Navbar = () => {
    return (
        <>
            <nav class='bg-gray-700 border-gray-200 dark:bg-gray-900 w-full'>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
};


const NavArvore = (value) =>{
    const [up, setUp] = useState(false);
    const [opcao, setOpcao] = useState("")
    const opcoes = (op) => {
    
        switch (op) {
            case "Departamento":
                return (
                    <>
                    <CadastroArvore name={"Departamento"} data={value?.dataDepartamento} type={1} />
                    </>
                )
            case "Linha":
                return (
                    <>
                    <CadastroArvore name={"Linha"} data={value?.dataDepartamento} dataSearchLinha={value?.dataLinha} type={2} />
                    </>
                )
            case "Familia":
                return (
                    <>
                    <CadastroArvore name={"Familia"} data={value?.dataLinha} type={2} />
                    </>
                )
            case "Grupo":
                return (
                    <>
                    <CadastroArvore name={"Grupo"} data={value?.dataFamilia} type={2} />
                    </>
                )
            case "Cor":
                return (
                    <>
                    <CadastroArvore name={"Cor"} type={1} />
                    </>
                )
            case "Especificação":
                return (
                    <>
                    <CadastroArvore name={"Especificação"} type={1} />
                    </>
                )
            default:
                break;
        }
    }


    return (
        <>
        <div className='flex justify-center h-9 bg-slate-400' >
            <div className='flex flex-row justify-around gap-2 w-full'>
                {value.name?.map((name) => (
                    <button key={name} onClick={(e) => {setUp(!up), setOpcao(e.target.innerText)}}  className={`flex items-center justify-center h-9 w-64 p-2 cursor-pointer text-center font-normal text-white hover:bg-white  dark:text-gray-900   hover:text-gray-700 rounded-lg `}>
                        <span>{name}</span>
                    </button>
                ))}
            </div>
        </div>
        
        <div className={`flex relative justify-center mt-2 ml-28 overflow-y-auto ${up ? 'max-h-max' : 'max-h-0'} w-[90rem] rounded-md bg-slate-300`}>
            {opcoes(opcao)}
        </div>
        </>
    )
}
export {Navbar, NavArvore}; 