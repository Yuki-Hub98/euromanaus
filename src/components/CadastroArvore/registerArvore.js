"use client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody, 
    ModalFooter, Input, useDisclosure} from "@nextui-org/react";
import Select from "react-select";
import RegexToSave from "@/functions/regexToSave";

const RegisterModal = (data) => {

    const [dataToPost, setDataToPost] = useState();
    const [selectData, setSelectData] = useState();
    const [dataDescricao, setDataDescricao] = useState();
    

    const dataTransform = data?.dataModal?.map((data) => ( 
        {'value': data?.descricao, 'label':data?.descricao}
        ))
    
    const FormateToPost = (opcao) =>{
        switch (opcao) {
            case 'Departamento':
                setDataToPost({'descricao': dataDescricao})
                break;
            case 'Linha':
                setDataToPost({'departamento': selectData, 'descricao': dataDescricao})
                break;
            case 'Familia':
                setDataToPost({'linha': selectData, 'descricao': dataDescricao})
                break;
            case 'Grupo':
                setDataToPost({'familia': selectData, 'descricao': dataDescricao})
                break;
            case 'Cor':
                setDataToPost({'descricao': dataDescricao})
                break;
            case 'Especificação':
                setDataToPost({'descricao': dataDescricao})
                break;
            default:
                break;
        }
        
    }

    useEffect(() => {
        if (dataToPost) {
            setDataDescricao(null)
            return data?.ReceivePostData(dataToPost)  
        }
    }, [dataToPost])
    
    return (
        <>
        <Modal 
            isOpen={data?.isOpen}
            onOpenChange={data?.onOpenChange}
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
                    <ModalHeader className="flex flex-col gap-1"> {data?.data?.name} </ModalHeader>
                    <ModalBody>
                    <div className="flex flex-col w-full">
                        <div className="w-full flex flex-row gap-2">
                            {data?.data?.type === 1 ? 
                                <div>
                                <Input label="Descrição"  size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                </div>
                                :
                                <div>
                                <div className='flex justify-center  w-96 relative'>
                                    <Select className='w-60 ml-3' onChange={(e) => setSelectData(e.value)} options={dataTransform}/>
                                </div>
                                <Input label="Descrição" size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                </div>
                            }
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='bg-sky-50' variant="flat" onClick={() => {setDataToPost(null), data?.CloseStatus()}} onPress={onClose} >
                            Cancelar
                        </Button>
                            { dataDescricao ? (
                                <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {FormateToPost(data?.data?.name)}} onPress={onClose} >
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