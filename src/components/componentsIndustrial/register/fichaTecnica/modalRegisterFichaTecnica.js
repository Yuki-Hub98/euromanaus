import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, useDisclosure, SelectItem, Select} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import { useState } from "react";
import { RegisterFichaTecnica } from "@/app/actions/ficha-tecnica";
import ModalRegisterEtapaRecursoItem from "./modalRegisterRecursoItem";
import TableMarkings from "@/components/ui/table/tableMarkings";
import { RemoveDuplicatesCodigo } from "@/functions/removeDuplicates";
import usePostData from "@/hooks/services/usePostData";
import FormatURL from "@/functions/formatURL";
import { LuSearch } from "react-icons/lu";
import ModalSearchItem from "../../search/FichaTecnica/modalSearchItemFichaTecnica";

const ModalRegisterFichaTecnica = (props) => {
  const { isOpenRegisterFichaTecnica, onOpenChangeRegisterFichaTecnica, size, height, name, modalFichaTecnica } = props
  const [option, setOption] = useState("etapa-de-producao");
  const [data, setData] = useState({etapas:[]})
  const [etapas, setEtapas] = useState({
    codigo:null,
    etapaDeProducao:'',
    etapaDeProducaoRecursos:[],
    etapaDeProducaoItems:[]})
  const [dataRender, setDataRender] = useState({etapas:[]});
  const openModalEtapaRecursoItem = useDisclosure();
  const openModalSearchItem = useDisclosure();
  const { dataHandleChange, handleChange, clearHandle } = useHandleChange()
  const { statusPost, warningPost, ReceivePost } = usePostData(RegisterFichaTecnica)

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

  const formatDataRender = async (etapa) => {
    const newData = {...dataRender}
    newData.etapas.push(etapa)
    setDataRender(prev => ({
        ...prev,
        ["etapas"]: newData.etapas
    }))
  }

  const formatData = async (etapa, chave) => {
    await formatDataRender(etapa)
    const newEtapa = {...etapas}
    const newData = {...data}

    if (newData.etapaDeProducao !== null && etapa.etapaDeProducao) {
      setEtapas({
        codigo:null,
        etapaDeProducao:'',
        etapaDeProducaoRecursos:[],
        etapaDeProducaoItems:[]
      })
    }

    if (chave === "etapaDeProducao"){
      setEtapas(prev => ({
        ...prev,
        ["codigo"]: etapa.codigo,
        ["etapaDeProducao"]: etapa.etapaDeProducao
      }))
    }else if (chave === "grupoRecurso") {
      newEtapa.etapaDeProducaoRecursos.push(etapa)
      setEtapas(newEtapa)
    }else if (chave === "descricaoItem") {
      newEtapa.etapaDeProducaoItems.push(etapa)
      setEtapas(newEtapa)
    }

    if (etapas.codigo !== null && etapas.etapaDeProducao !== null) {
      if (newData.etapas.length < 1) {
        newData.etapas.push(etapas)
        setData(newData)
      }

      newData.etapas.push(etapas)
      setData(prev => ({
        ...prev,
        ["etapas"]: RemoveDuplicatesCodigo(newData.etapas)
      }))
    }
  }

  const openModal = (value) => {
    setOption(value)
    openModalEtapaRecursoItem.onOpen()
  }

  const clearData = () => {
    setData({etapas:[]});
    setEtapas({
      codigo:null,
      etapaDeProducao:'',
      etapaDeProducaoRecursos:[],
      etapaDeProducaoItems:[]
    });
    setDataRender({etapas:[]});
  }

  return(
    <>
      {warningPost} {statusPost}
      <Modal 
        isOpen={isOpenRegisterFichaTecnica}
        onOpenChange={onOpenChangeRegisterFichaTecnica}
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
            <ModalHeader className="flex flex-col gap-1 bg-[#edca62b4]"> CADASTRAR {name.toUpperCase()} </ModalHeader>
            <ModalBody className="w-full">
              <form className="w-5/6 h-1/5 grid gri-cols-4 gap-2 items-center">
                <label className="col-span-1 text-sm">Ficha Técnica</label>
                <Select size="sm" name="fichaTecnica" labelPlacement="outside-left" selectedKeys={[data?.fichaTecnica]} placeholder={`${data?.fichaTecnica ? data?.fichaTecnica : ''}`} aria-label="fichaTecnica">
                  {modalFichaTecnica?.map((item) => (
                    <SelectItem onClick={() => setNameFichaTecnica(item.descricaoItem)} key={item.descricaoItem} value={item.descricaoItem}>{item.descricaoItem}</SelectItem>
                  ))}
                </Select>
                <LuSearch size={22} className="col-start-3 cursor-pointer hover:text-[#edca62b4]" onClick={() => openModalSearchItem.onOpen()} />
                <div className="col-start-2 justify-self-center" aria-labelledby="adicionar">
                  <Button size="sm" name="adicionarEtapa" className="bg-[#edca62b4] w-28 shadow-lg shadow-indigo-500/20 mr-1" 
                    type="button" onClick={()=> openModal("Etapa de Produção")} >
                    Adicionar Etapa
                  </Button>
                  <Button size="sm" name="adicionarRecurso" className="bg-[#edca62b4] w-28 shadow-lg shadow-indigo-500/20 mr-1"
                    type="button" onClick={()=> openModal("Grupo Recurso")} >
                    Adicionar Recurso
                  </Button>
                  <Button size="sm" name="adicionarItem" className="bg-[#edca62b4] w-28 shadow-lg shadow-indigo-500/20"
                    type="button" onClick={()=> openModal("Descricao Item")} >
                    Adicionar Item
                  </Button>
                </div>
              </form>
              <div className="col-span-6 h-3/5 overflow-y-auto overflow-x-auto rounded">
                <TableMarkings data={dataRender.etapas} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle(), clearData()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePost(data, FormatURL(name), clearData())}} 
                onPress={onClose} >
                Cadastrar
              </Button>
              <ModalRegisterEtapaRecursoItem  onOpenChangeRegister={openModalEtapaRecursoItem.onOpenChange} isOpenRegister={openModalEtapaRecursoItem.isOpen} name={option} 
                formatData={formatData} />
              <ModalSearchItem isOpenSearch={openModalSearchItem.isOpen} onOpenChangeSearch={openModalSearchItem.onOpenChange} name={"Search Item"} size={"5xl"} height={"h-5/6"} setNameFichaTecnica={setNameFichaTecnica} />
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default ModalRegisterFichaTecnica