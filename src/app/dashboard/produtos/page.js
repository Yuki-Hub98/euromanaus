"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , {useState} from "react";
import SuccessAlert from "@/components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import TableRender from "@/components/TableRender";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import Warning from "@/components/Warning";
import { PostProduto, GetProduto, DelProduto } from "@/app/actions/produto";

export default function Produtos () {
	const option = "produtos"
	const [tableData, setTableData] = useState([{}]);
	const [status, setStatus] = useState();
	const [valueTable, setValueTable] = useState();

	const ValueTable = (value) => {
		setValueTable(value)
	}

	const GetData = (nameRequest, data) => {
		if (data) {
			Search(nameRequest, data)
		}else{
			Search(nameRequest)
		}
	}

	const PostData = (nameRequest, data) => {
		if (data) {
			Register(nameRequest, data)
		}
	}

	const Search = async (nameRequest, dataGet) => {
		if (dataGet) {
			const data =  await GetProduto(nameRequest, dataGet)
			setTableData(data)
		}else{
			const data =  await GetProduto(nameRequest)
			setTableData(data)
		}
	}

	const Register = async (nameRequest, data) => {
		const status = await PostProduto(nameRequest, data)
		setStatus(status)
	}

	const DeleteData = async (nameRequest, data) => {
		const statusDel = await DelProduto(nameRequest,data)
		setStatus(statusDel)
		setValueTable(null)
	}

	const CloseStatus = () =>{
		setStatus(null)
	} 

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Produtos</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			{status?.descricaoProduto ? (<> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null)}
			{ status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Deletado com com Sucesso !"/> </> ): (null) }
			<TopButtons title={option} option={option} GetData={GetData}/>
			{status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons name={option} PostData={PostData} DeleteData={DeleteData} valueTable={valueTable} />
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={tableData} name={option} ValueTable={ValueTable}/>
					<div className='w-full h-10 bg-[#CFCFCF]'>
						<span className='text-black'>
							teste teste teste teste
						</span>
					</div>
				</div>
			</div>
		</>
	)
}