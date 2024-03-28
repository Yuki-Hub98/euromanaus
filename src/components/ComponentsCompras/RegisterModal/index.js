"use Client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Tabs, Tab, Card, CardBody, Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";
import FormRegister from "../formRegister";
import { GetCep, GetNameFonecedor } from "@/app/actions/fornecedor";
import FormatFone from "@/functions/formatFone";
import FormDadosBancarios from "../formDadosBancarios";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import { GetLastIdItem, GetSearchProduto, PostCod } from "@/app/actions/produto";
import { SearchModelo } from "@/app/actions/modelo";
import ProdutoRegister from "../produtoRegister";
import Fiscal from "../produtoRegister/fiscal";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";

const RegisterModal = (props) => {
	const [dataToPost, setDataToPost] = useState();
	const [dataProdutoDuplicated, setDataProdutoDuplicated] = useState();
	const [dataRenderModal, setDataRenderModal] = useState({
		departamento:[],
		cor:[],
		especificacao:[],
		fornecedor:[],
		modelos:[]
	});
	const [slectedScreenFornecedor, setSelectedScreenFornecedor] = useState("Fornecedor");
	const [slectedScreenProduto, setSelectedScreenProduto] = useState("Produto");
	const [data, setData] = useState ();
	const [cep1, setCep1] = useState ();
	const [cep2, setCep2] = useState ();
	const {ReceivePost, onOpenChange, isOpen} = props
	const  {requestArvore, dataArvore} = useSearchArvoreProduto()

	const toClean = () => {
		setData(null)
		setDataToPost(null)
		setCep1(null)
		setCep2(null)
		setDataProdutoDuplicated(null)
		return;
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
		if ((name?.includes("cpfCnpjFornecedor") && cpfCnpj) || (name.includes("cpfCnpjRepresentante" ) && cpfCnpj)) {
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

	const AddItemProduto = async (data) => {
		const newData = {...data}
		if (newData?.items?.length > 0) {
			const lestId = await GetLastIdItem();
			const cod = await PostCod({fornecedor: newData.fornecedor, idItem: lestId?.lastIdItem})
			newData.items.push({idItem: lestId?.lastIdItem, descricaoItem: `${newData.descricaoProduto} ${newData.cor} ${newData.especificacao}`, codBarra: cod.codBarra, cor: newData.cor, especificacao: newData.especificacao})
		}else{
			const lestId = await GetLastIdItem();
      if(lestId) {
				const cod = await PostCod({fornecedor: newData.fornecedor, idItem: lestId?.lastIdItem})
				newData.items = [{idItem: lestId?.lastIdItem, descricaoItem: `${newData.descricaoProduto} ${newData.cor} ${newData.especificacao}`, codBarra: cod.codBarra, cor: newData.cor, especificacao: newData.especificacao}]
      }else{
				const id = 1
				const cod = await PostCod({fornecedor: newData.fornecedor, idItem: id})
				newData.items = [{idItem: id, descricaoItem: `${newData.descricaoProduto} ${newData.cor} ${newData.especificacao}`, codBarra: cod.codBarra, cor: newData.cor, especificacao: newData.especificacao}]
			}
			
		}

		delete newData.descricaoItem;
		delete newData.codBarra;
		delete newData.cor;
		delete newData.especificacao;

		setData(newData)
}

	const TypeButton = (type) => {
		if(type=== 'modelos'){
			return 1 
		}else if (type === "linha" || type === "familia" || type === "grupo") {
			return 2
		}else if(type === "fornecedor"){
			return 3
		}else if (type === "produtos") {
			return 4
		}   
	}
	const Fill = () => {
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
	const RequestProdutoDuplicated = async (descricao, fornecedor) => {
		const dataRegisted = await GetSearchProduto({descricao: descricao, fornecedor: fornecedor});
		if (dataRegisted?.idProduto) {
			setData(dataRegisted)
			setDataProdutoDuplicated(dataRegisted)
		}
	}

	const RequestModal = async () =>{
		const dataDepartamento = await GetArvoreProduto("departamento")
		const dataFornecedor = await GetNameFonecedor()
		const dataCor = await GetArvoreProduto("cor")
		const dataEspecificacao = await GetArvoreProduto("especificacao")
		const modelo = await SearchModelo("modelos")

		setDataRenderModal(data=> ({
			...data,
			["departamento"]: [dataDepartamento],
			["cor"]:[dataCor],
			["especificacao"]: [dataEspecificacao],
			["fornecedor"]: [dataFornecedor],
			["modelos"]:[modelo]
		})) 
	}

	useEffect(()=> {
		if (props?.name === "produtos" && props?.isOpen) {
			RequestModal();
		}
	},[props])

	useEffect(() => {
		if(data){
			setDataToPost(data)
		}
		if (data?.razaoSocialFornecedor) {
			setDataToPost(data)
		}
		if(data?.items){
			setDataToPost(data)
		}
	},[props, data])

	useEffect(() => {
		const cp = `cep${slectedScreenFornecedor}`
		for (const key in data) {
			if (data?.hasOwnProperty(key) && key === cp) {
				if (data[key].length === 8) {
					Cep(data)
				}
			}
		}
		
	},[data, slectedScreenFornecedor])

	useEffect(() => {
		RequestProdutoDuplicated(data?.descricaoProduto, data?.fornecedor)
  },[data?.descricaoProduto, data?.fornecedor])

	const Cep = async (data) => {
		if (data?.cepFornecedor) {
			const ce = await GetCep(data?.cepFornecedor)
			setCep1(ce)
		}

		if (data?.cepRepresentante) {
			const ce = await GetCep(data.cepRepresentante)
			setCep2(ce)
		}
	}
	const isDisabled = dataToPost?.razaoSocialFornecedor || dataToPost?.items || dataToPost?.descricao
	const buttons = (type) => {
		switch (type) {
			case 1:
				return(
					<>
					<div>
						<Input label="Descrição"  size="lg" type="Text" name="descricao" onChange={(e) => {handleChange(e)}} 
						labelPlacement="outside-left" className="w-80 mt-2 justify-between"/>
					</div>
					</>
				)
			case 3:
				return(
					<>    
					<Card className="w-full max-h-3/6">
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
							<Tab key={"Fornecedor"} title="Dados Fronecedor" className="w-full max-h-3/6 bg-background-table">
								<FormRegister type={slectedScreenFornecedor} data={data} fill={Fill} handleChange={handleChange} SetData={setData} />
							</Tab>
							<Tab key={"Representante"} title="Dados Representantes" className="w-full max-h-3/6 bg-background-table">
								<FormRegister type={slectedScreenFornecedor} data={data} fill={Fill}  handleChange={handleChange} SetData={setData} />
							</Tab>
							<Tab key={"Financeiro"} title="Dados Financeiros" className="w-full max-h-3/6 bg-background-table">
								<FormDadosBancarios handleChange={handleChange} />
							</Tab>
						</Tabs>
					</CardBody>
					</Card>                
					</>
				)
				case 4:
				return(
					<>    
					<Card className="w-full h-full">
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
								<ProdutoRegister dataRenderModal={dataRenderModal} type={"register"} duplicated={dataProdutoDuplicated} AddItem={AddItemProduto}
								handleValue={handleValue} requestArvore={requestArvore} dataArvore={dataArvore} dataProduto={data}/>
							</Tab>
							<Tab key={"Fiscal"} title="Fiscal" className="w-full h-full bg-background-table">
								<Fiscal dataFiscal={data} handleValue={handleValue} type={"register"} dataDuplicated={dataProdutoDuplicated} SetData={setData}/>
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
			isOpen={isOpen}
			onOpenChange={onOpenChange}
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
			}}>
			<ModalContent>
				{(onClose) => (
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
						<Button className='bg-sky-50' variant="flat" onClick={() => {toClean()}} onPress={onClose} >
							Cancelar
						</Button>
						{ isDisabled ? (
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {ReceivePost(props?.name, dataToPost), toClean()}} 
								onPress={onClose} >
								Cadastrar
							</Button>
						)
							:
						(
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" isDisabled>
								Cadastrar
							</Button>
						)}
					</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
		</>
	)
	
}

export default RegisterModal