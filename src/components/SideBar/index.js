"use client"

import { DropDownNav } from "../DropDown";
import Link from "next/link";
import { opcoesCadastro } from "@/DB/data";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdContentPasteSearch } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

const Sidebar = (props) => {
		const [open, setOpen] = useState(true)
		const {statusSide} = props

		return (
				<>
						<aside className={`fixed pt-10 bg-background-component ${open ? 'w-64' : 'w-16' } duration-300 h-screen`} aria-label="Sidenav">
						<div
							className={`flex cursor-pointer py-3 hover:text-[#edca62] ${open ? 'justify-end pr-2' : 'justify-center'}`}
							onClick={() => {setOpen(!open), statusSide(!open)}}>
								<VscMenu size={22}/>
							</div>
						<div className="overflow-y-auto py-5 px-3 h-full bg-Background-Component dark:bg-gray-800 dark:border-gray-700">
								<ul className="space-y-2">
								<li>
									<Link href={"/dashboard"} className={`flex ${open ? '' : 'justify-center'} items-center p-2 text-base font-normal text-white rounded-lg hover:bg-[white] dark:text-gray-900 hover:text-[#edca62] group`}>
										<IoHomeOutline size={18}/>
										<span className={`ml-3 ${!open && 'hidden'}`}> Dashboard</span>
									</Link>
								</li>
								<li>
									<DropDownNav name={"Cadastro"} open={open} icon={<CgNotes size={18}/>} opcoes={opcoesCadastro}/>
								</li>
								<li>
									<DropDownNav name={"Consulta"} open={open} icon={<MdContentPasteSearch size={18}/>} opcoes={opcoesCadastro}/>
								</li>
								<li>
									<DropDownNav name={"Movimento"} open={open} icon={<CgNotes size={18}/>} opcoes={opcoesCadastro}/>
								</li>
								</ul>
								<ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
								<li>
									<a href="#" className={`flex  ${open ? '' : 'justify-center'} items-center p-2 text-base font-normal text-white bg-[#2b2b2a] rounded-lg transition duration-75 hover:bg-white dark:hover:bg-gray-700 dark:text-white hover:text-[#edca62] group`}>
										<FaRegCalendarAlt size={18}/>
										<span className={`ml-3 ${!open && 'hidden'}`}>Calendar</span>
									</a>
								</li>
								<li>
									<a href="#" className={`flex  ${open ? '' : 'justify-center'} items-center p-2 text-base font-normal text-white bg-[#2b2b2a] rounded-lg transition duration-75 hover:bg-white dark:hover:bg-gray-700 dark:text-white hover:text-[#edca62] group`}>
										<IoSettingsOutline size={18}/>
										<span className={`ml-3 ${!open && 'hidden'}`}>Settings</span>
									</a>
								</li>
								</ul>
						</div>
						</aside>
				</>
		)
}

export default Sidebar;