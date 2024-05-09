"use client"
import { BreadcrumbItem, Breadcrumbs, Button, Input, useDisclosure} from "@nextui-org/react"
import ModalFiltroAdministracaoPreco from "@/components/componentsMovimento/search/modalFiltroAdministracaoPreco"
import { useState } from "react"
import { GetArvoreProduto } from "@/app/actions/arvore-produto"
import { SearchModelo } from "@/app/actions/modelo"
import TableSelect from "@/components/ui/table/tableSelect"
import useValueTable from "@/hooks/ui/useValueTable"
import usePutData from "@/hooks/services/usePutData"
import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates"
import { UpdateAdministracaoDePreco } from "@/app/actions/administracao-de-preco"
import FormatURL from "@/functions/formatURL"

const administracaoPreco = () => {
  const option = "Administração de Preço"
	const openFilter = useDisclosure();
	const dataAtual = new Date()
	const dataFormatada = `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1 < 10 ? '0' : ''}${dataAtual.getMonth() + 1}-${dataAtual.getDate() < 10 ? '0' : ''}${dataAtual.getDate()}`;
	const [dataModalSearchItem, setDataModalSearchItem] = useState({
    departamento:[],
    linha:[],
    modelos:[]
  });
	const {valueTable, getValueTable, clearValue, clear} = useValueTable();
	const [valuesAdministracaoDePreco, setValuesAdministracaoDePreco] = useState({administracaoDePreco:[]})
	const {statusEdit, warningEdit, ReceivePut} = usePutData(UpdateAdministracaoDePreco)
	const [calcDescontoData, setCalcDescontoDate] = useState(dataFormatada)
	const [dataProgramada, setDataProgramada] = useState()

	const valueDataProgramada = (e) => {
		const {value} = e.target
		setDataProgramada(value)
	}

	const formatDate = (press) => {
		const {key, target, type} = press
	
		if (key === "Enter" && type === "keyup") {
			dataAtual.setDate(dataAtual.getDate() + parseInt(target.value))
			let newDate = `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1 < 10 ? '0' : ''}${dataAtual.getMonth() + 1}-${dataAtual.getDate() < 10 ? '0' : ''}${dataAtual.getDate()}`;
			setCalcDescontoDate(newDate)
		}else if (type === "change") {
			let ultimasLetrasIndex = target.value.substr(-2);
			setCalcDescontoDate(target.value)
			setDataProgramada(Math.abs((parseInt(ultimasLetrasIndex) - dataAtual.getDate())))	
		}
	}
	
	const clearData = () => {
		setValuesAdministracaoDePreco(prev => ({
			...prev,
			["administracaoPreco"]: []
		}))
	}

	const RequestModalSearchItem = async () =>{
    const dataDepartamento = await GetArvoreProduto("departamento")
    const modelo = await SearchModelo("modelos")
    setDataModalSearchItem(data=> ({
      ...data,
      ["departamento"]: [dataDepartamento],
      ["modelos"]: [modelo]
    })) 
  }

	const updateValues = (data) => {
		data.map((element) => {
			element.precoAtual = element.precoProposto
			element.margemAtual = element.margemProposta
			return element
		})
	}

	const ValuesAdministracaoDePreco = (data) => {
		const newAdministracao = {...valuesAdministracaoDePreco}
    data.forEach(element => {
      newAdministracao.administracaoDePreco.push(element)
    });
    setValuesAdministracaoDePreco(prev => ({
      ...prev,
      ["administracaoDePreco"]: RemoveDuplicatesCodigo(newAdministracao.administracaoDePreco)
    }))
	}

  return(
    <>
			{statusEdit} {warningEdit}
      <div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Movimento</BreadcrumbItem>
					<BreadcrumbItem>Administração</BreadcrumbItem>
					<BreadcrumbItem className='capitalize'>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<div className='w-full flex flex-col pl-2 h-1/4 shadow-2xl mt-8 rounded gap-2 bg-background-component'>
				<div className='w-full flex absolute pl-2 gap-2'>
					<h1 className='font-bold text-background-table capitalize'>{option}</h1>
				</div>
				<div className='grid grid-cols-8 w-full h-full items-center mt-7'>
					<div>
						{valueTable?.length > 0 ? 
							<Button color="primary" className="w-20" size="sm" variant="ghost" 
							onClick={() => {ReceivePut(FormatURL(option), valueTable), updateValues(valueTable), clearValue(), clearData()}} > Atualizar </Button>
							:
							<Button color="primary" className="w-20" size="sm" variant="ghost" isDisabled> Atualizar </Button>
						}
						<Button color="primary" className="w-20 ml-2" size="sm" variant="ghost" onClick={()=> RequestModalSearchItem()} onPress={openFilter.onOpen}> Filtro </Button>
					</div>
					<div className="col-span-3 grid grid-cols-4 h-full">
						<label className="text-[#edca62] text-xs col-start-1 max-h-8 pt-2">Data Base</label>
						<Input className="col-start-2 max-h-8" value={dataFormatada} type="date" labelPlacement='outside-left' size="sm" color="primary" name="dataBase"/>
						<label className="text-[#edca62] text-xs col-start-1 max-h-8 pt-2">Data Programada</label>
						<Input className="w-[9rem] col-start-2 max-h-8" onKeyUp={formatDate} placeholder="Dias" value={dataProgramada || ''} onChange={(e) => valueDataProgramada(e)} 
							type="text" labelPlacement='outside-left' size="sm" color="primary" name="dataProgramada"/>
						<label className="text-[#edca62] text-xs col-start-1 max-h-8 pt-2">Data Final</label>
						<Input className="col-start-2 max-h-8" type="date" value={calcDescontoData} onChange={(e) => {formatDate(e)}} labelPlacement='outside-left' size="sm" placeholder=" " color="primary" name="dataFinal"/>
						<label className="text-[#edca62] text-xs col-start-1 max-h-8 pt-2">Desconto</label>
						<Input className="w-[9rem] col-start-2 max-h-8" type="text" labelPlacement='outside-left' size="sm" placeholder="%" color="primary" name="desconto"/>
					</div>
				</div>
			</div>
			<div className="flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row">
				<aside className='h-full w-40 flex flex-col bg-background-component rounded left-64 '> 
					<div className='flex flex-col pt-5 justify-center gap-2 items-center'>

					</div>
				</aside>
				<div className='w-full flex h-50 overflow-y-auto flex-col rounded'>
					<TableSelect data={valuesAdministracaoDePreco.administracaoDePreco} option={"setter"} getValueTable={getValueTable} name={option} 
						buttons={false} style={"table-auto whitespace-nowrap"} clear={clear}/>
					<div className='w-full h-10 bg-[#CFCFCF]'>
					</div>
				</div>
			</div>
			<ModalFiltroAdministracaoPreco size={"5xl"} height={"h-5/6"} dataModal={dataModalSearchItem} onOpenChangeFilter={openFilter.onOpenChange}
				isOpenFilter={openFilter.isOpen} name={option} ValuesAdministracaoDePreco={ValuesAdministracaoDePreco}/>
    </>
  )
}

export default administracaoPreco