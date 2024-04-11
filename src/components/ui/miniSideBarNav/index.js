"use Client";
import React from "react";

const MiniSideBarNav = (props) => {
		const {ChosenOption, name} = props

		return(
				<>
				<aside className='w-40 left-64 flex flex-col h-full bg-background-component rounded'>
						{name?.map((name) => (
								<button key={name} onClick={(e) => {ChosenOption(e.target.innerText)}}  className={`text-sm flex h-9 w-64 p-2 cursor-pointer text-center font-normal text-background-table hover: decoration-solid  dark:text-gray-900 hover:border-0 hover:text-[#edca62] rounded-lg`}>
										<span>{name}</span>
								</button>
						))}
				</aside>
				</>
		)
}

export default MiniSideBarNav