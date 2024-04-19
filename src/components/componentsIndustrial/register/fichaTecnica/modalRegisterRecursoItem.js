import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input, Select, SelectItem} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import ToCamelCase from "@/functions/toCamelCase";
import { GetModalRegister } from "@/app/actions/ficha-tecnica";
import { useEffect, useState } from "react";
import FormatURL from "@/functions/formatURL";

const ModalRegisterEtapaRecursoItem = (props) => {
  const { isOpenRegister, onOpenChangeRegister, name, size, height, formatData } = props
  const [ data, setData ] = useState();
  const [ chave, setChave ] = useState();
  const [ select, setSelect ] = useState();
  const { dataHandleChange, handleChange, clearHandle } = useHandleChange();

  const filterData = (dataSelect, descricao) => {
    const value = select.filter((element) =>  element[descricao] === dataSelect[descricao])
    if(dataSelect.quantidade) {
      const newFormat = {...value[0], quantidade: parseInt(dataSelect.quantidade)}
      let newValue = {}
      if (descricao === "grupoRecurso") {
        newValue = {...newFormat, tipo: "RECURSO", valorTotalRecurso: parseFloat(newFormat.quantidade * newFormat.valorTotalUnitario).toFixed(2)}
      }else{
        newValue = {...newFormat, tipo: "ITEM", valorTotalItem: parseFloat(newFormat.quantidade * newFormat.valorItem).toFixed(2)}
      }
      setData(newValue)
    }else{
      setData(value[0])
    }
    setChave(descricao)
  }

  const selectItems = async (name) => {
    setSelect(await GetModalRegister(FormatURL(name)))
  }

  useEffect(() => {
    if(data){
      formatData(data, chave)
      setData(null)
      setChave(null)
    }
  },[data])

  useEffect(() => {
    if(isOpenRegister){
      selectItems(name)
    }
  },[name])

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
            <ModalHeader className="w-full gri-cols-6"> {name.toUpperCase()} </ModalHeader>
            <ModalBody>
              <div className="w-full h-full grid grid-cols-6 gap-2 items-center">
                <label className="col-span-2 text-sm justify-self-center">
                  {name}
                </label>
                <Select size="sm" className="col-span-4" aria-labelledby="registerFichaTecnica" 
                  labelPlacement="outside" onChange={(e) => {handleChange(e)}} name={ToCamelCase(name)}>
                  {select?.map((select) => (
                    <SelectItem key={select.grupoRecurso || select.etapaDeProducao || select.descricaoItem}
                      value={select.grupoRecurso || select.etapaDeProducao || select.descricaoItem}>
                      {select.grupoRecurso || select.etapaDeProducao || select.descricaoItem}
                    </SelectItem>
                  ))}
                </Select>
                {name != "Etapa de Produção" ?
                  <>
                  <label className="col-span-2 text-sm justify-self-center">
                    Quantidade
                  </label>
                  <Input size="sm" type="Text" name="quantidade" onChange={(e) => {handleChange(e)}} 
                    labelPlacement="outside" className="col-span-2"/>
                  </>
                    :
                  null
                }
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle()}}>
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {filterData(dataHandleChange, ToCamelCase(name)), clearHandle()}}
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

export default ModalRegisterEtapaRecursoItem
