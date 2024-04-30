"use client"

import ModalEditCadastroDeRecurso from "@/components/componentsIndustrial/edit/modalEditCadastroDeRecurso"
import ModalRegisterCadastroDeRecuro from "@/components/componentsIndustrial/register/modalRegisterCadastroDeRecuro"
import ModalRegisterGrupoRecurso from "@/components/componentsIndustrial/register/modalRegisterGrupoRecurso"
import MiniSideBarNav from "@/components/ui/miniSideBarNav"
import TableRender from "@/components/ui/table/tableRender"
import useDeleteData from "@/hooks/services/useDeleteData"
import useGetData from "@/hooks/services/useGetData"
import usePostData from "@/hooks/services/usePostData"
import usePutData from "@/hooks/services/usePutData"
import useHandleChange from "@/hooks/ui/useHandleChange"
import { BreadcrumbItem, Breadcrumbs, Button, useDisclosure, Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { navRecursos } from "@/DB/data"
import FormatURL from "@/functions/formatURL"
import { DelRecurso, EditRecurso, GetRecurso, RegisterRecurso } from "@/app/actions/recurso"
import useMiniNavegation from "@/hooks/ui/useMiniNavegation"
import ModalEditGrupoRecurso from "@/components/componentsIndustrial/edit/modalEditGrupoRecurso"
import useValueTable from "@/hooks/ui/useValueTable"

const Recursos = () => {
	const [dataCadastroDeRecurso, setDataCadastroDeRecurso] = useState();
	const openRegisterCadastro = useDisclosure();
	const openEditCadastro = useDisclosure();
	const openRegisterGrupo = useDisclosure();
	const openEditGrupo = useDisclosure();
	const { warningGet, resultGet, severAllGet, ReceiveGet } = useGetData(GetRecurso);
	const { statusPost, warningPost, ReceivePost } = usePostData(RegisterRecurso);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(EditRecurso);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelRecurso);
	const { option, ChosenOption } = useMiniNavegation("Recurso");
	const {dataHandleChange, handleChange, clearHandle} = useHandleChange();
	const {valueTable, getValueTable} = useValueTable(severAllGet);

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
			{statusPost} {statusEdit} {statusDelete}
			{warningPost} {warningGet} {warningEdit} {warningDelete}
			<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
				<div className=' w-full absolute pl-2 gap-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className='flex items-center gap-2'>
					<div className='h-12 gap-2 flex flex-row justify-items-center items-center'>
					{option === "Recurso" ?
						<>
							<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
								onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
							<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet(FormatURL(option), dataHandleChange), clearHandle()}} >
								Pesquisar
							</Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openRegisterCadastro.onOpen}> Cadastrar </Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openEditCadastro.onOpen}> Editar </Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onClick={() => {DeleteData(FormatURL(option), valueTable)}}> Excluir </Button>
						</>
						:
						<>
							<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
								onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
							<Button color="primary" type="submit" size='sm' variant="ghost" onClick={() => {ReceiveGet(FormatURL(option), dataHandleChange), clearHandle()}} >
								Pesquisar
							</Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openRegisterGrupo.onOpen}> Cadastrar </Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onPress={openEditGrupo.onOpen}> Editar </Button>
							<Button color="primary" className="w-20" size="sm" variant="ghost" onClick={() => {DeleteData(FormatURL(option), valueTable)}}> Excluir </Button>
						</>
					}
					</div>
				</div>
			</div>
			<ModalRegisterCadastroDeRecuro name={option} isOpen={openRegisterCadastro.isOpen} 
				onOpenChange={openRegisterCadastro.onOpenChange} ReceivePost={ReceivePost}/>
			<ModalRegisterGrupoRecurso name={option} isOpen={openRegisterGrupo.isOpen} height={"w-3/5"} size={"2xl"}
				onOpenChange={openRegisterGrupo.onOpenChange} ReceivePost={ReceivePost} DataCadastroDeRecurso={dataCadastroDeRecurso}/>
			<ModalEditCadastroDeRecurso name={option} isOpen={openEditCadastro.isOpen} valueEdit={valueTable} 
				onOpenChange={openEditCadastro.onOpenChange} ReceivePut={ReceivePut}/>
			<ModalEditGrupoRecurso name={option} isOpen={openEditGrupo.isOpen} height={"w-3/5"} size={"2xl"} dataEdit={valueTable}
				onOpenChange={openEditGrupo.onOpenChange} ReceivePut={ReceivePut} DataCadastroDeRecurso={dataCadastroDeRecurso}/>
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
        <MiniSideBarNav ChosenOption={ChosenOption}  name={navRecursos} />
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={getValueTable}/>
				</div>
			</div>
		</>
	)
}
export default Recursos