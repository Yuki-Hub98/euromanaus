"use Client";
import {Input, Button, Select, SelectItem} from "@nextui-org/react";
import React , {useState} from "react";
import { unidadeMedida, tipoProduto } from "@/DB/data";
import TableRender from "@/components/ui/table/tableRender";

const ProdutoRegister = (props) => {
  const { dataRenderModal, 
    handleValue, 
    handleValueEdit, 
    dataProduto, 
    AddItem, 
    duplicated, 
    requestArvore, 
    dataArvore, 
    type} = props
    
  const [valueTable, setValueTable] = useState();
  
  const ValueTable = (value) => {
		setValueTable(value)
	}

  const isDisabled = dataProduto?.descricaoProduto &&  dataProduto?.cor && dataProduto?.especificacao && dataProduto?.modelo
  const RenderRegister = (type) => {
    switch (type) {
      case "register":
        return(
            <>
              <div className="w-full h-full grid grid-cols-6 gap-y-2">
                <div className="w-36" aria-labelledby="codProduto">
                  <span id="codProduto" className="text-xs">Cód. Barra</span>
                </div>
                <div className="col-span-5">
                  <Input className="w-2/5" size="sm" isDisabled value={dataProduto?.codBarra || ''}  name="codBarra" labelPlacement="outside"/>
                </div>
                <div className="w-36" aria-labelledby="descricaoProduto">
                  <span id="descricaoProduto" className="text-xs">Descrição Produto</span>
                </div>
                <div className="col-span-5">
                  <Input className="w-full" size="sm" isDisabled name="descricaoProduto" value={dataProduto?.descricaoProduto || ''} labelPlacement="outside"/>
                </div>
                <div className="w-36" aria-labelledby="descricaoItem">
                  <span id="descricaoItem" className="text-xs">Descrição Item</span>
                </div>
                <div className="col-span-5">
                  <Input className="w-full" size="sm" isDisabled name="descricaoItem" value={dataProduto?.descricaoItem || ''} labelPlacement="outside"/>
                </div>
                <div className="w-36" aria-labelledby="departamento">
                  <span id="departamento" className="text-xs">Departamento</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectDepartamento">
                {duplicated?.departamento ?
                  <Input className="w-full" size="sm" isDisabled name="departamento" value={duplicated?.departamento} labelPlacement="outside"/>
                    :
                  <Select className="w-full" size="sm" se aria-label="departamento" onChange={(e) => {handleValue(e), requestArvore(e)}} placeholder={`${dataProduto?.departamento ? dataProduto?.departamento : ''}`} name="departamento" labelPlacement="outside">
                    {dataRenderModal?.departamento[0]?.map((departamento) => (
                      <SelectItem key={departamento?.descricao} value={departamento?.descricao}>{departamento?.descricao}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className="pl-10" aria-labelledby="fornecedor" >
                  <span id="fornecedor" className="text-xs">Fornecedor</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectFornecedor">
                  <Select className="w-full" size="sm"  onChange={(e) => {handleValue(e)}} aria-label="fornecedor" placeholder={`${dataProduto?.fornecedor ? dataProduto?.fornecedor : ''}`} name="fornecedor" labelPlacement="outside">
                    {dataRenderModal?.fornecedor[0]?.map((fornecedor) => (
                      <SelectItem key={fornecedor.nomeFantasia} value={fornecedor.nomeFantasia}>{fornecedor.nomeFantasia}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="w-36" aria-labelledby="linha">
                  <span id="linha"  className="text-xs">Linha</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectLinha">
                {duplicated?.linha ?
                  <Input className="w-full" size="sm" isDisabled name="linha" value={duplicated?.linha} labelPlacement="outside"/>
                    :
                  <Select className="w-full" aria-label="linha" size="sm" onChange={(e) => {handleValue(e), requestArvore(e)}} placeholder={`${dataProduto?.linha ? dataProduto?.linha : ''}`} name="linha" labelPlacement="outside">
                    {dataArvore?.linha[0]?.map((linha) => (
                      <SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className="pl-10" aria-labelledby="modelo">
                  <span id="modelo" className="text-xs">Modelo</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectModel">
                  <Select className="w-full" aria-label="modelo" size="sm" onChange={(e) => {handleValue(e), requestArvore(e)}} placeholder={`${dataProduto?.modelo ? dataProduto?.modelo : ''}`} name="modelo" labelPlacement="outside">
                    {dataRenderModal?.modelos[0]?.map((modelo) => (
                      <SelectItem key={modelo.descricao} value={modelo.descricao}>{modelo.descricao}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="w-36" aria-labelledby="familia">
                  <span id="familia" className="text-xs">Familia</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectFamilia">
                {duplicated?.familia ?
                  <Input className="w-full" size="sm" isDisabled name="familia" value={duplicated?.familia}  labelPlacement="outside"/>
                    :
                  <Select className="w-full" aria-label="familia" size="sm" onChange={(e) => {handleValue(e), requestArvore(e)}} placeholder={`${dataProduto?.familia ? dataProduto?.familia : ''}`}  name="familia" labelPlacement="outside">
                    {dataArvore?.familia[0]?.map((familia) => (
                      <SelectItem key={familia.familia} value={familia.familia}>{familia.familia}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className="pl-10" aria-labelledby="tipoProduto">
                  <span id="tipoProduto" className="text-xs">Tipo Produto</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectTipoProduto">
                {duplicated?.tipoProduto ?
                  <Input className="w-full" size="sm" isDisabled name="tipoProduto" value={duplicated?.tipoProduto} labelPlacement="outside"/>
                    :
                  <Select className="w-full" size="sm" aria-label="tipoProduto" onChange={(e) => {handleValue(e)}} placeholder={`${dataProduto?.tipoProduto ? dataProduto?.tipoProduto : ''}`} name="tipoProduto" labelPlacement="outside">
                    {tipoProduto?.map((tipo) => (
                      <SelectItem key={tipo.status} value={tipo.status}>{tipo.status}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className="w-36" aria-labelledby="grupo">
                  <span id="grupo" className="text-xs">Grupo</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectGrupo">
                {duplicated?.grupo ?
                  <Input className="w-full" size="sm" isDisabled name="grupo" value={duplicated?.grupo} labelPlacement="outside"/>
                    :
                  <Select className="w-full" size="sm" name="grupo" onChange={(e) => {handleValue(e)}} placeholder={`${dataProduto?.grupo ? dataProduto?.grupo : ''}`} aria-label="grupo" labelPlacement="outside">
                    {dataArvore?.grupo[0]?.map((grupo) => (
                      <SelectItem key={grupo.grupo} value={grupo.grupo}>{grupo.grupo}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className="pl-10" aria-labelledby="unidadeMedida">
                  <span id="unidade" className="text-xs">Unidade</span>
                </div>
                <div className="col-span-2" aria-labelledby="selectUnidade">
                {duplicated?.unidadeMedida ?
                  <Input className="w-full" size="sm" isDisabled name="unidadeMedida" value={duplicated?.unidadeMedida} labelPlacement="outside"/>
                    :
                  <Select className="w-full" size="sm" name="unidadeMedida" onChange={(e) => {handleValue(e)}} placeholder={`${dataProduto?.unidadeMedida ? dataProduto?.unidadeMedida : ''}`} aria-label="unidadeMedida" labelPlacement="outside">
                    {unidadeMedida?.map((unidade)=> (
                      <SelectItem key={unidade.medida} value={unidade.medida}>{unidade.medida}</SelectItem>
                    ))}
                  </Select>
                  }
                </div>
                <div className=" col-start-5 col-end-7">
                  {duplicated?
                    null
                    : 
                  <label className="text-xs flex items-center">
                    <input type="checkbox" className="mr-2 accent-[#edca62b4]" name="processado" onChange={(e) => {handleValue(e)}} placeholder="processado"/>
                    Processado
                  </label> }
                </div>
                <div className="h-24 mt-6 pt-4 col-start-2 col-end-6 grid grid-cols-6 rounded-md items-center border shadow">
                  <div className="w-36 pl-2" aria-labelledby="cor">
                    <span id="cor" className="text-xs">Cor</span>
                  </div>
                  <div className="col-span-2 pr-2" aria-labelledby="selectCor">
                  {dataProduto?.descricaoProduto && <Select className="w-full" size="sm" name="cor" onChange={(e) => {handleValue(e)}} aria-label="cor" labelPlacement="outside">
                      {dataRenderModal?.cor[0]?.map((cor) => (
                        <SelectItem key={cor.descricao} value={cor.descricao}>{cor.descricao}</SelectItem>
                      ))}
                    </Select> }
                  </div>
                  <div className="" aria-labelledby="especificacao">
                    <span id="especificacao" className="text-xs">Especificacao</span>
                  </div>
                  <div className="col-span-2 pr-2" aria-labelledby="selectEspecificacao">
                  {dataProduto?.descricaoProduto && <Select className="w-full" size="sm" name="especificacao" onChange={(e) => {handleValue(e)}} aria-label="especificacao" labelPlacement="outside">
                      {dataRenderModal?.especificacao[0]?.map((especificacao) => (
                        <SelectItem key={especificacao.descricao} value={especificacao.descricao}>{especificacao.descricao}</SelectItem>
                      ))}
                    </Select> }
                  </div>
                  {isDisabled ?  
                    <div className="col-end-7 justify-self-end pr-2" aria-labelledby="adicionar">
                      <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {AddItem(dataProduto)}}>
                        Adicionar
                      </Button>
                    </div>
                  : 
                    <div className="col-end-7 justify-self-end pr-2" aria-labelledby="adicionar">
                      <Button size="sm" isDisabled name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {AddItem(dataProduto)}}>
                        Adicionar
                      </Button>
                    </div>
                  }
                  </div>
                  <div className="col-span-6 h-40 overflow-y-auto overflow-x-auto rounded">
                    <TableRender data={dataProduto?.items} name={"produtos"} ValueTable={ValueTable} type={"search"} />
                  </div>
              </div>
            </>
        )
      
      case "edit":
        return(
          <>
            <div className="w-full h-full grid grid-cols-6 gap-y-2">
              <div className="w-36" aria-labelledby="codProduto">
                <span id="codProduto" className="text-xs">Cód. Barra</span>
              </div>
              <div className="col-span-5">
                <Input className="w-2/5" size="sm" isDisabled value={dataProduto?.codBarra || ''}  name="codBarra" labelPlacement="outside"/>
              </div>
              <div className="w-36" aria-labelledby="descricaoProduto">
                <span id="descricaoProduto" className="text-xs">Descrição Produto</span>
              </div>
              <div className="col-span-5">
                <Input className="w-full" size="sm" isDisabled name="descricaoProduto" value={dataProduto?.descricaoProduto || ''} labelPlacement="outside"/>
              </div>
              <div className="w-36" aria-labelledby="descricaoItem">
                <span id="descricaoItem" className="text-xs">Descrição Item</span>
              </div>
              <div className="col-span-5">
                <Input className="w-full" size="sm" isDisabled name="descricaoItem" labelPlacement="outside"/>
              </div>
              <div className="w-36" aria-labelledby="departamento">
                <span id="departamento" className="text-xs">Departamento</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectDepartamento">
                <Select className="w-full" size="sm" se aria-label="departamento" onChange={(e) => {handleValueEdit(e), requestArvore(e)}} placeholder={`${dataProduto?.departamento}`} name="departamento" labelPlacement="outside">
                  {dataRenderModal?.departamento[0]?.map((departamento) => (
                    <SelectItem key={departamento?.descricao} value={departamento?.descricao}>{departamento?.descricao}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="pl-10" aria-labelledby="fornecedor" >
                <span id="fornecedor" className="text-xs">Fornecedor</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectFornecedor">
                <Select className="w-full" size="sm"  onChange={(e) => {handleValueEdit(e)}} placeholder={`${dataProduto?.fornecedor}`} aria-label="fornecedor" name="fornecedor" labelPlacement="outside">
                  {dataRenderModal?.fornecedor[0]?.map((fornecedor) => (
                    <SelectItem key={fornecedor.nomeFantasia} value={fornecedor.nomeFantasia}>{fornecedor.nomeFantasia}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-36" aria-labelledby="linha">
                <span id="linha"  className="text-xs">Linha</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectLinha">
                <Select className="w-full" aria-label="linha" size="sm" onChange={(e) => {handleValueEdit(e), requestArvore(e)}} placeholder={`${dataProduto?.linha}`} name="linha" labelPlacement="outside">
                  {dataArvore?.linha[0]?.map((linha) => (
                    <SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="pl-10" aria-labelledby="modelo">
                <span id="modelo" className="text-xs">Modelo</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectModel">
                <Select className="w-full" aria-label="modelo" size="sm" onChange={(e) => {handleValueEdit(e) }} placeholder={`${dataProduto?.modelo}`} name="modelo" labelPlacement="outside">
                  {dataRenderModal?.modelos[0]?.map((modelo) => (
                      <SelectItem key={modelo.descricao} value={modelo.descricao}>{modelo.descricao}</SelectItem>
                    ))}
                </Select>
              </div>
              <div className="w-36" aria-labelledby="familia">
                <span id="familia" className="text-xs">Familia</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectFamilia">
                <Select className="w-full" aria-label="familia" size="sm" onChange={(e) => {handleValueEdit(e), requestArvore(e)}} placeholder={`${dataProduto?.familia}`} name="familia" labelPlacement="outside">
                  {dataArvore?.familia[0]?.map((familia) => (
                    <SelectItem key={familia.familia} value={familia.familia}>{familia.familia}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="pl-10" aria-labelledby="tipoProduto">
                <span id="tipoProduto" className="text-xs">Tipo Produto</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectTipoProduto">
                <Select className="w-full" size="sm" aria-label="tipoProduto" onChange={(e) => {handleValueEdit(e)}} placeholder={`${dataProduto?.tipoProduto}`} name="tipoProduto" labelPlacement="outside">
                  {tipoProduto?.map((tipo) => (
                    <SelectItem key={tipo.status} value={tipo.status}>{tipo.status}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-36" aria-labelledby="grupo">
                <span id="grupo" className="text-xs">Grupo</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectGrupo">
                <Select className="w-full" size="sm" name="grupo" onChange={(e) => {handleValueEdit(e), requestArvore(e)}} placeholder={`${dataProduto?.grupo}`} aria-label="grupo" labelPlacement="outside">
                  {dataArvore?.grupo[0]?.map((grupo) => (
                    <SelectItem key={grupo.grupo} value={grupo.grupo}>{grupo.grupo}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="pl-10" aria-labelledby="unidadeMedida">
                <span id="unidade" className="text-xs">Unidade</span>
              </div>
              <div className="col-span-2" aria-labelledby="selectUnidade">
                <Select className="w-full" size="sm" name="unidadeMedida" onChange={(e) => {handleValueEdit(e)}} placeholder={`${dataProduto?.unidadeMedida}`} aria-label="unidadeMedida" labelPlacement="outside">
                  {unidadeMedida?.map((unidade)=> (
                    <SelectItem key={unidade.medida} value={unidade.medida}>{unidade.medida}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className=" col-start-5 col-end-7">
                {dataProduto?
                  null
                  : 
                <label className="text-xs flex items-center">
                  <input type="checkbox" className="mr-2 accent-[#edca62b4]" name="processado" onChange={(e) => {handleValueEdit(e)}} placeholder="processado"/>
                  Processado
                </label> }
              </div>
              <div className="h-24 mt-6 pt-4 col-start-2 col-end-6 grid grid-cols-6 rounded-md items-center border shadow">
                <div className="w-36 pl-2" aria-labelledby="cor">
                  <span id="cor" className="text-xs">Cor</span>
                </div>
                <div className="col-span-2 pr-2" aria-labelledby="selectCor">
                  <Select className="w-full" size="sm" name="cor" onChange={(e) => {handleValueEdit(e)}} aria-label="cor"  labelPlacement="outside">
                    {dataRenderModal?.cor[0]?.map((cor) => (
                      <SelectItem key={cor.descricao} value={cor.descricao}>{cor.descricao}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="" aria-labelledby="especificacao">
                  <span id="especificacao" className="text-xs">Especificacao</span>
                </div>
                <div className="col-span-2 pr-2" aria-labelledby="selectEspecificacao">
                  <Select className="w-full" size="sm" name="especificacao" onChange={(e) => {handleValueEdit(e)}} aria-label="especificacao" 
                  labelPlacement="outside">
                    {dataRenderModal?.especificacao[0]?.map((especificacao) => (
                      <SelectItem key={especificacao.descricao} value={especificacao.descricao}>{especificacao.descricao}</SelectItem>
                    ))}
                  </Select>
                </div>
                  <div className="col-end-7 justify-self-end pr-2" aria-labelledby="adicionar">
                    <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {AddItem(dataProduto, valueTable)}}>
                      Editar
                    </Button>
                  </div>
                </div>
                <div className="col-span-6 h-40 overflow-y-auto overflow-x-auto rounded">
                  <TableRender data={dataProduto?.items} buttons={false} name={"produtos"} ValueTable={ValueTable} type={"search"} />
                </div>
            </div>
          </>
        )
    
      default:
        break;
    }
  }

  return(
    <>
      {RenderRegister(type)}
    </>
  )
}

export default ProdutoRegister