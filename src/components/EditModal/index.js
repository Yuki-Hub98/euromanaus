"use client"
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody, 
		ModalFooter, Tabs, Tab, Card, CardBody, Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";
import FormRegister from "../FormRegister";
import FormDadosBancarios from "../FormDadosBancarios";

const EditModal = (props) => {
		const { ReceivePut, valueTable } = props
		const [dataToPut, setDataToPut] = useState();
		const [dataDescricao, setDataDescricao] = useState();
		const [data, setData] = useState (valueTable);
		const [cep1, setCep1] = useState ();
		const [cep2, setCep2] = useState ();
		const [slected, setSelected] = useState("Fornecedor");
		const [request, setRequest] = useState(false)

		useEffect(()=> {
			setDataDescricao(valueTable?.descricao)
		},[valueTable])

		const change = (value) => {
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
						default:
								break;
				}
				
		}

		const toClean = () => {
				setDataToPut(null)
				setDataDescricao(null)
				return;
		}

		const TypeButton = (type) => {

				if(type === 'departamento' || type === 'cor' || type === 'especificacao'){
						return 1 
				}else if (type === "linha" || type === "familia" || type === "grupo") {
						return 2
				}else if(type ==="fornecedor"){
						return 3
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
				if ((name === "cpfCnpjFornecedor" && cpfCnpj) || (name === "cpfCnpjRepresentante" && cpfCnpj)) {
						setData(prevState => ({
								...prevState,
								[name]: cpfCnpj
						}));
				}
		};

		const Fill  = async (re) => {
				const request = await re
				if (request) {
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

				return setRequest(false)
		}

		useEffect(() => {
				if (dataToPut) {
						ReceivePut(props?.name, dataToPut)
						return toClean();
				}
		})

		useEffect(() => {
				const cp = `cep${slected}`
				for (const key in data) {
						if (data.hasOwnProperty(key) && key === cp) {
								if (data[key].length === 8) {
										Cep(data)
								}
						}
				}
				
		},[data, slected])

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
												selectedKey={slected}
												onSelectionChange={setSelected}>
														<Tab key={"Fornecedor"} title="Dados Fronecedor" className="w-full bg-background-table">
																<FormRegister type={slected} fill={Fill} data={valueTable} request={request} handleChange={handleChange} SetData={setData}/>
														</Tab>
														<Tab key={"Representante"} title="Dados Representantes" className="h-3/6 bg-background-table">
																<FormRegister type={slected}  fill={Fill} data={valueTable} request={request} handleChange={handleChange} SetData={setData}/>
														</Tab>
														<Tab key={"Financeiro"} title="Dados Financeiros" className="h-3/6 bg-background-table">
																<FormDadosBancarios data={valueTable} handleChange={handleChange} />
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
												<Button className='bg-sky-50' variant="flat" onClick={() => {setDataToPut(null), props?.modal(!props?.isOpen)}} >
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