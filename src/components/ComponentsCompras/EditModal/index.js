"use client"
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Tabs, Tab, Card, CardBody, Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";
import FormRegister from "../FormRegister";
import FormDadosBancarios from "../FormDadosBancarios";
import { GetCep, GetNameFonecedor } from "@/app/actions/fornecedor";
import Fiscal from "../ProdutoRegister/fiscal";
import ProdutoRegister from "../ProdutoRegister";
import { GetProdutoToEdit } from "@/app/actions/produto";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";

const EditModal = (props) => {
	const { ReceivePut, valueTable, SetValueTable } = props
	const [dataToPut, setDataToPut] = useState();
	const [dataDescricao, setDataDescricao] = useState();
	const [dataRenderModal, setDataRenderModal] = useState({
		departamento:[],
		cor:[],
		especificacao:[],
		fornecedor:[]
	});
	const [data, setData] = useState (valueTable);
	const [cep1, setCep1] = useState ();
	const [cep2, setCep2] = useState ();
	const [slectedScreenFornecedor, setSelectedScreenFornecedor] = useState("Fornecedor");
	const [slectedScreenProduto, setSelectedScreenProduto] = useState("Produto");
	const  {requestArvore, dataArvore} = useSearchArvoreProduto()

	const RequestEditProduto = async (idItem) => {
		const produto = await GetProdutoToEdit(idItem)
		setData(produto)
	}

	useEffect(()=> {
		setDataDescricao(valueTable?.descricao)
		setData(valueTable)
		if (valueTable?.codigoItem) {
			RequestEditProduto(valueTable?.codigoItem)
		}
	},[valueTable])

	const toClean = () => {
		setCep1(null)
		setCep2(null)
		setData(null)
		setDataToPut(null)
		setDataDescricao(null)
		SetValueTable(null)
		return;
	}

	const change = (value) => {
		toClean();
		return props?.modal(value)
	}

	const FormateToPut = (op) =>{
		if (op === 'departamento' || op === 'cor' || op === 'especificacao') {
			return setDataToPut({'descricao': valueTable?.descricao, 'edit':dataDescricao})
		}
		switch (op) {  
			case 'linha':
				setDataToPut({'departamento': valueTable?.departamento, 'editDepartamento': valueTable?.departamento,
				'descricao':valueTable?.descricao, 'editDescricao':dataDescricao })
				break;
			case 'familia':
				setDataToPut({'linha': valueTable?.linha, 'editLinha': valueTable?.linha,
				'descricao':valueTable?.descricao, 'editDescricao':dataDescricao })
				break;
			case 'grupo':
				setDataToPut({'familia': valueTable?.familia, 'editFamilia': valueTable?.familia,
				'descricao':valueTable?.descricao, 'editDescricao':dataDescricao})
				break;
			case'fornecedor':
				setDataToPut(data)
				break;
			case'produtos':
				setDataToPut(data)
				break;
			default:
				break;
		}
				
		}

	const TypeButton = (type) => {
		if(type === 'departamento' || type === 'cor' || type === 'especificacao'){
			return 1 
		}else if (type === "linha" || type === "familia" || type === "grupo") {
			return 2
		}else if(type ==="fornecedor"){
			return 3
		}else if(type === "produtos"){
			return 4
		}   
	}

	const RenderSelect = (option) =>{
		if (option.departamento) {
			return option.departamento
		}else if(option.linha) {
			return option.linha
		}else if (option.familia) {
			return option.familia
		}
	}

	const handleChange = (e, cpfCnpj) => {
		const { name, value } = e.target;
			setData(prevState => ({
				...prevState,
				[name]: RegexToSave(value)
			}));
			if (name?.includes("email") || name.includes("site")) {
				setData(prevState => ({
					...prevState,
					[name]: value
				}));
			}
			if (name?.includes("telefone") || name?.includes("celular")) {
				setData(prevState => ({
					...prevState,
					[name]: FormatFone(value)
				}));
			}
			if ((name === "cpfCnpjFornecedor" && cpfCnpj) || (name === "cpfCnpjRepresentante" && cpfCnpj)) {
				setData(prevState => ({
					...prevState,
					[name]: cpfCnpj
				}));
			}
		};

		const handleValue = (target) => {
			const {name, value, checked} = target.target;
			if (data?.linha && data?.grupo && name === "modelo") {
				const descProd = `${data?.linha} ${value} ${data?.grupo}`
				setData(prevState => ({
					...prevState,
					["descricaoProduto"]: descProd
				}))
			}else if (data?.linha  && data?.modelo && name === "grupo") {
				const descProd = `${data?.linha} ${data?.modelo} ${value}`
				setData(prevState => ({
					...prevState,
					["descricaoProduto"]: descProd
				}))
			}
			if (data?.linha && data?.grupo && data?.modelo && data?.cor && name === "especificacao" ) {
				const descItem = `${data?.linha} ${data?.modelo} ${data?.grupo} ${data?.cor} ${value}`
				setData(prevState => ({
					...prevState,
					["descricaoItem"]: descItem
				}))
			}else if (data?.linha && data?.grupo && data?.modelo && data?.especificacao && name === "cor" ) {
				const descItem = `${data?.linha} ${data?.modelo} ${data?.grupo} ${value} ${data?.especificacao}`
				setData(prevState => ({
					...prevState,
					["descricaoItem"]: descItem
				}))
			}else if (data?.linha  && data?.modelo && data?.cor && data?.especificacao && name === "grupo") {
				const descItem = `${data?.linha} ${data?.modelo} ${value} ${data?.cor} ${data?.especificacao}`
				setData(prevState => ({
					...prevState,
					["descricaoItem"]: descItem
				}))
			}else if (data?.linha  && data?.grupo && data?.cor && data?.especificacao && name === "modelo") {
				const descItem = `${data?.linha} ${value} ${data?.grupo} ${data?.cor} ${data?.especificacao}`
				setData(prevState => ({
					...prevState,
					["descricaoItem"]: descItem
				}))
			}
			setData(prevState => ({
				...prevState,
				[name]:value
			}))
			if(name === "processado") {
				setData(prevState => ({
					...prevState,
					[name]: checked
				}))
			}
		}
	
		const AddItemProduto = async (data, valueTable) => {
			const newData = {...data}
			newData.items.forEach((element, index) => {
				if (element.idItem === valueTable?.idItem) {
					newData.items.splice(index, 1)
					newData.items = [...newData.items, {idItem: valueTable?.idItem, descricaoItem: newData.descricaoItem, codBarra: valueTable?.codBarra, cor: newData.cor, especificacao: newData.especificacao}]
				}
			});
			delete newData.cor
			delete newData.especificacao
			delete newData.descricaoItem
			console.log(newData)
			setData(newData)
	}

	const Fill  = () => {
		if (cep1) {
			setData(prevState => ({
				...prevState,
				cepFornecedor: cep1?.cep,
				enderecoFornecedor: cep1?.logradouro,
				bairroFornecedor: cep1?.bairro,
				cidadeFornecedor: cep1?.localidade,
				ufFornecedor: cep1?.uf
			}));
		}

		if (cep2) {
			setData(prevState => ({
				...prevState,
				cepRepresentante: cep2?.cep,
				enderecoRepresentante: cep2?.logradouro,
				bairroRepresentante: cep2?.bairro,
				cidadeRepresentante: cep2?.localidade,
				ufRepresentante: cep2?.uf
			}));
		}
	}

	const RequestModal = async () =>{
		const dataDepartamento = await GetArvoreProduto("departamento")
		const dataFornecedor = await GetNameFonecedor()
		const dataCor = await GetArvoreProduto("cor")
		const dataEspecificacao = await GetArvoreProduto("especificacao")

		setDataRenderModal(data=> ({
			...data,
			["departamento"]: [dataDepartamento],
			["cor"]:[dataCor],
			["especificacao"]: [dataEspecificacao],
			["fornecedor"]: [dataFornecedor]
		})) 
	}

	useEffect(()=> {
		if (props?.name === "produtos" && props?.isOpen) {
			RequestModal();
		}
	},[props])

	useEffect(() => {
		if (dataToPut) {
			ReceivePut(props?.name, dataToPut)
			return toClean();
		}
	})

	useEffect(() => {
		const cp = `cep${slectedScreenFornecedor}`
			for (const key in data) {
				if (data?.hasOwnProperty(key) && key === cp) {
					if (data[key]?.length === 8) {
						Cep(data)
					}
				}
			}
	},[data, slectedScreenFornecedor])

	const Cep = async (data) => {
		if (data?.cepFornecedor) {
			const ce = await GetCep(data.cepFornecedor)
			setCep1(ce)
		}

		if (data?.cepRepresentante) {
			const ce = await GetCep(data.cepRepresentante)
			setCep2(ce)
		}
	}

	const buttons = (type) => {
		switch (type) {
			case 1:
				return(
					<>
						<div>
							<Input label="Descrição" value={dataDescricao}  size='lg' type="Text"  onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
						</div>
					</>
				)
			case 2:
				return(
					<>
						<div className="h-full">
							<div className='w-96 gap-y-5 flex justify-center  relative'>
							<h1 className='font-bold'>{RenderSelect(valueTable)}</h1>
						</div>
							<Input label="Descrição" value={dataDescricao} size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
						</div> 
					</>
				)
			case 3:
				return(
					<>    
						<Card className="w-full">
							<CardBody className="overflow-hidden bg-background-table">
								<Tabs
									fullWidth
									aria-label="Tabs form"
									classNames={{
										tabList: "bg-[white] rounded-b-sm rounded-b-sm",
										cursor: "w-full bg-[#edca62b4] rounded-b-sm",
										tabContent: "group-data-[selected=true]:text-[black] rounded-b-sm",
									}}
									selectedKey={slectedScreenFornecedor}
									onSelectionChange={setSelectedScreenFornecedor}>
										<Tab key={"Fornecedor"} title="Dados Fronecedor" className="w-full bg-background-table">
											<FormRegister type={slectedScreenFornecedor} fill={Fill} data={valueTable} handleChange={handleChange} SetData={setData}/>
										</Tab>
										<Tab key={"Representante"} title="Dados Representantes" className="h-3/6 bg-background-table">
											<FormRegister type={slectedScreenFornecedor}  fill={Fill} data={valueTable} handleChange={handleChange} SetData={setData}/>
										</Tab>
										<Tab key={"Financeiro"} title="Dados Financeiros" className="h-3/6 bg-background-table">
											<FormDadosBancarios data={valueTable} handleChange={handleChange} />
										</Tab>
								</Tabs>
							</CardBody>
						</Card>                
					</>
				)
			case 4:
			return(
				<>    
					<Card className="w-full">
						<CardBody className="overflow-hidden bg-background-table">
							<Tabs
								fullWidth
								aria-label="Tabs form"
								classNames={{
									tabList: "bg-[white] rounded-b-sm rounded-b-sm",
									cursor: "w-full bg-[#edca62b4] rounded-b-sm",
									tabContent: "group-data-[selected=true]:text-[black] rounded-b-sm",
								}}
								selectedKey={slectedScreenProduto}
								onSelectionChange={setSelectedScreenProduto}>
									<Tab key={"Produto"} title="Cadastro de Produto" className="w-full h-full bg-background-table">
										<ProdutoRegister dataRenderModal={dataRenderModal} dataProduto={data} requestArvore={requestArvore}  AddItem={AddItemProduto} type={"edit"} 
										handleValue={handleValue} dataArvore={dataArvore}/>
									</Tab>
									<Tab key={"Fiscal"} title="Fiscal" className="w-full h-full bg-background-table">
										<Fiscal dataRenderModal={dataRenderModal} dataFiscal={data}	SetData={setData} type={"edit"}/>
									</Tab>
							</Tabs>
						</CardBody>
					</Card>                
				</>
			)
			default:
				break;
		}
		}

	return (
		<>
			<Modal 
				isOpen={props?.isOpen}
				onOpenChange={(e) => change(e)}
				placement="top-center"
				size={props?.size}
				className={props?.h}
				classNames={{
				body: "py-6",
				backdrop: "bg-[#D4D4D8]/50 backdrop-opacity-40",
				base: "border-[#292f46] bg-[#D4D4D8] dark:bg-[#19172c] text-[#2c2c2b]",
				header: "border-[#292f46]",
				footer: "border-[#292f46]",
				closeButton: "hover:bg-white/5 active:bg-white/10",
				}}
				>
				<ModalContent>
					{ props?.isOpen ? (
						<>
							<ModalHeader className="flex flex-col gap-1"> {props?.name?.toUpperCase()} </ModalHeader>
								<ModalBody>
									<div className="w-full flex flex-col">
										<div className="w-full flex flex-row gap-2">
											{buttons(TypeButton(props?.name))}
										</div>
									</div>
								</ModalBody>
								<ModalFooter>
									<Button className='bg-sky-50' variant="flat" onClick={() => {toClean(), props?.modal(!props?.isOpen)}} >
										Cancelar
									</Button>
									{ dataDescricao || data ? (
										<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {FormateToPut(props?.name), props?.modal(!props?.isOpen)}} >
											Editar
										</Button>
									)
										:
									(
										<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" isDisabled>
											Editar
										</Button>
									)
									}
								</ModalFooter>
						</>
					): null}
				</ModalContent>
			</Modal>
		</>
	)
		
}

export default EditModal