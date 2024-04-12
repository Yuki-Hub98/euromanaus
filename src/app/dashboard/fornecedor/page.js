"use client";
import React, {useEffect, useState} from "react";
import { Breadcrumbs, BreadcrumbItem, useDisclosure, Button } from "@nextui-org/react";
import TableRender from "@/components/ui/table/tableRender";
import { GetFornecedor } from "@/app/actions/fornecedor"
import useGetData from "@/hooks/services/useGetData";
import { DelFornecedor, PostFornecedor, PutFornecedor } from "@/app/actions/fornecedor";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import ModalRegisterFornecedor from "@/components/componentsCompras/register/modalRegisterFornecedor";
import ModalEditFornecedor from "@/components/componentsCompras/edit/modalEditFornecedor";
import SearchFornecedor from "@/components/componentsCompras/search/searchFornecedor";



export default function Fornecedor () {
	const option = "fornecedor"
	const [valueTable, setValueTable] = useState();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { warningGet , resultGet, ReceiveGet } = useGetData(GetFornecedor)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostFornecedor);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutFornecedor);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelFornecedor)

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("fornecedor")
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Fornecedor</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			{statusPost} {statusEdit} {statusDelete}
			{warningGet} {warningPost} {warningEdit} {warningDelete}
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2'>
					<h1 className='font-bold text-background-table capitalize'>Fornecedor</h1>
				</div>
				<SearchFornecedor name={option} ReceiveGet={ReceiveGet}/>
			</div>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<aside className=' h-full w-40 flex flex-col bg-background-component rounded left-64 '> 
					<div className='flex flex-col pt-5 justify-center gap-2 items-center'>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openRegister.onOpen}>
							Cadastrar
						</Button>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openEdit.onOpen}>
							Editar
						</Button>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onClick={()=>{DeleteData(option, valueTable), setValueTable(null)}}>
							Excluir
						</Button>
					</div>
				</aside>
				<ModalRegisterFornecedor name={option} size={"4xl"} height={"w-3/5"} isOpen={openRegister.isOpen}
					onOpenChange={openRegister.onOpenChange} ReceivePost={ReceivePost}/>
				<ModalEditFornecedor name={option} size={"4xl"} height={"w-3/5"} isOpen={openEdit.isOpen} 
				clearValueTable={ValueTable} valueTable={valueTable} onOpenChange={openEdit.onOpenChange} ReceivePut={ReceivePut}/>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={ValueTable} />
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