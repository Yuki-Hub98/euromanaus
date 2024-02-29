"use Client";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import {Input, Button, Select, SelectItem} from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import { unidadeMedida, tipoProduto } from "@/data/data";

const ProdutoRegister = (props) => {
  const { dataRenderModal, handleValue, dataProduto} = props
  const [dataModal, setDataModal] = useState({
    linha:[],
    familia:[],
    grupo:[],
  });
  
  const RequestDepartamento = async (e) => {
    const {name, value} = e.target
    if (name === "departamento") {
      const linhaData = await GetArvoreProduto("linha", value, "produto")
      setDataModal(data => ({
        ...data,
        ["linha"]:[...data.linha, linhaData]
      }))
    }
  }

  const RequestLinha = async (e) => {
    const {name, value} = e.target
    if (name === "linha") {
      const familiaData = await GetArvoreProduto("familia", value, "produto")
      setDataModal(data => ({
        ...data,
        ["familia"]:[...data.familia, familiaData]
      }))
    }
  }
  const RequestFamilia = async (e) => {
    const {name, value} = e.target
    if (name === "familia") {
      const grupoData = await GetArvoreProduto("grupo", value, "produto")
      setDataModal(data => ({
        ...data,
        ["grupo"]:[...data.grupo, grupoData]
      }))
    }
  }
  
  const size = Object.keys(dataProduto ? dataProduto : 1)
  const isDisabled = size.length === 11 ? true : false

  return(
    <div className="w-full h-full grid grid-cols-6 gap-y-2">
      <div className="w-36" aria-labelledby="codProduto">
        <span id="codProduto" className="text-xs">Cód. Produto</span>
      </div>
      <div className="col-span-2">
        <Input className="w-full" size="sm" name="codProduto" labelPlacement="outside"/>
      </div>
      <div className="pl-10" aria-labelledby="codBarra">
        <span id="codBarra" className="text-xs">Cód. Barra</span>
      </div>
      <div  className="col-span-2" >
        <Input className="w-full" size="sm" onChange={(e) => {handleValue(e)}} name="codBarra" labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="descricaoProduto">
        <span id="descricaoProduto" className="text-xs">Descrição Produto</span>
      </div>
      <div className="col-span-5">
        <Input className="w-full" size="sm" name="descricaoProduto" value={dataProduto?.decricaoProduto || ''} labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="descricaoItem">
        <span id="descricaoItem" className="text-xs">Descrição Item</span>
      </div>
      <div className="col-span-5">
        <Input className="w-full" size="sm" name="descricaoItem" value={dataProduto?.descricaoItem || ''} labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="departamento">
        <span id="departamento" className="text-xs">Departamento</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectDepartamento">
        <Select className="w-full" size="sm" aria-label="departamento" onChange={(e) => {handleValue(e), RequestDepartamento(e)}} name="departamento" labelPlacement="outside">
          {dataRenderModal?.departamento[0]?.map((departamento) => (
            <SelectItem key={departamento.descricao} value={departamento.descricao}>{departamento.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="fornecedor" >
        <span id="fornecedor" className="text-xs">Fornecedor</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectFornecedor">
        <Select className="w-full" size="sm" aria-label="fornecedor" name="fornecedor" labelPlacement="outside">
          {dataRenderModal?.fornecedor[0]?.map((fornecedor) => (
            <SelectItem key={fornecedor.nomeFantasia} value={fornecedor.nomeFantasia}>{fornecedor.nomeFantasia}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="w-36" aria-labelledby="linha">
        <span id="linha"  className="text-xs">Linha</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectLinha">
        <Select className="w-full" aria-label="linha" size="sm" onChange={(e) => {handleValue(e), RequestLinha(e)}} name="linha" labelPlacement="outside">
          {dataModal?.linha[0]?.map((linha) => (
            <SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="modelo">
        <span id="modelo" className="text-xs">Modelo</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectModel">
        <Select className="w-full" size="sm" aria-label="modelo" onChange={(e) => {handleValue(e)}} name="modelo" labelPlacement="outside">
          {modelo.map((mode) => (
            <SelectItem key={mode} value={mode}>{mode}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="w-36" aria-labelledby="familia">
        <span id="familia" className="text-xs">Familia</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectFamilia">
        <Select className="w-full" aria-label="familia" size="sm" onChange={(e) => {handleValue(e), RequestFamilia(e)}} name="familia" labelPlacement="outside">
          {dataModal?.familia[0]?.map((familia) => (
            <SelectItem key={familia.familia} value={familia.familia}>{familia.familia}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="tipoProduto">
        <span id="tipoProduto" className="text-xs">Tipo Produto</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectTipoProduto">
        <Select className="w-full" size="sm" aria-label="tipoProduto" onChange={(e) => {handleValue(e)}} labelPlacement="outside">
          {tipoProduto?.map((tipo) => (
            <SelectItem key={tipo.status} value={tipo.status}>{tipo.status}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="w-36" aria-labelledby="grupo">
        <span id="grupo" className="text-xs">Grupo</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectGrupo">
        <Select className="w-full" size="sm" name="grupo" onChange={(e) => {handleValue(e)}} aria-label="grupo" labelPlacement="outside">
          {dataModal?.grupo[0]?.map((grupo) => (
            <SelectItem key={grupo.grupo} value={grupo.grupo}>{grupo.grupo}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="unidade">
        <span id="unidade" className="text-xs">Unidade</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectUnidade">
        <Select className="w-full" size="sm" name="unidade" onChange={(e) => {handleValue(e)}} aria-label="unidade" labelPlacement="outside">
          {unidadeMedida?.map((unidade)=> (
            <SelectItem key={unidade.medida} value={unidade.medida}>{unidade.medida}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="w-36" aria-labelledby="cor">
        <span id="cor" className="text-xs">Cor</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectCor">
        <Select className="w-full" size="sm" name="cor" onChange={(e) => {handleValue(e)}} aria-label="cor" labelPlacement="outside">
          {dataRenderModal?.cor[0]?.map((cor) => (
            <SelectItem key={cor.descricao} value={cor.descricao}>{cor.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="especificacao">
        <span id="especificacao" className="text-xs">Especificacao</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectEspecificacao">
        <Select className="w-full" size="sm" name="especificacao" aria-label="especificacao" labelPlacement="outside">
          {dataRenderModal?.especificacao[0]?.map((especificacao) => (
            <SelectItem key={especificacao.descricao} value={especificacao.descricao}>{especificacao.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="col-end-7 justify-self-end" aria-labelledby="adicionar">
        {isDisabled ? 
        (
          <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20">
            Adicionar
          </Button>
        ) : (
          <Button size="sm" isDisabled name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20">
            Adicionar
          </Button>
        )}
        
      </div>
  </div>
  )
}

export default ProdutoRegister