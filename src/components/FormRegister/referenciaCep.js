import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, 
ModalBody,ModalFooter, Input } from "@nextui-org/react";
import TableRender from "../TableRender";
import { GetCep } from "@/app/actions/fornecedor";
import RegexCep from "@/functions/regexToCep";

const RerenciaCep = (props) =>{
    const { isOpen, 
    onOpenChange,
    handleChange,
    dataFornecedor,
    dataRepresentante,
    SetData,
    type} = props
    
    const [cep, setCep] = useState();
    const [dataRequest, setDataRequest] = useState();
    const [valueTable, setValueTable] = useState();

    const ValueTable = (value) => {
        setValueTable(value)
    }

    useEffect(() => {

        if(dataFornecedor?.enderecoFornecedor && dataFornecedor?.cidadeFornecedor && dataFornecedor?.ufFornecedor) {
            const end = RegexCep(dataFornecedor?.enderecoFornecedor)
            const cid = RegexCep(dataFornecedor?.cidadeFornecedor)
            setDataRequest({
                endereco: end,
                cidade: cid,
                uf: dataFornecedor?.ufFornecedor
            })
        }

        if(dataRepresentante?.enderecoFornecedor && dataRepresentante?.cidadeFornecedor && dataRepresentante?.ufFornecedor) {
            const end = RegexCep(dataRepresentante?.enderecoFornecedor)
            const cid = RegexCep(dataRepresentante?.cidadeFornecedor)
            setDataRequest({
                endereco: end,
                cidade: cid,
                uf: dataRepresentante?.ufFornecedor
            })
        }
    },[dataFornecedor, dataRepresentante])

    const CepRef = async (dataCep) => {
        if (dataCep) {
            const ce = await GetCep(dataCep)
            const filter = ce?.map((c) => {
                let array = {}
                array = {
                    logradouro: c.logradouro,
                    bairro: c.bairro,
                    cidade: c.localidade,
                    cep: c.cep,
                    uf: c.uf
                }
                return array
            })
            setCep(filter)
        }
    }

    const SetCeptoData = (dataToCep) => {
        if (dataToCep && type === "Fornecedor") {
            SetData(prevState => ({
                ...prevState,
                cepFornecedor: dataToCep?.cep,
                enderecoFornecedor: dataToCep?.logradouro,
                bairroFornecedor: dataToCep?.bairro,
                cidadeFornecedor: dataToCep?.cidade,
                ufFornecedor: dataToCep?.uf
                
            }))
            setCep(null)
        }
        if (dataToCep && type === "Representante") {
            SetData(prevState => ({
                ...prevState,
                cepRepresentante: dataToCep?.cep,
                enderecoRepresentante: dataToCep?.logradouro,
                bairroRepresentante: dataToCep?.bairro,
                cidadeRepresentante: dataToCep?.cidade,
                ufRepresentante: dataToCep?.uf
                
            }))
            setCep(null)
        }
    }

    return(
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
            }}
            >
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1"> Referencia </ModalHeader>
                    <ModalBody>
                    <div className=" w-full flex flex-col ">
                        <div className="w-full flex flex-row gap-2">
                            Referencia
                        </div>
                        <div className=" w-full flex flex-col gap-2 p-2 mt-2">
                            <div className="w-full flex flex-row items-center gap-[0.9rem] ">
                                <label className='text-xs pl-1'>Cidade</label>
                                <Input autoComplete="off" className="w-32" size="sm" labelPlacement="outside" name={`cidade${type}`} 
                                    onChange={(e) => {handleChange(e)}}/>
                                <label className='text-xs'>UF</label>
                                <Input autoComplete="off"  className="w-10" size="sm" labelPlacement="outside" name={`uf${type}`} 
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <div className="w-full flex flex-row items-center gap-1">
                                <label className='text-xs'>Endereço</label>
                                <Input autoComplete="off" className="w-96" size="sm" labelPlacement="outside" name={`endereco${type}`}
                                    onChange={(e) => {handleChange(e) }}/>
                                <Button size={"sm"} onClick={() => CepRef(dataRequest)} className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" >Pesquisar</Button>
                            </div>
                        </div>
                        <div className=' w-full h-2/4 flex mt-4 overflow-y-auto overflow-x-auto flex-col rounded'>
                        <div className='w-full h-2/4 top-0 overflow-y-auto overflow-x-auto rounded bg-[#EDEDED]'>
                            <TableRender name={"cep"} data={cep} ValueTable={ValueTable}  />
                        </div>
                    </div>
                    </div>
                    </ModalBody>
                    <ModalFooter className=" absolute left-[34rem] top-[38rem]">
                        <Button className='bg-sky-50' size="sm" variant="flat" onClick={() => {''}} onPress={onClose} >
                            Cancelar
                        </Button>
                        <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {SetCeptoData(valueTable)}} 
                                onPress={onClose} >
                            Concluir
                        </Button>
                    </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        </>
    )
}

export default RerenciaCep