"use client"
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { GetNameFonecedor } from "@/app/actions/fornecedor";
import Fiscal from "../produtoRegister/fiscal";
import ProdutoRegister from "../produtoRegister";
import { GetProdutoToEdit } from "@/app/actions/produto";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";
import { SearchModelo } from "@/app/actions/modelo";

const ModalEditProdutos = (props) => {
  const { ReceivePut, valueTable, onOpenChange, isOpen, name, size, height, clearValueTable } = props
  const [dataRenderModal, setDataRenderModal] = useState({
		departamento:[],
		cor:[],
		especificacao:[],
		fornecedor:[],
		modelos:[]
	});
	const [data, setData] = useState (valueTable);
	const [slectedScreenProduto, setSelectedScreenProduto] = useState("Produto");
	const  {requestArvore, dataArvore} = useSearchArvoreProduto()

  const RequestEditProduto = async (idItem) => {
		const produto = await GetProdutoToEdit(idItem)
    console.log(produto)
		setData(produto)
	}

  useEffect(()=> {
    if (valueTable?.codigo) {
      RequestEditProduto(valueTable?.codigo)
    }
  },[valueTable])

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

  const AddItemProduto = async (data, valueTable) => {
    const newData = {...data}

    newData?.items.forEach((element) => {
      newData.items = [...newData.items, {idItem: element.idItem, descricaoItem: `${newData.descricaoProduto} ${element.cor} ${element.especificacao}`, codBarra: element.codBarra, cor: element.cor, especificacao: element.especificacao}]
      newData.items.shift()
    })

    newData?.items.forEach((element, index) => {
      if (element.idItem === valueTable?.idItem) {
        newData.items.splice(index, 1)
        newData.items = [...newData.items, {idItem: valueTable?.idItem, descricaoItem: `${newData.descricaoProduto} ${newData.cor} ${newData.especificacao}`, codBarra: valueTable?.codBarra, cor: newData.cor, especificacao: newData.especificacao}]
      }
    });
    delete newData.cor
    delete newData.especificacao
    delete newData.descricaoItem
    setData(newData)
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

useEffect(() => {
  RequestModal();
}, [])

return(
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
    }}
    >
    <ModalContent>
    {(onClose) => (
    <>
    <ModalHeader className="flex flex-col gap-1"> {name.toUpperCase()} </ModalHeader>
    <ModalBody>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row gap-2">
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
										handleValueEdit={handleValue} dataArvore={dataArvore}/>
								</Tab>
								<Tab key={"Fiscal"} title="Fiscal" className="w-full h-full bg-background-table">
									<Fiscal dataRenderModal={dataRenderModal} dataFiscal={data}	SetData={setData} type={"edit"}/>
								</Tab>
							</Tabs>
						</CardBody>
					</Card>                
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button className='bg-sky-50' variant="flat" onPress={onClose} onClick={()=> {setData(null), clearValueTable(null)}}>
        Cancelar
      </Button>
      { data ? (
      <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onPress={onClose} onClick={() => {setData(null), ReceivePut(name, data), clearValueTable(null)}} >
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
    )}
    </ModalContent>
	</Modal>
  </>
)

}

export default ModalEditProdutos