import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Tabs, Tab, Card, CardBody, Input, Select, SelectItem} from "@nextui-org/react";

const ModalRegisterMaoDeObra = (props) => {
  const {isOpen, onOpenChange, size, height, name} = props
  const handleValue = (e) => {

  }
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
            <ModalHeader className="w-full gri-cols-6"> {name.toUpperCase()} </ModalHeader>
            <ModalBody>
            <div className="w-full grid gri-cols-6 items-center">
              <div className="col-span-1">
                <span className="text-sm">Mão de Obra</span>
              </div>
              <Input size="md" type="Text" name="maoDeObra" onChange={(e) => {handleChange(e)}} 
                  labelPlacement="outside" className="col-start-2"/>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' variant="flat" onClick={() => {}} >
                Cancelar
              </Button>
                <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {ReceivePost(name, dataToPost), toClean()}} 
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

export default ModalRegisterMaoDeObra