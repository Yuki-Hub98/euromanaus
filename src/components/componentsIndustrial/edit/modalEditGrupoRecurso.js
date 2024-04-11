import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input, Select, SelectItem} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import TableRender from "@/components/ui/table/tableRender";
import { useEffect, useState } from "react";
import FormatURL from "@/functions/formatURL";
import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates";
import useValueTable from "@/hooks/ui/useValueTable";


const ModalEditGrupoRecurso = (props) => {
  const {isOpen, onOpenChange, size, height, name, ReceivePut, DataCadastroDeRecurso, dataEdit} = props
  const [data, setData] = useState(dataEdit)
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange()
  const {valueTable, getValueTable} = useValueTable();

  const AddRecurso = (recurso) => {
    const newData = {...data}
    const dados = DataCadastroDeRecurso.filter((item) => item?.recurso === recurso?.recurso);
    newData?.recursos?.push(dados[0])
    setData(prev => ({
      ...prev,
      ["recursos"]: RemoveDuplicatesCodigo(newData.recursos)
      })
    );
  }

  const RemoveRecurso = (recurso) => {
    const newData = {...data}
    const dados = newData.recursos.filter((item) => item?.recurso !== recurso?.recurso);
    setData(prev => ({
      ...prev,
      ["recursos"]: RemoveDuplicatesCodigo(dados)
      })
    );
  }

  const clearData = () => {
    setData(dataEdit);
  }

  useEffect(() => {
    setData(dataEdit)
  },[dataEdit])

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
            <ModalHeader className="flex flex-col gap-1 bg-[#edca62b4]"> EDITAR {name.toUpperCase()} </ModalHeader>
            <ModalBody>
              <form className="w-9/12 h-full grid gri-cols-2 gap-2 items-center">
                <div className="col-span-1">
                  <span className="text-sm">Grupo de Recurso</span>
                </div>
                <Input size="sm" type="Text" name="grupoRecurso" value={data?.grupoRecurso || ''} onChange={(e) => {handleChange(e)}} 
                  labelPlacement="outside" className="col-start-2"/>
                <span className="text-sm">Recurso</span>
                  {<Select className="w-full col-start-2" aria-label="recurso" size="sm" onChange={(e) => {handleChange(e)}} name="recurso" labelPlacement="outside">
                  {DataCadastroDeRecurso?.map((recurso) => (
                    <SelectItem key={recurso.recurso} value={recurso.recurso}>{recurso.recurso}</SelectItem>
                  ))}
                  </Select>}
                <div className="col-start-2 justify-self-end" aria-labelledby="adicionar">
                  <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20 mr-2" type="button" onClick={()=> {RemoveRecurso(valueTable)}}>
                    Remover
                  </Button>
                  <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" type="button" onClick={()=> {AddRecurso(dataHandleChange)}}>
                    Adicionar
                  </Button>
                </div>
              </form>
              <div className="col-span-6 h-40 overflow-y-auto overflow-x-auto rounded">
                {dataEdit && <TableRender data={data?.recursos} name={name} ValueTable={getValueTable} style={"table-auto whitespace-nowrap"}  />}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle(), clearData()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePut(FormatURL(name), data), clearData()}} 
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

export default ModalEditGrupoRecurso