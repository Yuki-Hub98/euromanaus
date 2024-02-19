"use client"
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody, 
    ModalFooter, Input } from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";

const EditModal = (props) => {

    const [dataToPut, setDataToPut] = useState();
    const [dataDescricao, setDataDescricao] = useState();
    const { ReceivePut } = props

    const change = (value) => {
            return props?.modal(value)
    }

    useEffect(() => {
        setDataDescricao(props?.valueTable?.descricao)
    },[props])
    

    const FormateToPut = (op) =>{
        if (op === 'departamento' || op === 'cor' || op === 'especificacao') {
            return setDataToPut({'descricao': props?.valueTable?.descricao, 'edit':dataDescricao})
        }
        switch (op) {  
            case 'linha':
                setDataToPut({'departamento': props?.valueTable?.departamento, 'editDepartamento': props?.valueTable?.departamento,
                'descricao':props?.valueTable?.descricao, 'editDescricao':dataDescricao })
                break;
            case 'familia':
                setDataToPut({'linha': props?.valueTable?.linha, 'editLinha': props?.valueTable?.linha,
                'descricao':props?.valueTable?.descricao, 'editDescricao':dataDescricao })
                break;
            case 'grupo':
                setDataToPut({'familia': props?.valueTable?.familia, 'editFamilia': props?.valueTable?.familia,
                'descricao':props?.valueTable?.descricao, 'editDescricao':dataDescricao})
                break;
            default:
                break;
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


    const toClean = () => {
        setDataToPut(null)
        return;
    }

    useEffect(() => {
        if (dataToPut) {
            ReceivePut(props?.name, dataToPut)
            return toClean();
        }
    })

    const TypeButton = (type) => {

        if(type === 'departamento' || type === 'cor' || type === 'especificacao'){
            return 1 
        }else if (type === "linha" || type === "familia" || type === "grupo") {
            return 2
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
                            <h1 className='font-bold'>{RenderSelect(props?.valueTable)}</h1>
                        </div>
                        <Input label="Descrição" value={dataDescricao} size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                    </div> 
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
            size="md"
            className='h-3/6'
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
                            { dataDescricao ? (
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