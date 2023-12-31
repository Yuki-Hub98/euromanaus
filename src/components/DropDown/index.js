"use client";

import React, { useState } from "react";
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai"
import { GoChevronDown } from "react-icons/go";
import { SubMenu } from "./subMenu";
/*

export async function getStaticProps(){
    const data = await fetch("https://restcountries.com/v2/all?filds=name");
    const suppliers = await data.json();

    return {
        props: suppliers
    }

    const [suppliers, setSuppliers] = useState(null);
        useEffect(() => {
            fetch("https://restcountries.com/v2/all?filds=name")
            .then((res)=> res.json())
            .then((data)=>{
                setSuppliers(data);
            })
        }, [])

        {teste?.map((test)=>{
                            <li key={test?.name} className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                                {test?.name}
                            </li>
                        })}   
*/
const style = "flex items-center p-2 w-full text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-gray-700 group transition duration-75 group"
const fornecedor = [
    {
        id: 1,
        name:"Forncedor 1"
    },
    {
        id:2,
        name:'Fornecedor 2'
    },
    {
        id:3,
        name:'Fornecedor 3'
    },
    {
        id:4,
        name:'Fornecedor 4'
    },
    {
        id:5,
        name:'Fornecedor 5'
    },
]
const DropDown = ( conteudo ) =>{
        const [inputValue, setInputValue] = useState("")
        const [open, setOpen] = useState(false)
        
        return  (
            <div>
                <div
                onClick={() => setOpen(!open)}
                className="bg-white w-full p-2 border px-3.5 flex items-center cursor-pointer justify-center rounded"> 
                    Select Country
                    <BiChevronDown size={20}/>
                </div>
                    <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${open ? 'max-h-60' : 'max-h-0'}`}>
                        <div className="flex items-center px-2 sticky top-0 bg-white">
                            <AiOutlineSearch size={18} className="text-gray-700" />
                            <input 
                                type="text"
                                onChange={(e) => setInputValue(e.target.value.toLowerCase())} 
                                value={inputValue}
                                placeholder="Searche" 
                                className="placeholder: text-gray-700 p-2 outline-none" />
                        </div>
                        {fornecedor?.map((test) =>(
                            <li key={test?.id} className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer"> {test?.name}</li>

                            ))}
                    </ul>
                </div>
        );
}

const DropDownNav = (values) =>{
    const [dropPrincipal, setDropPrincipal] = useState(false);
    return ( 
        <>
            <button type="button" onClick={() => setDropPrincipal(!dropPrincipal)} className={style}>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{values?.name}</span>
            <GoChevronDown/>
            </button>
                <ul className={`bg-white mt-2 overflow-y-auto max-h-0 ${dropPrincipal ? 'max-h-max' : 'max-h-0'}`}><a href="http://localhost:3000/cadastro-fornecedor"></a>
                    {values?.opcoes?.map((op) => (
                        <li key={op} className={"font-normal text-gray-900 rounded-lg transition duration-300"}>
                            <SubMenu opcao={op}/>
                        </li>

                    ))}
                </ul>
        </>
    )
}

export { DropDown, DropDownNav } 