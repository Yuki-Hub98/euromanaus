import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, useDisclosure, SelectItem, Select} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UpdateFichaTecnica } from "@/app/actions/ficha-tecnica";
import TableMarkings from "@/components/ui/table/tableMarkings";
import usePutData from "@/hooks/services/usePutData";
import FormatURL from "@/functions/formatURL";
import { LuSearch } from "react-icons/lu";
import ModalSearchItem from "../../search/FichaTecnica/modalSearchItemFichaTecnica";
import ModalRegisterEtapa from "../../register/fichaTecnica/modalRegisterEtapa.js";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import { SearchModelo } from "@/app/actions/modelo";
import useValueTable from "@/hooks/ui/useValueTable";
import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates";

const ModalEditFichaTecnica = (props) => {
  const {onOpenChangeEditFichaTecnica, isOpenEditFichaTecnica, size, height, name, modalFichaTecnica, valueEdit, modalItemEtapaRecurso } = props
  const [option, setOption] = useState();
  const [dataModalSearchItem, setDataModalSearchItem] = useState({
    departamento:[],
    linha:[],
    modelos:[]
  });
  const [dataEdited, setDataEdited] = useState()
  const [dataRenderEdited, setDataRenderEdited] = useState();
  const [data, setData] = useState({etapas:[]})
  const [codigoEtapa, setCodigoEtapa] = useState(0)
  const openModalEtapa = useDisclosure();
  const openModalSearchItem = useDisclosure();
  const { statusEdit, warningEdit, ReceivePut } = usePutData(UpdateFichaTecnica)
  const [dataRender, setDataRender] = useState({etapas:[]})
  const {valueTable, getValueTable, clearValue, clear} = useValueTable()
  
  const RequestModalSearchItem = async () =>{
    const dataDepartamento = await GetArvoreProduto("departamento")
    const modelo = await SearchModelo("modelos")
    setDataModalSearchItem(data=> ({
      ...data,
      ["departamento"]: [dataDepartamento],
      ["modelos"]: [modelo]
    })) 
  }

  const editedData = (value) => {
    const dataEdited = {...data}
    const filter = dataEdited.etapas.filter(etapa => etapa.codigo === value?.codigo)
    const newArrayEdited = filter.map((array) => {
      let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
      newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
      return newArray
    })
    setDataEdited(filter)
    setDataRenderEdited(prev => ({
      ...prev,
      ["etapas"]: newArrayEdited[0]
    }))
  }

  const setNameFichaTecnica = (value) => {
    if (value?.codigo) {
      setData(prev => ({
        ...prev,
        ["fichaTecnica"] : value?.descricaoItem
      }))
    }else{
      setData(prev => ({
        ...prev,
        ["fichaTecnica"] : value
      }))
    }
  }

  const clearItem = (value) => {
    const newData = {...data}
    const filter = newData.etapas.filter(etapa => etapa.codigo !== value.codigo)
    const newArraysRender = filter.map((array) => {
      let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
      newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
      return newArray
    })

    newData.etapas = filter
    setData(prev => ({
      ...prev,
      ["etapas"]: newData.etapas
    }))

    setCodigoEtapa(newData.etapas.length)

    setDataRender(prev => ({
      ...prev,
      ["etapas"]: newArraysRender.reduce((acc, curr) => acc.concat(curr), [])
    }))
  }

  const formatDataRender = (data) => {
    const newArraysRender = data.map((array) => {
      let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
      newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
      return newArray
    })
    setDataRender(prev => ({
      ...prev,
      ["etapas"]: newArraysRender.reduce((acc, curr) => acc.concat(curr), [])
    }))
  }


  const dataConfirmed = (value) => {
    const newEtapa = {...data}
    let _etapas = [...newEtapa.etapas]
    _etapas.unshift(value)
    newEtapa.etapas = _etapas
    const filter = RemoveDuplicatesCodigo(newEtapa.etapas)
    setCodigoEtapa(filter.length)
    setData(prev => ({
      ...prev,
      ["etapas"]: filter
    }))

    formatDataRender(filter)
  }

  const formatData = (data) => {
    const dataEdit = {...data}
    delete dataEdit["dataCriacao"]
    delete dataEdit["dataModificacao"]
    delete dataEdit["id"]

    setData(dataEdit)
    const newArraysRender = dataEdit.etapas.map((array) => {
      let newArray = array.etapaDeProducaoRecursos.concat(array.etapaDeProducaoItems)
      newArray.unshift({codigo:array.codigo, etapaDeProducao: array.etapaDeProducao})
      return newArray
    })

    setDataRender(prev => ({
      ...prev,
      ["etapas"]: newArraysRender.reduce((acc, curr) => acc.concat(curr), [])
    }))
  }

  const clearData = () => {
    setData({etapas:[]});
    setDataRender({etapas:[]});
    setDataEdited({etapas:[]})
    setDataRenderEdited({etapas:[]})
    setCodigoEtapa(0)
  }

  useEffect(() => {
    if (isOpenEditFichaTecnica) {
      formatData(valueEdit)
      setCodigoEtapa(valueEdit?.etapas?.length)
    }
  }, [isOpenEditFichaTecnica])
  
  return(
    <>
      {warningEdit} {statusEdit}
      <Modal 
        isOpen={isOpenEditFichaTecnica}
        onOpenChange={onOpenChangeEditFichaTecnica}
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
            <ModalBody className="w-full">
              <form className="w-5/6 h-1/5 grid gri-cols-4 gap-2 items-center">
                <label className="col-span-1 text-sm">Ficha Técnica</label>
                <Select size="sm" name="fichaTecnica" labelPlacement="outside-left" selectedKeys={[data?.fichaTecnica]} placeholder={`${data?.fichaTecnica ? data?.fichaTecnica : ''}`} aria-label="fichaTecnica">
                  {modalFichaTecnica?.map((item) => (
                    <SelectItem onClick={() => setNameFichaTecnica(item.descricaoItem)} key={item.descricaoItem} value={item.descricaoItem}>{item.descricaoItem}</SelectItem>
                  ))}
                </Select>
                <LuSearch size={22} className="col-start-3 cursor-pointer hover:text-[#edca62b4]" onClick={() => {RequestModalSearchItem(), openModalSearchItem.onOpen()}} />
                <div className="col-start-2 justify-self-center" aria-labelledby="adicionar">
                  <Button size="sm" name="adicionarEtapa" className="bg-[#edca62b4] w-28 shadow-lg shadow-indigo-500/20 mr-1" 
                    type="button" onClick={()=> {openModalEtapa.onOpen(), setOption("Etapa de Produção"), editedData(valueTable), clearValue(true)}} >
                    Adicionar Etapa
                  </Button>
                  <Button size="sm" name="adicionarEtapa" className="bg-[#edca62b4] w-28 shadow-lg shadow-indigo-500/20 mr-1" 
                    type="button" onClick={()=> {openModalEtapa.onOpen(), setOption("Etapa de Produção"), editedData(valueTable), clearValue(true)}} >
                    Editar Etapa
                  </Button>
                </div>
              </form>
              <div className="col-span-6 h-72 overflow-y-auto overflow-x-auto rounded">
                <TableMarkings data={dataRender.etapas} getValueTable={getValueTable} clearItem={clearItem} clear={clear} clearValue={clearValue} option={"mark"}/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => { clearData() }} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePut(FormatURL(name), data), clearData()}} 
                onPress={onClose} >
                Editar
              </Button>
            </ModalFooter>
            <ModalRegisterEtapa size={"5xl"} height={"h-5/6"} onOpenChangeRegister={openModalEtapa.onOpenChange} isOpenRegister={openModalEtapa.isOpen} name={option} 
              modalItemEtapaRecurso={modalItemEtapaRecurso} dataConfirmed={dataConfirmed} dataEdited={dataEdited} codigoEtapa={codigoEtapa} 
              dataRenderEdited={dataRenderEdited} />
            <ModalSearchItem isOpenSearch={openModalSearchItem.isOpen} dataModal={dataModalSearchItem} onOpenChangeSearch={openModalSearchItem.onOpenChange} name={"Search Item"} size={"5xl"} height={"h-5/6"} setNameFichaTecnica={setNameFichaTecnica} />
            </>
          )}
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default ModalEditFichaTecnica