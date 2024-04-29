import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input, Select, SelectItem} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import ToCamelCase from "@/functions/toCamelCase";

const ModalRegisterRecursoItem = (props) => {
  const { isOpenRegister, onOpenChangeRegister, nameRecursoItem, size, height, modalItemEtapaRecurso, formatData } = props
  const { dataHandleChange, handleChange, clearHandle } = useHandleChange();

  return(
    <>
      <Modal 
        isOpen={isOpenRegister}
        onOpenChange={onOpenChangeRegister}
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
            <ModalHeader className="w-full gri-cols-6"> {nameRecursoItem.toUpperCase()} </ModalHeader>
            <ModalBody>
              <div className="w-full h-full grid grid-cols-6 gap-2 items-center">
                <label className="col-span-2 text-sm justify-self-center">
                  {nameRecursoItem}
                </label>
                <Select size="sm" className="col-span-4" aria-labelledby="registerFichaTecnica" 
                  labelPlacement="outside" onChange={(e) => {handleChange(e)}} name={ToCamelCase(nameRecursoItem)}>
                  {modalItemEtapaRecurso[ToCamelCase(nameRecursoItem)]?.map((select) => (
                    <SelectItem key={select.grupoRecurso || select.descricaoItem}
                      value={select.grupoRecurso || select.descricaoItem}>
                      {select.grupoRecurso || select.descricaoItem}
                    </SelectItem>
                  ))}
                </Select>
                <label className="col-span-2 text-sm justify-self-center">
                    Quantidade
                  </label>
                  <Input size="sm" type="Text" name="quantidade" onChange={(e) => {handleChange(e)}} 
                    labelPlacement="outside" className="col-span-2"/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle()}}>
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {formatData(dataHandleChange, ToCamelCase(nameRecursoItem)), clearHandle()}}
                onPress={onClose} >
                Adicionar
              </Button>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRegisterRecursoItem
