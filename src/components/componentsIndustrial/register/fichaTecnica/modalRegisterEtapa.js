import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Select, SelectItem,
  useDisclosure} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import ToCamelCase from "@/functions/toCamelCase";
import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ModalRegisterRecursoItem from "./modalRegisterRecursoItem";
import TableMarkings from "@/components/ui/table/tableMarkings";

const ModalRegisterEtapa = (props) => {
  const { isOpenRegister, onOpenChangeRegister, name, size, height, modalItemEtapaRecurso, 
    dataConfirmed, codigoEtapa, dataEdited, dataRenderEdited } = props
  const [option, setOption] = useState("Grupo Recurso");
  const [etapas, setEtapas] = useState({
    codigo:null,
    etapaDeProducao:'',
    etapaDeProducaoRecursos:[],
    etapaDeProducaoItems:[]}) 
  const [dataRender, setDataRender] = useState();
  const openModalItemRecurso = useDisclosure();
  const { dataHandleChange, handleChange, clearHandle } = useHandleChange();

  const clearItem = (value) => {
    if (dataEdited.length > 0) {
      if (value.tipo === "RECURSO") {
        const recurso = dataEdited[0].etapaDeProducaoRecursos.filter(recurso => recurso.codigo != value.codigo)
        dataEdited[0] = { ...dataEdited[0], etapaDeProducaoRecursos: recurso };
      }else if (value.tipo === "ITEM") {
        const item = dataEdited[0].etapaDeProducaoItems.filter(item => item.codigo != value.codigo)
        dataEdited[0] = { ...dataEdited[0], etapaDeProducaoItems: item }
      }
  
      const newRender = dataEdited.map((array) => {
        let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
        newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
        return newArray
      })
  
      setEtapas(dataEdited[0])
      setDataRender({
        etapas: newRender[0]
      })
    }else{
      let _etapa = {...etapas}

      if (value.tipo === "RECURSO") {
        const recurso = _etapa.etapaDeProducaoRecursos.filter(recurso => recurso.codigo != value.codigo)
        _etapa.etapaDeProducaoRecursos = recurso
      }else if (value.tipo === "ITEM") {
        const item = _etapa.etapaDeProducaoItems.filter(item => item.codigo != value.codigo)
        _etapa.etapaDeProducaoItems = item
      }

      const newRender = _etapa.etapaDeProducaoRecursos.concat(_etapa.etapaDeProducaoItems)
      newRender.unshift({codigo: _etapa.codigo, etapaDeProducao:_etapa.etapaDeProducao})
    
      setEtapas(_etapa)
      setDataRender({
        etapas: newRender
      })
    }
  }

  const openModal = (value) => {
    setOption(value)
    openModalItemRecurso.onOpen()
  }

  const formatDataRender = (etapa) => {
    const newData = {...dataRender}
    if (newData.etapas === undefined) {
      let _newData = []
      _newData.push(etapa)
      setDataRender(prev => ({
        ...prev,
        ["etapas"]: _newData
      }))
    }else{
      newData.etapas.push(etapa)
      setDataRender(prev => ({
        ...prev,
        ["etapas"]: newData.etapas
      }))
    }
  }

  const dataPreparing = (value) => {

    if (dataEdited.length > 0) {
      let _newEtapa = {...dataEdited[0]}

      if (etapas.codigo) {
        let newEtapas = {...etapas}
        if (value.grupoRecurso) {
          let _etapaDeProducaoRecursos = [...newEtapas.etapaDeProducaoRecursos]
          value.codigo = newEtapas.etapaDeProducaoRecursos.length + 1
          _etapaDeProducaoRecursos.push(value)
          newEtapas.etapaDeProducaoRecursos = _etapaDeProducaoRecursos
  
        }
  
        if (value.descricaoItem) {
          let _etapaDeProducaoItem = [...newEtapas.etapaDeProducaoItems]
            value.codigo = newEtapas.etapaDeProducaoItems.length + 1
            _etapaDeProducaoItem.push(value)
            newEtapas.etapaDeProducaoItems = _etapaDeProducaoItem
        
          }

        setEtapas(prev => ({
          ...prev,
          ["codigo"]: newEtapas.codigo,
          ["etapaDeProducao"]: newEtapas.etapaDeProducao,
          ["etapaDeProducaoRecursos"]: newEtapas.etapaDeProducaoRecursos,
          ["etapaDeProducaoItems"]: newEtapas.etapaDeProducaoItems
        }))

      }else{
        if (value.grupoRecurso) {
          let _etapaDeProducaoRecursos = [..._newEtapa.etapaDeProducaoRecursos]
          value.codigo = _newEtapa.etapaDeProducaoRecursos.length + 1
          _etapaDeProducaoRecursos.push(value)
          _newEtapa.etapaDeProducaoRecursos = _etapaDeProducaoRecursos
  
        }
  
        if (value.descricaoItem) {
          let _etapaDeProducaoItem = [..._newEtapa.etapaDeProducaoItems]
            value.codigo = _newEtapa.etapaDeProducaoItems.length + 1
            _etapaDeProducaoItem.push(value)
            _newEtapa.etapaDeProducaoItems = _etapaDeProducaoItem
        
          }
        
        setEtapas(prev => ({
          ...prev,
          ["codigo"]: _newEtapa.codigo,
          ["etapaDeProducao"]: _newEtapa.etapaDeProducao,
          ["etapaDeProducaoRecursos"]: _newEtapa.etapaDeProducaoRecursos,
          ["etapaDeProducaoItems"]: _newEtapa.etapaDeProducaoItems
        }))
      }

    }else{
      const newEtapa = {...etapas}

      if (value.etapaDeProducao) newEtapa.codigo = value.codigo, newEtapa.etapaDeProducao = value.etapaDeProducao

      if (value.grupoRecurso) value.codigo = newEtapa.etapaDeProducaoRecursos.length + 1, newEtapa.etapaDeProducaoRecursos.push(value)
  
      if (value.descricaoItem) value.codigo = newEtapa.etapaDeProducaoItems.length + 1, newEtapa.etapaDeProducaoItems.push(value)

      setEtapas(newEtapa)
    }

  }

  const formatData = async (etapa, chave) => {
    const value = modalItemEtapaRecurso[chave].filter((element) =>  element[chave] === etapa[chave])
    if(etapa.quantidade) {
      const newFormat = {...value[0], quantidade: parseInt(etapa.quantidade)}
      let newValue = {}
      if (chave === "grupoRecurso") {
        newValue = {...newFormat, tipo: "RECURSO", valorTotalRecurso: parseFloat(newFormat.quantidade * newFormat.valorTotalUnitario).toFixed(2)}
      }else{
        newValue = {...newFormat, tipo: "ITEM", valorTotalItem: parseFloat(newFormat.quantidade * newFormat.valorItem).toFixed(2)}
      }
      formatDataRender(newValue)
      dataPreparing(newValue)
    }else{
      value[0].codigo = codigoEtapa + 1
      formatDataRender(value[0])
      dataPreparing(value[0])
    }
  }

  const clearData = () => {
    clearHandle()
    setEtapas({
      codigo:null,
      etapaDeProducao:'',
      etapaDeProducaoRecursos:[],
      etapaDeProducaoItems:[]})
    setDataRender({etapas:[]})
  }

  useEffect(() => {
    setDataRender(dataRenderEdited)
  },[dataRenderEdited])

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
            <ModalBody className="w-full">
              <div className="w-full h-1/5 grid grid-cols-6">
                <div className="col-start-2 col-span-4 flex flex-row items-center gap-2">
                  <label className="text-sm">
                    {name}
                  </label>
                  <Select size="sm" className="w-96" aria-labelledby="etapaDeProducao" 
                    labelPlacement="outside" onChange={(e) => {handleChange(e)}} name={ToCamelCase(name)}>
                    {modalItemEtapaRecurso[ToCamelCase(name)]?.map((select) => (
                      <SelectItem key={select.etapaDeProducao}
                        value={select.etapaDeProducao}>
                        {select.etapaDeProducao}
                      </SelectItem>
                    ))}
                  </Select>
                  <IoMdAddCircleOutline size={22} className="col-start-3 cursor-pointer hover:text-[#edca62b4]" onClick={() => formatData(dataHandleChange, ToCamelCase(name))}/>
                </div>
                <div className="col-start-2 col-span-4 justify-center mb-10 flex flex-row items-center">
                  <Button size="sm" name="adicionarRecurso" className="bg-[#edca62b4] col-start-1 w-28 shadow-lg shadow-indigo-500/20 mr-1"
                    type="button" onClick={()=> openModal("Grupo Recurso")} >
                    Adicionar Recurso
                  </Button>
                  <Button size="sm" name="adicionarItem" className="bg-[#edca62b4] col-start-2 w-28 shadow-lg shadow-indigo-500/20"
                    type="button" onClick={()=> openModal("Descricao Item")} >
                    Adicionar Item
                  </Button>
                </div>
              </div>
              <div className="col-span-6 h-72 overflow-y-auto overflow-x-auto rounded">
                <TableMarkings data={dataRender?.etapas ? dataRender?.etapas : []} option={"register"} clearItem={clearItem}/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearData()}}>
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {dataConfirmed(etapas), clearData()}}
                onPress={onClose} >
                Confirmar
              </Button>
            </ModalFooter>
            <ModalRegisterRecursoItem  onOpenChangeRegister={openModalItemRecurso.onOpenChange} isOpenRegister={openModalItemRecurso.isOpen} nameRecursoItem={option} 
            modalItemEtapaRecurso={modalItemEtapaRecurso} formatData={formatData}/>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRegisterEtapa
