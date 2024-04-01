import { Button, Card, CardBody, Modal, ModalContent, 
	ModalFooter, ModalHeader, Tabs, ModalBody, Tab } from "@nextui-org/react"
import FormRegister from "../formRegister"
import FormDadosBancarios from "../formDadosBancarios"
import { useEffect, useState } from "react"
import RegexToSave from "@/functions/regexToSave"
import FormatFone from "@/functions/formatFone"
import { GetCep } from "@/app/actions/fornecedor"

const ModalRegisterFornecedor = (props) => {
  const {isOpen, onOpenChange, size, height, name, ReceivePost} = props
  const [slectedScreenFornecedor, setSelectedScreenFornecedor] = useState("Fornecedor");
  const [cep1, setCep1] = useState();
	const [cep2, setCep2] = useState();
  const [data, setData] = useState();

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
  const isDisabled = data?.razaoSocialFornecedor
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
			}}>
			<ModalContent>
				{(onClose) => (
					<>
					<ModalHeader className="flex flex-col gap-1"> {name.toUpperCase()} </ModalHeader>
					<ModalBody>
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
					</ModalBody>
					<ModalFooter>
						<Button className='bg-sky-50' variant="flat" onClick={()=> {setData(null)}} onPress={onClose} >
							Cancelar
						</Button>
						{ isDisabled ? (
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {ReceivePost(name, data)}} 
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
export default ModalRegisterFornecedor