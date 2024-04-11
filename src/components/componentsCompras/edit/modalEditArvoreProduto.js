import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";

const ModalEditArvoreProduto= (props) => {
  const {isOpen, ReceivePut, onOpenChange, size, height, name, valueEdit, ValueTable} = props
  const {dataHandleChange, handleChange} = useHandleChange(valueEdit)
  const LabelArvore = (name) => {
		switch (name) {
			case "linha":
				return "Departamento"
			case "familia":
				return "Linha"
			case "grupo":
				return "Familia"
			default:
				break;
		}
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
            <div className="w-full grid gri-cols-6 gap-2 items-center justify-center">
              { name === "linha" || name === "familia" || name === "grupo" ?
                <>
                  <div className="col-span-1">
                    <span className="text-sm">{LabelArvore(name)}</span>
                  </div>
                  <div className="col-start-2">
                    <h1 className="font-bold">{dataHandleChange[LabelArvore(name).toLowerCase()]}</h1>
                  </div>
                </>
                :
                null
              }
              <div className="col-span-1">
                <span className="text-sm">Descricão</span>
              </div>
              <Input size="sm" type="Text" name="descricao" value={dataHandleChange?.descricao || ''} onChange={(e) => {handleChange(e)}} 
                labelPlacement="outside" className="col-start-2"/>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle(), ValueTable(null)}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePut(name, dataHandleChange), ValueTable(null)}} 
                onPress={onClose} >
                Editar
              </Button>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )

}

export default ModalEditArvoreProduto