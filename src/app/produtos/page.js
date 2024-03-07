"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , {useState} from "react";
import TopButtons from "@/components/TopButtons";
import TableRender from "@/components/TableRender";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import { PostProduto } from "../actions/produto";
import SuccessAlert from "@/components/SuccessAlert";
import Sidebar from "@/components/SideBar";

export default function Produtos () {
	const option = "produtos"
	const [tableData, setTableData] = useState([{}]);
	const [status, setStatus] = useState();
	const [valueTable, setValueTable] = useState();
	
	const PostData = (nameRequest, data) => {
		if (data) {
			Register(nameRequest, data)
		}
	}

	const Register = async (nameRequest, data) => {
		const status = await PostProduto(nameRequest, data)
		setStatus(status)
	}

	const CloseStatus = () =>{
		setStatus(null)
	} 

	return (
		<>
		<Sidebar/>
		<div className="h-screen flex flex-col ml-[16rem] pl-2 bg-background-page">
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Produtos</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			{status?.descricaoProduto ? (<> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null)}
			<TopButtons title={option} option={option}/>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons name={option} PostData={PostData} />
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={tableData} name={option} />
					<div className='w-full h-10 bg-[#CFCFCF]'>
						<span className='text-black'>
							teste teste teste teste
						</span>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}