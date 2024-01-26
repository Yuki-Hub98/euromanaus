"use Client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody, 
    ModalFooter, Input } from "@nextui-org/react";
import Select from "react-select";
import RegexToSave from "@/functions/regexToSave";

const RegisterModal = (props) => {

    const [dataToPost, setDataToPost] = useState();
    const [selectData, setSelectData] = useState();
    const [dataDescricao, setDataDescricao] = useState();

    const dataTransform = props?.dataModal?.map((data) => ( 
        {'value': data?.descricao, 'label':data?.descricao}
        ))
    
    const FormateToPost = (op) =>{
        if (op === 'departamento' || op === 'cor' || op === 'especificacao') {
            return setDataToPost({'descricao': dataDescricao})
        }
        switch (op) {  
            case 'linha':
                setDataToPost({'departamento': selectData, 'descricao': dataDescricao})
                break;
            case 'familia':
                setDataToPost({'linha': selectData, 'descricao': dataDescricao})
                break;
            case 'grupo':
                setDataToPost({'familia': selectData, 'descricao': dataDescricao})
                break;
            default:
                break;
        }
        
    }

    const toClean = () => {
        setDataDescricao(null)
        setDataToPost(null)
        return;
    }

    useEffect(() => {
        if (dataToPost) {
            props?.ReceivePost(props?.name, dataToPost)
            return toClean()
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
                        <Input label="Descrição"  size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                    </div>
                    </>
                )
            case 2:
                return(
                    <>
                    <div className="h-full">
                    <div className='flex justify-center w-96 relative'>
                        <Select className='w-60 ml-3' onChange={(e) => setSelectData(e.value)} options={dataTransform}/>
                    </div>
                        <Input label="Descrição" size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
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
            onOpenChange={props?.onOpenChange}
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
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1"> {props?.name?.toUpperCase()} </ModalHeader>
                    <ModalBody>
                    <div className="flex flex-col w-full">
                        <div className="w-full flex flex-row gap-2">
                            {buttons(TypeButton(props?.name))}
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='bg-sky-50' variant="flat" onClick={(e) => {console.log("e: ",e),setDataToPost(null)}} onPress={onClose} >
                            Cancelar
                        </Button>
                            { dataDescricao ? (
                                <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={(e) => {FormateToPost(props?.name)}} onPress={onClose} >
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