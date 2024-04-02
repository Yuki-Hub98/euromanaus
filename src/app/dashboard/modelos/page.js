"use client";
import React, {useEffect, useState} from "react";
import { Breadcrumbs, BreadcrumbItem, useDisclosure, Input, Button } from "@nextui-org/react";
import TableRender from "@/components/ui/table/tableRender";
import useGetData from "@/hooks/services/useGetData";
import { DeleteModelo, EditModelo, RegisterModelo, SearchModelo } from "@/app/actions/modelo";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import useDeleteData from "@/hooks/services/useDeleteData";
import ModalRegisterModelo from "@/components/componentsCompras/register/modalRegisterModelo";
import ModalEditModelo from "@/components/componentsCompras/edit/modalEditModelo";

export default function Modelos () {
	const option = "modelos"
	const [valueTable, setValueTable] = useState();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { warningGet , resultGet, ReceiveGet } = useGetData(SearchModelo)
	const { statusPost, warningPost, ReceivePost } = usePostData(RegisterModelo);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(EditModelo);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DeleteModelo)

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("modelos")
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Modelos</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2 gap-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className='flex items-center gap-2'>
					<div className='h-12 gap-2 flex flex-row justify-items-center items-center'>
						<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
							onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
						<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet(option, dataHandleChange)}} >
							Pesquisar
						</Button>
					</div>
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
				<ModalRegisterModelo name={option} isOpen={openRegister.isOpen} onOpenChange={openRegister.onOpenChange} ReceivePost={ReceivePost}/>
				<ModalEditModelo  name={option} isOpen={openEdit.isOpen} valueEdit={valueTable} onOpenChange={openEdit.onOpenChange} ReceivePut={ReceivePut}/>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} style={"w-1/3"} ValueTable={ValueTable} />
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