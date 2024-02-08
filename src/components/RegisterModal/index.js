"use Client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,ModalFooter, Tabs, Tab, Card, CardBody, Input} from "@nextui-org/react";
import Select from "react-select";
import RegexToSave from "@/functions/regexToSave";
import FormRegister from "../FormRegister";
import { GetCep } from "@/app/actions/fornecedor";

const RegisterModal = (props) => {
    const [dataToPost, setDataToPost] = useState();
    const [slected, setSelected] = useState("Fornecedor");
    const [data, setData] = useState ({});
    const [cep1, setCep1] = useState ();
    const [cep2, setCep2] = useState ();
    const {ReceivePost} = props
    const [request, setRequest] = useState(false)

    const dataTransform = props?.dataModal?.map((data) => ( 
        {'value': data?.descricao, 'label':data?.descricao}
        ))

    const toClean = () => {
        setData(null)
        setDataToPost(null)
        setCep1(null)
        setCep2(null)
        return;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: RegexToSave(value)
            }));
    };

    const TypeButton = (type) => {
        if(type === 'departamento' || type === 'cor' || type === 'especificacao'){
            return 1 
        }else if (type === "linha" || type === "familia" || type === "grupo") {
            return 2
        }else if(type === "fornecedor"){
            return 3
        }   
    }

    const Fill = (re) => {
        if (re) {
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
        if(data){
            switch(props?.name){
                case 'linha':
                    return setDataToPost({'departamento': data?.select, 'descricao': data?.descricao})
                case 'familia':
                    return setDataToPost({'linha': data?.select, 'descricao': data?.descricao})
                case 'grupo':
                    return setDataToPost({'familia': data?.select, 'descricao': data?.descricao})
                default:
                    break;
            }
            setDataToPost(data) 
        }
    },[props, data])

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

    console.log(data)

    const buttons = (type) => {
        switch (type) {
            case 1:
                return(
                    <>
                    <div>
                        <Input label="Descrição"  size='lg' type="Text" name="descricao" onChange={(e) => {handleChange(e)}} 
                        labelPlacement="outside-left" className="w-80 mt-2 justify-between"/>
                    </div>
                    </>
                )
            case 2:
                return(
                    <>
                    <div className="h-full">
                    <div className='w-96 flex justify-center relative'>
                        <Select className='w-60 ml-3' name="select" onChange={(e) => {setData(data => ({...data, 'select': RegexToSave(e.value)}))}} options={dataTransform}/>
                    </div>
                        <Input label="Descrição" size='lg' name="descricao" type="Text" onChange={(e) => {handleChange(e)}}
                        labelPlacement="outside-left" className="w-80 mt-2  justify-between"/>
                    </div>
                    </>
                )
            case 3:
                return(
                    <>    
                    <Card className="w-full">
                    <CardBody className="overflow-hidden bg-[#D4D4D8]">
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
                            <Tab key={"Fornecedor"} title="DadosFronecedor" className="w-full bg-[#D4D4D8]">
                                <FormRegister type={slected} dataFornecedor={data} fill={Fill} request={request} handleChange={handleChange} />
                            </Tab>
                            <Tab key={"Representante"} title="Dados Representantes" className="h-3/6 bg-[#D4D4D8]">
                                <FormRegister type={slected} dataRepresentante={data} fill={Fill} request={request} handleChange={handleChange} />
                            </Tab>
                            <Tab key={"Financeiro"} title="Dados Financeiros" className="h-3/6 bg-[#D4D4D8]">
                                <div className="w-9/12 p-2">
                                    <h1 className="font-bold">Dados Bancarios</h1>
                                    <div className="w-full flex flex-row  gap-2 mt-2 mb-1 p-2 items-center"> 
                                        <div className="w-5/12 flex flex-row gap-5 items-center">
                                            <label className='text-xs'>Cod. Banco</label>
                                            <Input className="w-14 p-1" size="sm" labelPlacement="outside" name="codBanco" 
                                                onChange={(e) => {handleChange(e)}}/>
                                        </div>
                                        <label className='text-xs'>Banco</label>
                                        <Input className="w-40" size="sm"  labelPlacement="outside" name="celular" 
                                            onChange={(e) => {handleChange(e)}}/>
                                    </div>
                                    <div className="flex flex-row w-full gap-10 mb-1 p-2 items-center"> 
                                        <label className='text-xs'>Agência</label>
                                        <Input className="w-40 pl-1" size="sm"  labelPlacement="outside" name="celular" 
                                            onChange={(e) => {handleChange(e)}}/>
                                    </div>
                                    <div className="flex flex-row w-full gap-[3.5rem] mb-1 p-2 items-center"> 
                                        <label className='text-xs'>Conta</label>
                                        <Input className="w-40" size="sm"  labelPlacement="outside" name="celular" 
                                            onChange={(e) => {handleChange(e)}}/>
                                    </div>
                                    <div className="flex flex-row w-full gap-2 mb-1 p-2 items-center"> 
                                        <label className='text-xs'>Orgão Emissor</label>
                                        <Input className="w-40" size="sm"  labelPlacement="outside" name="celular" 
                                            onChange={(e) => {handleChange(e)}}/>
                                    </div>
                                </div>
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
            onOpenChange={props?.onOpenChange}
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
                            { dataToPost ? (
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

export default RegisterModal