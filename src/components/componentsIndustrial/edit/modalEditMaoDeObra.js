import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input, Select, SelectItem} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import { tipoRecurso, unidadeCalculo } from "@/DB/data";

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
            <ModalHeader className="w-full gri-cols-6 bg-[#edca62b4]"> EDITAR CADASTRO DE RECURSO </ModalHeader>
            <ModalBody>
            <div className="w-full grid gri-cols-6 gap-2 items-center justify-center">
              <div className="col-span-1">
                <span className="text-sm">Tipo</span>
              </div>
              <Select className="w-full" aria-label="tipoRecurso" placeholder={`${dataHandleChange?.tipoRecurso}`} size="sm" onChange={(e) => {handleChange(e)}}  
              name="tipoRecurso" labelPlacement="outside">
                {tipoRecurso.map((tipo) => (
                  <SelectItem key={tipo.tipo} value={tipo.tipo}>{tipo.tipo}</SelectItem>
                ))}
              </Select>
              <div className="col-span-1">
                <span className="text-sm">Unidade medida</span>
              </div>
              <Select className="w-full" aria-label="unidadeMedida" placeholder={`${dataHandleChange?.unidadeMedida}`} size="sm" onChange={(e) => {handleChange(e)}}  
              name="unidadeMedida" labelPlacement="outside">
                {unidadeCalculo.map((unidade) => (
                  <SelectItem key={unidade.unidade} value={unidade.unidade}>{unidade.unidade}</SelectItem>
                ))}
              </Select>
              <div className="col-span-1">
                <span className="text-sm">Recurso</span>
              </div>
              <Input size="sm" type="Text" name="recurso" value={dataHandleChange?.recurso || ''} onChange={(e) => {handleChange(e)}} 
                labelPlacement="outside" className="col-start-2"/>
              <div className="col-span-1">
                <span className="text-sm">Valor</span>
              </div>
              <Input size="sm" autoComplete="off" value={dataHandleChange?.valor || ''} type="text" name="valor" onChange={(e) => {handleChange(e)}} 
                labelPlacement="outside" placeholder="R$" className="col-start-2"/>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePut("cadastro-de-recurso", dataHandleChange)}} 
                onPress={onClose} >
                Confirmar
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