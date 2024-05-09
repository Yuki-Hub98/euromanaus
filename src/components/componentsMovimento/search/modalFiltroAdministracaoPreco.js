"use client"
import { Modal, Button, ModalContent, ModalBody,
	ModalFooter, Input, Select, SelectItem } from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import useValueTable from "@/hooks/ui/useValueTable";
import useSearchData from "@/hooks/services/useSearchData";
import { GetAdministracaoDePreco } from "@/app/actions/administracao-de-preco";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";
import TableSelect from "@/components/ui/table/tableSelect";
import FormatURL from "@/functions/formatURL";

const ModalFiltroAdministracaoPreco = (props) => {

  const { isOpenFilter, onOpenChangeFilter, name, size, height, dataModal, ValuesAdministracaoDePreco } = props;
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange();
  const {searchData, warningSearchDatat, Search, ClearSearchData} = useSearchData(GetAdministracaoDePreco)
  const {valueTable, getValueTable, clearValue, clear} = useValueTable();
  const {requestArvore, dataArvore} = useSearchArvoreProduto()

  return(
    <>
      {warningSearchDatat}
      <Modal 
        isOpen={isOpenFilter}
        onOpenChange={onOpenChangeFilter}
        placement="top-center"
        size={size}
        className={height}
        classNames={{
        body: "py-6",
        backdrop: "bg-[#D4D4D8]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#D4D4D8] dark:bg-[#19172c] text-[#2c2c2b]",
        header: "border-[#292f46]",
        footer: "bg-[#000000]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
        }}>
        <ModalContent>
          {(onClose) => (
            <>
            <ModalBody className="bg-[#000000]">
              <div className='w-full h-1/5 grid grid-cols-8 rounded shadow-2xl gap-2 pl-1.5 mt-2 pr-1.5 items-center bg-background-component justify-center'>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Codigo</label>
                  <Input 
                    labelPlacement="outside"
                    size="sm"
                    onChange={(e) => handleChange(e)} name="idItem" color="primary"/>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Descrição</label>
                  <Input 
                    labelPlacement="outside"
                    size="sm"
                    onChange={(e) => handleChange(e)} name="descricaoItem" color="primary"/>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Cod. de Barra</label>
                  <Input 
                    labelPlacement="outside"
                    size="sm"
                    onChange={(e) => handleChange(e)} name="codBarra" color="primary"/>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Departamento</label>
                  <Select size="sm" color="primary" name="departamento" onChange={(e) => {handleChange(e), requestArvore(e)}} labelPlacement="outside-left" aria-label="departamento">
                    {dataModal?.departamento[0]?.map((departamento) => (
                      <SelectItem key={departamento.descricao} value={departamento.descricao}>{departamento.descricao}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Linha</label>
                  <Select size="sm" color="primary" name="linha" onChange={(e) => {handleChange(e)}} labelPlacement="outside-left" aria-label="linha">
                    {dataArvore?.linha[0]?.map((linha) => (
                      <SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="col-span-2 flex flex-row items-center gap-2">
                  <label className="text-xs text-[#edca62]">Modelo</label>
                  <Select size="sm" color="primary" name="modelo" onChange={(e) => {handleChange(e)}} labelPlacement="outside-left" aria-label="modelo">
                    {dataModal?.modelos[0]?.map((modelo) => (
                      <SelectItem key={modelo.descricao} value={modelo.descricao}>{modelo.descricao}</SelectItem>
                    ))}
                  </Select>
                </div>
                <Button className="w-20" color="primary" size='sm' type="reset" variant="ghost" onClick={() => {Search(FormatURL(name), dataHandleChange), clearHandle()}}>
                  Pesquisar
                </Button>
              </div>
              <div className="w-full h-5/6 flex flex-col overflow-y-auto rounded">
                <TableSelect data={searchData} name={name} getValueTable={getValueTable} option={"render"} clear={clear} style={"table-auto whitespace-nowrap"}/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-sky-50' size="sm" variant="flat" onPress={onClose} onClick={() => {clearHandle(), ClearSearchData(), clearValue()}} >
                Cancelar
              </Button>
              <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ValuesAdministracaoDePreco(valueTable), ClearSearchData(),  clearValue()}}
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

export default ModalFiltroAdministracaoPreco