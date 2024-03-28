"use Client";
import React , {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";

const MiniSideBarNav = (props) => {
		const router = usePathname()
		const [option, setOption] = useState();


		useEffect(()=>{
				if (option){
						if (option === 'Linha' || option === 'Grupo' || option === 'Familia') {
								props?.ChosenOption(option, true)
								return setOption(null)
						}
						props?.ChosenOption(option)
						return setOption(null)
				}
		}, [props, option])

		return(
				<>
				<aside className='w-40 left-64 flex flex-col h-full bg-background-component rounded  '>
						{props.name?.map((name) => (
								<button key={name} onClick={(e) => {setOption(e.target.innerText)}}  className={`flex h-9 w-64 p-2 cursor-pointer text-center  font-normal text-background-table hover: decoration-solid  dark:text-gray-900 hover:border-0 hover:text-[#edca62] rounded-lg `}>
										<span>{name}</span>
								</button>
						))}
				</aside>
				</>
		)
}

export default MiniSideBarNav