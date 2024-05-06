"use client";

import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { SubMenu } from "./subMenu";

const DropDownNav = (values) =>{
	const {icon, open} = values
	const [dropPrincipal, setDropPrincipal] = useState(false);
	return ( 
		<>
			<button type="button" onClick={() => setDropPrincipal(!dropPrincipal)} 
			className={`${open ? 'justify-center' : ''} w-full flex items-center justify-center p-2  text-center font-normal text-white rounded-lg hover:bg-white dark:text-gray-900 hover:text-[#edca62] group transition duration-75 group rounded-b-sm`}>
			{icon}
			<span className={`${!open && 'hidden'} flex-1 ml-3 text-left whitespace-nowrap`}>{values?.name}</span>
			{open ? <GoChevronDown/>  : null}
			</button>
				<ul className={`bg-white overflow-y-auto max-h-0 ${dropPrincipal ? 'max-h-max pb-1.5' : 'max-h-0'}`}>
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