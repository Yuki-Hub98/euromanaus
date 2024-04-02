"use Client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { GetNameFonecedor } from "@/app/actions/fornecedor";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import { GetLastIdItem, GetSearchProduto, PostCod } from "@/app/actions/produto";
import { SearchModelo } from "@/app/actions/modelo";
import ProdutoRegister from "../produtoRegister";
import Fiscal from "../produtoRegister/fiscal";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";
import { RemoveDuplicatesItems } from "@/functions/removeDuplicates";

const ModalRegisterProdutos = (props) => {
  const {ReceivePost, onOpenChange, isOpen, name, size, height, clearValueTable} = props

  const [dataProdutoDuplicated, setDataProdutoDuplicated] = useState();
	const [dataRenderModal, setDataRenderModal] = useState({
		departamento:[],
		cor:[],
		especificacao:[],
		fornecedor:[],
		modelos:[]
	});
	const [slectedScreenProduto, setSelectedScreenProduto] = useState("Produto");
	const [data, setData] = useState ();
	
	const  {requestArvore, dataArvore} = useSearchArvoreProduto()

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
			let lestId = newData?.items[newData?.items?.length - 1].idItem + 1
			const cod = await PostCod({fornecedor: newData.fornecedor, idItem: lestId})
			newData.items.push({idItem: lestId, descricaoItem: `${newData.descricaoProduto} ${newData.cor} ${newData.especificacao}`, codBarra: cod.codBarra, cor: newData.cor, especificacao: newData.especificacao})
			const newDataRemoveItemsDuplicated = RemoveDuplicatesItems(newData.items)
			newData.items = [...newDataRemoveItemsDuplicated]
			
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
		RequestProdutoDuplicated(data?.descricaoProduto, data?.fornecedor)
  },[data?.descricaoProduto, data?.fornecedor])

  return (
		<>
		<Modal 
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="top-center"
			size={size}
			className={height}
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
					<ModalHeader className="flex flex-col gap-1"> {name.toUpperCase()} </ModalHeader>
					<ModalBody>
					<div className="w-full flex flex-col">
						<div className="w-full flex flex-row gap-2">
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
						</div>
					</div>
					</ModalBody>
					<ModalFooter>
						<Button className='bg-sky-50' variant="flat" onClick={() => {setData(null), clearValueTable(null), onClose()}}>
							Cancelar
						</Button>
						<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {ReceivePost(name, data), setData(null), clearValueTable(null)}} 
							onPress={onClose} >
							Cadastrar
						</Button>
					</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
		</>
	)
	

}

export default ModalRegisterProdutos