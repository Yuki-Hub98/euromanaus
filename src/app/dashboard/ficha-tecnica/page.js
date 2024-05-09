"use client";
import React, { useEffect, useState } from "react";
import TableRender from "@/components/ui/table/tableRender";
import useGetData from "@/hooks/services/useGetData";
import useSearchData from "@/hooks/services/useSearchData";
import useValueTable from "@/hooks/ui/useValueTable";
import { BreadcrumbItem, Breadcrumbs, Button, useDisclosure, Input } from "@nextui-org/react"
import ModalRegisterFichaTecnica from "@/components/componentsIndustrial/register/fichaTecnica/modalRegisterFichaTecnica";
import FormatURL from "@/functions/formatURL";
import { GetFichaTecnica, GetModalRegister, DeleteFichaTecnica } from "@/app/actions/ficha-tecnica";
import { GetFichaTecnicaItens } from "@/app/actions/produto";
import ModalEditFichaTecnica from "@/components/componentsIndustrial/edit/fichaTecnica/ModalEditFichaTecnica";
import useDeleteData from "@/hooks/services/useDeleteData";
import useHandleChange from "@/hooks/ui/useHandleChange";
import { ButtonPrint } from "@/components/ui/print/buttonPrint";

export default function FichaTecnica () {
	const option = "Ficha Tecnica"
	const {handleChange, clearHandle, dataHandleChange} = useHandleChange()
	const { warningGet, resultGet, severAllGet, ReceiveGet } = useGetData(GetFichaTecnica)
	const { warningDelete, statusDelete, DeleteData } = useDeleteData(DeleteFichaTecnica)
	const dropFichaTecnica = useSearchData(GetFichaTecnicaItens)
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();
	const { valueTable, getValueTable } = useValueTable(severAllGet);
	const [modalItemEtapaRecurso, setModalItemEtapaRecurso] = useState({
    etapaDeProducao:[],
    grupoRecurso:[],
    descricaoItem:[]
  })

	const ResquestModalItemEtapaRecurso = async () => {
    const modal = await GetModalRegister("ficha-tecnica")
    setModalItemEtapaRecurso(prev=> ({
      ...prev,
      ["etapaDeProducao"]: modal.etapas,
      ["grupoRecurso"]:modal.recursos,
      ["descricaoItem"]: modal.itens
    }))
  }

	useEffect(() => {
		ReceiveGet(FormatURL(option))
		dropFichaTecnica.Search("produtos")
	},[])

	return (
		<>
		{statusDelete} {warningDelete}
		{warningGet} {dropFichaTecnica.warningSearchDatat}
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<ButtonPrint data={valueTable}/>
				<div className="flex flex-row items-center gap-2" >
					<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
						onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
					<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet(FormatURL(option), dataHandleChange), clearHandle()}} >
						Pesquisar
					</Button>
				</div>
			</div>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<aside className=' h-full w-40 flex flex-col bg-background-component rounded left-64 '> 
					<div className='flex flex-col pt-5 justify-center gap-2 items-center'>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openRegister.onOpen} onClick={() => ResquestModalItemEtapaRecurso()}> Cadastrar </Button>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openEdit.onOpen} onClick={()=> ResquestModalItemEtapaRecurso()}> Editar </Button>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onClick={() => {DeleteData(FormatURL(option), valueTable), getValueTable(null)}}> Excluir </Button>
					</div>
				</aside>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={getValueTable}/>
					<div className='w-full h-10 bg-[#CFCFCF]'>
						<span className='text-black'>
							teste teste teste teste
						</span>
					</div>
				</div>
			</div>
			<ModalRegisterFichaTecnica  onOpenChangeRegisterFichaTecnica={openRegister.onOpenChange} isOpenRegisterFichaTecnica={openRegister.isOpen} height={"h-3/5"} size={"4xl"}
				name={option} modalFichaTecnica={dropFichaTecnica.searchData} modalItemEtapaRecurso={modalItemEtapaRecurso}/> 
			<ModalEditFichaTecnica onOpenChangeEditFichaTecnica={openEdit.onOpenChange} isOpenEditFichaTecnica={openEdit.isOpen} height={"h-3/5"} size={"4xl"}
				name={option} modalFichaTecnica={dropFichaTecnica.searchData} valueEdit={valueTable} modalItemEtapaRecurso={modalItemEtapaRecurso}/>
		</>
	)
}