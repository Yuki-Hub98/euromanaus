"use client";
import { GetEtapaDeProducao, DelEtapaDeProducao } from "@/app/actions/etapa-de-producao";
import TableRender from "@/components/ui/table/tableRender";
import FormatURL from "@/functions/formatURL";
import useGetData from "@/hooks/services/useGetData";
import useValueTable from "@/hooks/ui/useValueTable";
import ModalRegisterEtapaDeProducao from "@/components/componentsIndustrial/register/modalRegisterEtapaDeProduto";
import ModalEditEtapaDeProducao from "@/components/componentsIndustrial/edit/modalEditEtapaDeProducao";
import { Breadcrumbs, BreadcrumbItem, useDisclosure, Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import useDeleteData from "@/hooks/services/useDeleteData";

export default function EtapaProducao (props) {
	const option = "Etapa de Produção"
	const { warningGet, resultGet, ReceiveGet } = useGetData(GetEtapaDeProducao);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelEtapaDeProducao)
	const {valueTable, getValueTable} = useValueTable();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();

	useEffect(()=> {
		ReceiveGet(FormatURL(option));
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem className='capitalize'>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			{warningGet} {statusDelete} {warningDelete}
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className="flex flex-row items-center gap-2" >
					<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
						onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
					<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet(option, dataHandleChange)}} >
						Pesquisar
					</Button>
				</div>
			</div>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<aside className=' h-full w-40 flex flex-col bg-background-component rounded left-64 '> 
					<div className='flex flex-col pt-5 justify-center gap-2 items-center'>
						<Button color="primary" size="sm" variant="ghost" onPress={openRegister.onOpen}> Cadastrar </Button>
						<Button color="primary" size="sm" variant="ghost" onPress={openEdit.onOpen}> Editar </Button>
						<Button color="primary" size="sm" variant="ghost" onClick={() => {DeleteData(FormatURL(option), valueTable), getValueTable(null)}}> Excluir </Button>
					</div>
				</aside>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"w-1/3"} ValueTable={getValueTable}/>
					<div className='w-full h-10 bg-[#CFCFCF]'>
						<span className='text-black'>
							teste teste teste teste
						</span>
					</div>
				</div>
			</div>
			<ModalRegisterEtapaDeProducao name={option} isOpen={openRegister.isOpen} ValueTable={valueTable}
				onOpenChange={openRegister.onOpenChange} />
			<ModalEditEtapaDeProducao name={option} isOpen={openEdit.isOpen} valueEdit={valueTable} ValueTable={getValueTable}
				onOpenChange={openEdit.onOpenChange}/>
		</>
	)
}