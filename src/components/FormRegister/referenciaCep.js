import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, 
ModalBody,ModalFooter, Input } from "@nextui-org/react";
import Table from "../Table";

const RerenciaCep = (props) =>{
    const { isOpen, onOpenChange, handleChange, type} = props

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
                            <div className=" w-full flex flex-row items-center gap-[3.4rem] ">
                                <label className='text-xs pl-1.5'>CEP</label>
                                <Input className="w-40 " size="sm" labelPlacement="outside" maxLength={8} name={`cep${type}`}
                                    onChange={(e) => {handleChange(e) }}/>
                            </div>
                            <div className="w-full flex flex-row items-center gap-[1.8rem]">
                                <label className='text-xs'>Endereço</label>
                                <Input className="w-96" size="sm" labelPlacement="outside" name={`endereco${type}`}
                                    onChange={(e) => {handleChange(e) }}/>
                                <label className='text-xs'>Número</label>
                                <Input className="w-24" size="sm" labelPlacement="outside" name={`numero${type}`} 
                                    onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <div className="w-full flex flex-row items-center gap-1 ">
                            <label className='text-xs'>Complemento</label>
                            <Input size="sm" className="w-96" labelPlacement="outside" name={`complemento${type}`}
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <div className="w-full flex flex-row items-center gap-1 ">
                                <div className="flex flex-row gap-[2.6rem] pl-2 w-[60%] items-center">
                                    <label className='text-xs'>Bairro</label>
                                    <Input className="w-96" size="sm" labelPlacement="outside" name={`bairro${type}`}
                                    onChange={(e) => {handleChange(e)}}/>
                                </div>
                                <label className='text-xs pl-1'>Cidade</label>
                                <Input className="w-32" size="sm" labelPlacement="outside" name={`cidade${type}`} 
                                    onChange={(e) => {handleChange(e)}}/>
                                <label className='text-xs'>UF</label>
                                <Input className="w-10" size="sm" labelPlacement="outside" name={`uf${type}`} 
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                        </div>
                        <div className='w-full h-50 flex overflow-y-auto flex-col rounded'>
                        <div className='w-full h-full top-0 overflow-y-auto  bg-[#EDEDED]'>
                            <Table />
                        </div>
                    </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='bg-sky-50' size="sm" variant="flat" onClick={() => {''}} onPress={onClose} >
                            Cancelar
                        </Button>
                        <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {''}} 
                                onPress={onClose} >
                                    Consultar
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