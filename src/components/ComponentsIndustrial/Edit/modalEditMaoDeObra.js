import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";

const ModalEditMaoDeObra = (props) => {
  const {isOpen, ReceivePut, onOpenChange, size, height, name, valueEdit} = props
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange(valueEdit)

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
            <div className="w-full grid gri-cols-6 gap-2 items-center justify-center">
              <div className="col-span-1">
                <span className="text-sm">Função</span>
              </div>
              <Input size="sm" type="Text" name="funcao" value={dataHandleChange?.funcao || ''} onChange={(e) => {handleChange(e)}} 
                labelPlacement="outside" className="col-start-2"/>
              <div className="col-span-1">
                <span className="text-sm">Sálario</span>
              </div>
              <Input size="sm" autoComplete="off" value={dataHandleChange?.salario || ''} type="text" name="salario" onChange={(e) => {handleChange(e)}} 
                labelPlacement="outside" placeholder="R$" className="col-start-2"/>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onClick={() => {clearHandle(), onClose()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePut("cadastro-de-funcao", dataHandleChange)}} 
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

export default ModalEditMaoDeObra