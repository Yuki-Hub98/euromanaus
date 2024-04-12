"use client";
import React, { useEffect, useState } from "react";
import { GetEtapaDeProducao } from "@/app/actions/etapa-de-producao";
import TableRender from "@/components/ui/table/tableRender";
import useGetData from "@/hooks/services/useGetData";
import useValueTable from "@/hooks/ui/useValueTable";
import { BreadcrumbItem, Breadcrumbs, Button, useDisclosure, Input } from "@nextui-org/react"
import ModalRegisterFichaTecnica from "@/components/componentsIndustrial/register/modalRegisterFichaTecnica";
import { GetRecurso, RegisterRecurso } from "@/app/actions/recurso";
import FormatURL from "@/functions/formatURL";
import usePostData from "@/hooks/services/usePostData";


export default function FichaTecnica () {
	const option = "Grupo de Recursos"
	const [dataCadastroDeRecurso, setDataCadastroDeRecurso] = useState();
	const { warningGet, resultGet, ReceiveGet } = useGetData(GetRecurso);
	const { statusPost, warningPost, ReceivePost } = usePostData(RegisterRecurso);
	const openRegisterGrupo = useDisclosure();
	const {valueTable, getValueTable} = useValueTable();
	const openRegister = useDisclosure();
	const openEdit = useDisclosure();

	
  useEffect(() => {
		ReceiveGet(FormatURL(option))
		if(option === "Grupo de Recursos") setDataCadastroDeRecurso(resultGet)
	},[option])

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
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openRegisterGrupo.onOpen}> Cadastrar </Button>
						<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openEdit.onOpen}> Editar </Button>
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
			<ModalRegisterFichaTecnica name={option} isOpenRegisterFichaTecnica={openRegisterGrupo.isOpen} height={"w-4/5"} size={"2xl"}
				onOpenChangeRegisterFichaTecnica={openRegisterGrupo.onOpenChange} ReceivePost={ReceivePost} DataCadastroDeRecurso={dataCadastroDeRecurso}/> 
		</>
	)
}