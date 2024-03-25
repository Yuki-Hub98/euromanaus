import React , {useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, 
ModalBody,ModalFooter, Input, Textarea } from "@nextui-org/react";
import TableRender from "../../ui/Table/tableRender";
import { GetNcm } from "@/app/actions/produto";
import RegexToSave from "@/functions/regexToSave";

const RerenciaFiscal = (props) =>{
    const { isOpen, 
    onOpenChange,
    handleValue,
    dataFiscal,
    SetData
    } = props
    
    const [cstIms, setCstIms] = useState();
    const [dataRequest, setDataRequest] = useState();

    const RequestCstIms = async (request) => {
      const dataCsticms = await GetNcm(request)
      setCstIms(dataCsticms)
    }

    const ValueTable = (value) => {
      SetData(data => ({
        ...data,
        ["ncmCodigo"]: value.codigo,
        ["ncmDescricao"]: value.descricao
      }))
    }
  
    return(
        <>
        <Modal 
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            size={props?.size}
            className={props?.h}
            classNames={{
            body: "py-6",
            backdrop: "bg-[#D4D4D8]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#D4D4D8] dark:bg-[#19172c] text-[#2c2c2b]",
            header: "border-[#292f46]",
            footer: "border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
            >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="grid grid-cols-4"> Referencia </ModalHeader>
                  <ModalBody>
                    <div className="grid grid-cols-4 items-center gap-y-2">
                      <span className='text-xs'>Código</span>
                      <div className="w-full col-span-3">
                        <Input autoComplete="off" value={dataFiscal?.ncmCodigo  || ''}  className="w-3/5" size="sm" labelPlacement="outside" name="ncmCodigo" 
                          onChange={(e) => {handleValue(e), setDataRequest(e.target.value)}}/>
                      </div>
                      <span className='text-xs'>Descricao</span>
                      <div className="col-start-2 col-span-3">
                        <Textarea  minRows={2.3} value={dataFiscal?.ncmDescricao || ''} className="w-3/5" name="ncmDescricao" labelPlacement="outside" 
                        onChange={(e) => {handleValue(e), setDataRequest(RegexToSave(e.target.value))}} />
                      </div>
                      <div className="col-start-3 w-10/12 pl-16">
                        <Button size="sm" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => RequestCstIms(dataRequest)}>
                          Pesquisar
                        </Button>
                      </div>
                      <div className='w-full max-h-32 col-span-4 overflow-y-auto overflow-x-auto rounded bg-[#EDEDED]'>
                        <TableRender name={"cep"} data={cstIms} ValueTable={ValueTable}  />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button className='bg-sky-50' size="sm" variant="flat" onClick={() => {setDataRequest(null), setCstIms(null)}} onPress={onClose} >
                      Cancelar
                    </Button>
                    <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {setDataRequest(null), setCstIms(null)}} 
                        onPress={onClose} >
                      Concluir
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
        </Modal>
        </>
    )
}

export default RerenciaFiscal