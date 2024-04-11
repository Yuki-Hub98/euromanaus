"use client";
import React , {useEffect, useState} from "react";
import {Button,  Input, Select, SelectItem} from "@nextui-org/react";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import useSearchArvoreProduto from "@/hooks/services/useSearchArvoreProduto";
import { SearchModelo } from "@/app/actions/modelo";
import useHandleChange from "@/hooks/ui/useHandleChange";

const SearchProdutos = (props) => {
  const {name, ReceiveGet} = props
  const {dataHandleChange, handleChange, clearHandle} = useHandleChange()
  const [dataModal, setDataModal] = useState({
    departamento:[],
    linha:[],
    modelos:[]
  });
  const {requestArvore, dataArvore} = useSearchArvoreProduto()

  const RequestModal = async () =>{
    const dataDepartamento = await GetArvoreProduto("departamento")
    const modelo = await SearchModelo("modelos")
    setDataModal(data=> ({
      ...data,
      ["departamento"]: [dataDepartamento],
      ["modelos"]: [modelo]
    })) 
  }

  const Click = () => {
    if (dataHandleChange) {
        return ReceiveGet(name, dataHandleChange)
    }else{
        return ReceiveGet(name);
    }
  }

  useEffect(()=> {
    RequestModal();
  },[])

  return(
    <>
    <div className='w-full h-full grid grid-cols-8 pt-5 gap-2 items-center justify-center'>
      <div className="flex flex-row items-center gap-2" >
        <span className="text-xs text-[#edca62]">Codigo</span>
        <Input 
          labelPlacement="outside"
          size="sm"
          onChange={(e) => handleChange(e)} name="idItem" color="primary"/>
      </div>
      <div className="flex flex-row col-span-2 items-center gap-2" >
        <span className="text-xs text-[#edca62]">Descrição</span>
        <Input 
          labelPlacement="outside"
          size="sm"
          className="w-96"
          onChange={(e) => handleChange(e)} name="descricao" color="primary"/>
      </div>
      <div className="flex flex-row col-span-2 items-center gap-2" >
        <span className="text-xs text-[#edca62]">Fornecedor</span>
        <Input
          labelPlacement="outside"
          size="sm"
          onChange={(e) => handleChange(e)} name="fornecedor" color="primary"/>
      </div>
      <div className="flex flex-row items-center gap-2" >
        <span className="text-xs text-[#edca62]">Unidade</span>
        <Input
          labelPlacement="outside"
          size="sm"
          onChange={(e) => handleChange(e)} name="unidade" color="primary"/>
      </div>
      <div className="w-8/12 flex flex-row items-center col-span-2 gap-2" >
        <span className="text-xs text-[#edca62]">Departamento</span>
        <Select size="sm" color="primary" onChange={(e) => {handleChange(e), requestArvore(e)}} labelPlacement="outside" name="departamento" aria-label="departamento" >
          {dataModal?.departamento[0]?.map((departamento) => (
            <SelectItem key={departamento.descricao} value={departamento.descricao}>{departamento.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-row items-center gap-5" >
        <span className="text-xs text-[#edca62]">Linha</span>
        <Select className="w-10/12" size="sm" onChange={(e) => {handleChange(e)}} color="primary" name="linha" labelPlacement="outside-left" aria-label="linha" >
          {dataArvore?.linha[0]?.map((linha) => (
            <SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-row items-center gap-6 mr-1" >
        <span className="text-xs text-[#edca62]">Modelo</span>
        <Select className="w-10/12" size="sm" onChange={(e) => handleChange(e)} color="primary" name="modelo" labelPlacement="outside-left" aria-label="modelo" >
          {dataModal?.modelos[0]?.map((modelo) => (
            <SelectItem key={modelo.descricao} value={modelo.descricao}>{modelo.descricao}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="ml-2">
        <Button color="primary" size='sm' type="submit" variant="ghost"  onClick={() =>  {Click(), clearHandle(null)}}>
          Pesquisar
        </Button>
      </div>
    </div>
    </>
    )
}

export default SearchProdutos