"use client";

import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { SubMenu } from "./subMenu";

const style = "flex items-center p-2 w-full text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-[#edca62] group transition duration-75 group"
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

export { DropDownNav } 