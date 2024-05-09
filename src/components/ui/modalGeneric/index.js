import useGetData from "@/hooks/services/useGetData";
import useHandleChange from "@/hooks/ui/useHandleChange";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, 
  Input} from "@nextui-org/react";
import { GetGeneratesFicha } from "@/app/actions/ficha-tecnica";
import FormatURL from "@/functions/formatURL";
import useSearchData from "@/hooks/services/useSearchData";
import { useEffect } from "react";

const ModalGeneric = (props) => {
  const { isOpenGeneric, onOpenGeneric, name, size, height, generateFicha } = props
  const { handleChange, clearHandle, dataHandleChange } = useHandleChange()
  const {searchData, warningSearchDatat, Search, ClearSearchData} = useSearchData(GetGeneratesFicha)
  console.log(searchData)

  return (
    <>
      {warningSearchDatat}
      <Modal 
        size={size} 
        isOpen={isOpenGeneric} 
        onOpenChange={onOpenGeneric}
        placement="top-center"
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
              <ModalHeader className="flex flex-col gap-1">{name.toUpperCase()}</ModalHeader>
              <ModalBody>
                <div className="w-full h-full grid grid-cols-6 gap-2 items-center">
                  <label className="col-span-2 text-sm justify-self-center">
                    Codigo
                  </label>
                  <Input size="sm" type="Text" name="codigo" onChange={(e) => {handleChange(e)}} 
                    labelPlacement="outside" className="col-span-2"/>
                  <Button className="w-20 bg-[#edca62b4] col-start-5" size="sm" onClick={() => {Search(FormatURL("Ficha Tecnica"), dataHandleChange)}} >
                    Gerar
                  </Button>
                  <div className="col-end-6 flex items-center justify-center">
                    {searchData.allItems && <span className="text-xs"> Gerado ! </span>}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button  className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {ClearSearchData()}}>
                  Cancelar
                </Button>
                <Button className="w-20 bg-[#edca62b4]" size="sm"  onPress={onClose} onClick={() => {generateFicha(searchData), ClearSearchData()}}>
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalGeneric