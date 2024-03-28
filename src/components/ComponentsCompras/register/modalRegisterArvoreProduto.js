import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input, Select, SelectItem} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";

const ModalRegisterArvoreProduto = (props) => {
  const {isOpen, onOpenChange, size, height, name, ReceivePost, dataModal} = props
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange()
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
            <div className="w-full grid gri-cols-6 gap-2 items-center">
              { name === "linha" || name === "familia" || name === "grupo" ?
                <>
                  <label className="col-span-1 text-sm">
                    {LabelArvore(name)}
                  </label>
                  <Select size="sm" className="col-start-2" aria-labelledby="selectArvore" 
                    labelPlacement="outside" onChange={(e) => {handleChange(e)}} name={LabelArvore(name).toLowerCase()}>
                    {dataModal.map((select) => (
                      <SelectItem key={select.descricao} value={select.descricao}>
                        {select.descricao}
                      </SelectItem>
                    ))}
                  </Select>
                </>
                :
                null
              }  
              <div className="col-span-1">
                <span className="text-sm">Descricão</span>
              </div>
              <Input size="sm" type="Text" name="descricao" onChange={(e) => {handleChange(e)}} 
                  labelPlacement="outside" className="col-start-2"/>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onClick={() => {clearHandle(), onClose()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePost(name, dataHandleChange)}} 
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

export default ModalRegisterArvoreProduto