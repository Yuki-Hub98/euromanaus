"use client";
import React, {useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import SuccessAlert from "@/components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import TableRender from "@/components/TableRender";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import Warning from "@/components/Warning";
import { PostFornecedor, GetFornecedor, PutFornecedor, DelFornecedor } from "@/app/actions/fornecedor"


export default function Fornecedor () {
	const option = "fornecedor"
	const [tableData, setTableData] = useState([{}]);
	const [status, setStatus] = useState();
	const [valueTable, setValueTable] = useState();
	

	const ValueTable = (value) => {
		setValueTable(value)
	}

	const PostData = (nameRequest, data) => {
		if (data) {
			Resgister(nameRequest, data)
		}
	}

	const GetData = (nameRequest, data) => {
		if (data) {
			Search(nameRequest, data);
		}else{
			Search(nameRequest)
		}
		
	}

	const PutData = (nameRequest, data) =>{
		if (data) {
			Edit(nameRequest, data);
		}
	}

	const DeleteData = (nameRequest, data) => {
		if (data) {
			Delete(nameRequest, data)
		}
	}

	const Resgister = async (nameRequest, data) =>{
		if (data) {
			const statusData = await PostFornecedor(nameRequest, data);
			setStatus(statusData);
		}
	}

	const Search = async (nameRequest, dataGet) =>{
		if (dataGet) {
			const data = await GetFornecedor(nameRequest, dataGet);
			setTableData(data)
		}else{
			const data = await GetFornecedor(nameRequest)
			setTableData(data)
		}
	} 

	const Edit = async (nameRequest, data)=>{
		if (data) {
			const statusData = await PutFornecedor(nameRequest, data);
			setStatus(statusData)
		}
	}

	const Delete = async (nameRequest, data) => {
		if (data) {
			const statusData = await DelFornecedor(nameRequest, data);
			setStatus(statusData)
			setValueTable(null)
		}
	}

	const CloseStatus = () => {
		return setStatus(null);
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Fornecedor</BreadcrumbItem>
					</Breadcrumbs>
			</div>
				{ status?.razaoSocialFornecedor ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) }
				{ status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Deletado com com Sucesso !"/> </> ): (null) }
			<TopButtons title={option} option={option} GetData={GetData} />
			{status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons  name={option} valueTable={valueTable} PostData={PostData} PutData={PutData} DeleteData={DeleteData} />
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={tableData} name={option} ValueTable={ValueTable} />
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