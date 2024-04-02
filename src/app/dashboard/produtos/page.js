"use client";
import { Breadcrumbs, BreadcrumbItem, useDisclosure, Button } from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import TableRender from "@/components/ui/table/tableRender";
import { GetProduto } from "@/app/actions/produto";
import useGetData from "@/hooks/services/useGetData";
import { DelProduto, PostProduto, PutProdudo } from "@/app/actions/produto";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import ModalRegisterProdutos from "@/components/componentsCompras/register/modalRegisterProdutos";
import ModalEditProdutos from "@/components/componentsCompras/edit/modalEditProdutos";
import SearchProdutos from "@/components/componentsCompras/search/searchProdutos";

export default function Produtos () {
	const option = "produtos"
	const [valueTable, setValueTable] = useState();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { warningGet , resultGet , ReceiveGet } = useGetData(GetProduto)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostProduto);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutProdudo);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelProduto)
	
	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("produtos")
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>Produtos</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
					<SearchProdutos name={option} ReceiveGet={ReceiveGet}/>
				</div>
			</div>
			{statusPost} {statusEdit} {statusDelete}
			{warningGet} {warningPost} {warningEdit} {warningDelete}
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<aside className=' h-full w-40 flex flex-col bg-background-component rounded left-64 '> 
					<div className='flex flex-col pt-5 justify-center gap-2 items-center'>
						<Button color="primary" size="sm" variant="ghost" onPress={openRegister.onOpen}>
							Cadastrar
						</Button>
						<Button color="primary" size="sm" variant="ghost" onPress={openEdit.onOpen}>
							Editar
						</Button>
						<Button color="primary" size="sm" variant="ghost" onClick={()=>{DeleteData(option, valueTable), setValueTable(null)}}>
							Excluir
						</Button>
					</div>
				</aside>
				<ModalRegisterProdutos name={option} size={"4xl"} height={"w-3/5"} isOpen={openRegister.isOpen}
					onOpenChange={openRegister.onOpenChange} ReceivePost={ReceivePost} clearValueTable={ValueTable}/>
				<ModalEditProdutos name={option} size={"4xl"} height={"w-3/5"} isOpen={openEdit.isOpen}
					onOpenChange={openEdit.onOpenChange} ReceivePut={ReceivePut} clearValueTable={ValueTable} valueTable={valueTable} />
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={ValueTable}/>
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