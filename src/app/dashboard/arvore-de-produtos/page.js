"use client"
import { Breadcrumbs, BreadcrumbItem, Input, Button, useDisclosure } from "@nextui-org/react";
import React , { useEffect, useState } from "react";
import { DelArvoreProduto, GetArvoreProduto, PostArvoreProduto, PutArvoreProduto } from "@/app/actions/arvore-produto";
import TableRender from "@/components/ui/table/tableRender/";
import MiniSideBarNav from "@/components/ui/miniSideBarNav";
import { navArvoreProduto } from "@/DB/data";
import useGetData from "@/hooks/services/useGetData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import useDeleteData from "@/hooks/services/useDeleteData";
import useHandleChange from "@/hooks/ui/useHandleChange";
import ModalRegisterArvoreProduto from "@/components/componentsCompras/register/modalRegisterArvoreProduto";
import ModalEditArvoreProduto from "@/components/componentsCompras/edit/modalEditArvoreProduto";

export default function ArvoreDeProduto () {
	const [option, setOption] = useState('departamento');
	const [dataModal, setDataModal] = useState();
	const [nameRequestMiniSideBar, setNameRequestMiniSideBar] = useState();
	const [requestMiniSideBar, setRequestMiniSideBar] = useState(false);
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const [valueTable, setValueTable] = useState();
	const {dataHandleChange, handleChange} = useHandleChange()
	const { resultGet , warningGet, ReceiveGet } = useGetData(GetArvoreProduto)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostArvoreProduto);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutArvoreProduto);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelArvoreProduto)
	const ChosenOption = (option, request) => {
		const op = option.toLowerCase() === "especificação" ? "especificacao" : option.toLowerCase()
		if (request) {
			setRequestMiniSideBar(request)
		}
		setNameRequestMiniSideBar(op);
		setTableData([{}])
		setValueTable(null)
		return setOption(op)
	}

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		if (requestMiniSideBar) {
			switch (nameRequestMiniSideBar) {
				case 'linha':
					modalData('departamento')
					break;
				case 'familia':
					modalData('linha')
					break;
				case 'grupo':
					modalData('familia')
					break;
				default:
					break;
			}
		}
	})

	useEffect(() => {
		ReceiveGet(option)
	},[option])

	const modalData = async (opcao) =>{
		if (opcao){
			const data = await GetArvoreProduto(opcao)
			setDataModal(data)
			setRequestMiniSideBar(false)
		}
		
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>Árvore de Produto</BreadcrumbItem>
					<BreadcrumbItem className='capitalize'>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			{statusPost} {statusEdit} {statusDelete}
			{warningPost} {warningGet} {warningEdit} {warningDelete}
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
					<Button color="primary" size="sm" variant="ghost" onPress={openRegister.onOpen}> Cadastrar </Button>
					<Button color="primary" size="sm" variant="ghost" onPress={openEdit.onOpen}> Editar </Button>
					<Button color="primary" size="sm" variant="ghost" onClick={() => {DeleteData(option, valueTable)}}> Excluir </Button>
				</div>
			</div>
			<ModalRegisterArvoreProduto name={option} isOpen={openRegister.isOpen}
				onOpenChange={openRegister.onOpenChange} ReceivePost={ReceivePost} dataModal={dataModal}/>
			<ModalEditArvoreProduto name={option} isOpen={openEdit.isOpen} valueEdit={valueTable} 
			onOpenChange={openEdit.onOpenChange} ReceivePut={ReceivePut}/>
				<div className=' w-full flex h-4/5 overflow-y-auto mt-1.5 flex-row'>
					<MiniSideBarNav ChosenOption={ChosenOption}  name={navArvoreProduto} />
					<div className='w-full flex h-50 overflow-y-auto  flex-col rounded'>
						<TableRender data={resultGet} name={option} buttons={false} ValueTable={ValueTable} style={"w-1/3"} type={"search"}/>
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

