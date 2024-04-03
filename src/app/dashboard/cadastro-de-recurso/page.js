"use client";
import { Breadcrumbs, BreadcrumbItem, Button, useDisclosure, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useGetData from "@/hooks/services/useGetData";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import ModalRegisterMaoDeObra from "@/components/componentsIndustrial/register/modalRegisterMaoDeObra";
import ModalEditMaoDeObra from "@/components/componentsIndustrial/edit/modalEditMaoDeObra";
import TableRender from "@/components/ui/table/tableRender/";
import useHandleChange from "@/hooks/ui/useHandleChange";
import { DelCadastroDeRecurso, EditCadastroDeRecurso, GetCadastroDeRecurso, RegisterCadastroDeRecurso } from "@/app/actions/cadastro-de-recurso";


export default function CadastroRecurso (props) {
	const option = "Cadastro de Recurso"
	const [valueTable, setValueTable] = useState();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { warningGet , resultGet , ReceiveGet } = useGetData(GetCadastroDeRecurso)
	const { statusPost, warningPost, ReceivePost } = usePostData(RegisterCadastroDeRecurso);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(EditCadastroDeRecurso);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelCadastroDeRecurso)
	const {dataHandleChange, handleChange, clearHandle} = useHandleChange()
	const ValueTable = (value) => {
		setValueTable(value)
	}
	useEffect(() => {
		ReceiveGet("cadastro-de-recurso")
	},[])
	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			{statusPost} {statusEdit} {statusDelete}
			{warningPost} {warningGet} {warningEdit} {warningDelete}
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2 gap-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className='flex items-center gap-2'>
					<div className='h-12 gap-2 flex flex-row justify-items-center items-center'>
						<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
							onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
						<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet("cadastro-de-recurso", dataHandleChange), clearHandle()}} >
							Pesquisar
						</Button>
					</div>
					<Button color="primary" size="sm" variant="ghost" onPress={openRegister.onOpen}> Cadastrar </Button>
					<Button color="primary" size="sm" variant="ghost" onPress={openEdit.onOpen}> Editar </Button>
					<Button color="primary" size="sm" variant="ghost" onClick={() => {DeleteData("cadastro-de-recurso", valueTable)}}> Excluir </Button>
				</div>
			</div>
			<ModalRegisterMaoDeObra name={option} isOpen={openRegister.isOpen} 
			onOpenChange={openRegister.onOpenChange} ReceivePost={ReceivePost}/>
			<ModalEditMaoDeObra name={option} isOpen={openEdit.isOpen} valueEdit={valueTable} 
			onOpenChange={openEdit.onOpenChange} ReceivePut={ReceivePut}/>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} ValueTable={ValueTable} style={"table-auto whitespace-nowrap"}/>
				</div>
			</div>
		</>
	)
}