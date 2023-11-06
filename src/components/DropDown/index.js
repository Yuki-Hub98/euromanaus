"use client";

import React, { useState, useEffect } from "react";
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai"
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

        {suppliers?.map((supplier)=>{
                            <li key={supplier?.name} className="p-2 text-sm hover:bg-sky-600 hover:text-white">
                                {supplier?.name}
                            </li>
                        })}   
}*/

const DropDown = ( teste ) =>{
    
        const [inputValue, setInputValue] = useState("")
        const [open, setOpen] = useState(false)
        
        return  (
            <div  >
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
                        <li className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer`}>
                            Fornecedor 1
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer">
                            Fornecedor 2
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer">
                            Fornecedor 3
                        </li>
                        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer">
                            Fornecedor 4
                        </li>
                    </ul>
                </div>
            
        );
}

export { DropDown } 