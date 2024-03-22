"use client";
import { Breadcrumbs, BreadcrumbItem, Button, useDisclosure, Input } from "@nextui-org/react";
import {useState} from "react";
import useGetData from "@/hooks/services/useGetData";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import ModalRegisterMaoDeObra from "@/components/ComponentsIndustrial/Register/modalRegisterMaoDeObra";
import ModalEditMaoDeObra from "@/components/ComponentsIndustrial/Edit/modalEditMaoDeObra";
import TableRender from "@/components/TableRender";
import useHandleChange from "@/hooks/ui/useHandleChange";

export default function MaoDeObra () {
	const option = "Mão de Obra"
	const [valueTable, setValueTable] = useState();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { warningGet , resultGet , ReceiveGet } = useGetData()
	const { statusPost, warningPost, ReceivePost } = usePostData();
	const { statusEdit, warningEdit, ReceivePut } = usePutData();
	const { statusDelete, warningDelete, DeleteData } = useDeleteData()
	const {dataHandleChange, handleChange} = useHandleChange()
	
	const ValueTable = (value) => {
		setValueTable(value)
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2 gap-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className='flex items-center gap-2'>
					<div className='h-12 gap-2 flex flex-row justify-items-center items-center'>
						<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
							onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
						<Button color="primary" type="submit" size='sm' variant="ghost" >
							Pesquisar
						</Button>
					</div>
					<Button color="primary" size="sm" variant="ghost" onPress={openRegister.onOpen}> Cadastrar </Button>
					<Button color="primary" size="sm" variant="ghost" onPress={openEdit.onOpen}> Editar </Button>
				</div>
			</div>
			<ModalRegisterMaoDeObra name={option} isOpen={openRegister.isOpen} onOpenChange={openRegister.onOpenChange } />
			<ModalEditMaoDeObra name={option} isOpen={openEdit.isOpen} onOpenChange={openEdit.onOpenChange }/>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender />
				</div>
			</div>
		</>
	)
}