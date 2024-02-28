"use Client";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import {Input, Button, Select, SelectItem} from "@nextui-org/react";
import React , {useEffect, useState} from "react";

const ProdutoRegister = (props) => {
  const { dataDepartamento, handleValue} = props
  const [dataModal, setDataModal] = useState()
  const Request = async (e) => {
      const {name, value} = e.target
      if (name === "departamento") {
        const data = GetArvoreProduto("linha")
      }
      //const data = await GetArvoreProduto(name, value);
      /*setDataModal(prevState => ({
        ...prevState,
        [data]: data
      }))*/
  }

  

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
        <Input className="w-full" size="sm" name="codBarra" labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="descricaoProduto">
        <span id="descricaoProduto" className="text-xs">Descrição Produto</span>
      </div>
      <div className="col-span-5">
        <Input className="w-full" size="sm" name="descricaoProduto" labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="descricaoItem">
        <span id="descricaoItem" className="text-xs">Descrição Item</span>
      </div>
      <div className="col-span-5">
        <Input className="w-full" size="sm" name="descricaoItem" labelPlacement="outside"/>
      </div>
      <div className="w-36" aria-labelledby="departamento">
        <span id="departamento" className="text-xs">Departamento</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectDepartamento">
        <Select className="w-full" size="sm" aria-label="departamento" onChange={(e) => {handleValue(e), Request(e)}} name="departamento" labelPlacement="outside">
          {dataDepartamento?.map((departamento) => (
            <SelectItem key={departamento.descricao} value={departamento.descricao}>{departamento.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="fornecedor" >
        <span id="fornecedor" className="text-xs">Fornecedor</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectFornecedor">
        <Select className="w-full" size="sm" aria-label="fornecedor" name="fornecedor" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="w-36" aria-labelledby="linha">
        <span id="linha"  className="text-xs">Linha</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectLinha">
        <Select className="w-full" aria-label="linha" size="sm" name="linha" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="modelo">
        <span id="modelo" className="text-xs">Modelo</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectModel">
        <Select className="w-full" size="sm" aria-label="modelo" name="modelo" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="w-36" aria-labelledby="familia">
        <span id="familia" className="text-xs">Familia</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectFamilia">
        <Select className="w-full" aria-label="familia" size="sm" name="familia" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="tipoProduto">
        <span id="tipoProduto" className="text-xs">Tipo Produto</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectTipoProduto">
        <Select className="w-full" size="sm" aria-label="tipoProduto" labelPlacement="outside">
          <SelectItem name="tipoProduto">teste</SelectItem>
        </Select>
      </div>
      <div className="w-36" aria-labelledby="grupo">
        <span id="grupo" className="text-xs">Grupo</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectGrupo">
        <Select className="w-full" size="sm" name="grupo" aria-label="grupo" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="pl-10" aria-labelledby="unidade">
        <span id="unidade" className="text-xs">Unidade</span>
      </div>
      <div className="col-span-2" aria-labelledby="selectUnidade">
        <Select className="w-full" size="sm" name="unidade" aria-label="unidade" labelPlacement="outside">
          <SelectItem>teste</SelectItem>
        </Select>
      </div>
      <div className="col-end-7 justify-self-end" aria-labelledby="adicionar">
        <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20">
          Adicionar
        </Button>
      </div>
  </div>
  )
}

export default ProdutoRegister