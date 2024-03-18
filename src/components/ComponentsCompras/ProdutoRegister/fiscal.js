import {Input, Button, Select, SelectItem, Textarea, useDisclosure} from "@nextui-org/react";
import React, { useState } from "react";
import { origemCstIcms, cstPisCofinsCadProduto } from "@/DB/data";
import { GetCst_Icms, GetNcm } from "@/app/actions/produto";
import RerenciaFiscal from "./referenciaFiscal";
const Fiscal = (props) => {
  const {dataFiscal, handleValue, SetData, dataDuplicated} = props
  const [ncmRequest, setNcmRequest] = useState()
  const [dataRender, setDataRender] = useState({
    csticms:[],
    ncm:[]
  })
  const { isOpen , onOpen , onOpenChange } = useDisclosure();

  const requestCstIcms = async (e) => {
    const {name, value} = e.target
    if (name === "cstIcmsOrigem") {
      const dataCsticms = await GetCst_Icms(value)
      setDataRender(data => ({
        ...data,
        ["csticms"]: [dataCsticms]
      }))
    }
  }

  const requestOnPress = async (press) => {
    const {key} = press
    if (key === "Enter") {
      const dataNcm = await GetNcm(ncmRequest);
      setDataRender(data => ({
        ...data,
        ["ncm"]: [dataNcm]
      }))
    }
  }
const descNcm =  dataRender?.ncm[0] ? dataRender?.ncm[0][0]?.descricao : ''
return(
  <>
    <div className="w-full h-full grid grid-cols-4 gap-y-1 items-center">
      <div  aria-labelledby="origem">
        <span className="text-xs">ORIGEM</span>
      </div>
      <div className="col-span-3" aria-labelledby="selectOrigem">
        {dataDuplicated?.cstIcmsOrigem ? 
          <Input className="w-3/5 text-xs" isDisabled value={dataDuplicated?.cstIcmsOrigem} labelPlacement="outside" aria-label="origem" size="sm" name="cstIcmsOrigem"/>
            :
          <Select className="w-3/5 text-xs" labelPlacement="outside" aria-label="origem" size="sm" name="cstIcmsOrigem" onChange={(e) => {handleValue(e), requestCstIcms(e)}}>
          {origemCstIcms.map((cstIcms) => (
            <SelectItem key={cstIcms.origem} value={cstIcms.origem}>{cstIcms.origem}</SelectItem>
          ))}
          </Select>
          }
        
      </div>
      <div  aria-labelledby="cstICMS">
        <span className="text-xs">CST ICMS</span>
      </div>
      <div className="col-span-3" aria-labelledby="selectCstIcmsDescricao">
        {dataDuplicated?.cstIcmsDescricao ? 
          <Input className="w-full" isDisabled value={dataDuplicated?.cstIcmsDescricao} labelPlacement="outside" aria-label="origem" size="sm" name="cstIcmsDescricao"/>
            :
          <Select className="w-full" labelPlacement="outside" aria-label="csticms" name="cstIcmsDescricao" onChange={(e) => {handleValue(e)}} size="sm">
          {dataRender?.csticms[0]?.map((csticms) => (
            <SelectItem key={csticms.descricao} value={csticms.descricao}>{csticms.descricao}</SelectItem>
          ))}
          </Select>
          }
      </div>
      <div  aria-labelledby="cstPisConfins">
        <span className="text-xs">CST PIS/Cofins</span>
      </div>
      <div className="col-span-3" aria-labelledby="selectCstPisConfins">
        {dataDuplicated?.cstPisConfins ? 
          <Input className="w-full" isDisabled value={dataDuplicated?.cstPisConfins} labelPlacement="outside" aria-label="origem" size="sm" name="cstPisConfins"/>
            :
          <Select className="w-full" aria-label="cstPisConfins" name="cstPisConfins" onChange={(e) => handleValue(e)} labelPlacement="outside" size="sm">
          {cstPisCofinsCadProduto.map((pisConfins) => (
            <SelectItem key={pisConfins.descicao} value={pisConfins.descicao}>{pisConfins.descicao}</SelectItem>
          ))}
          </Select>
          }
      </div>
      <div  aria-labelledby="ncm">
        <span className="text-xs">NCM</span>
      </div>
      <div >
        {dataDuplicated?.ncmCodigo ? 
          <Input className="w-full" isDisabled value={dataDuplicated?.ncmCodigo} labelPlacement="outside" aria-label="origem" size="sm" name="ncmCodigo"/>
            :
          <Input className="w-full" labelPlacement="outside" onKeyUp={requestOnPress} value={dataFiscal?.ncmCodigo || ''} name="ncmCodigo" size="sm"
            onChange={(e) => {handleValue(e), setNcmRequest(e.target.value)}}/>
          }
      </div>
      <div className="flex justify-end w-40">
      {dataDuplicated?.ncmCodigo ? 
          <Button size="sm" isDisabled className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onPress={onOpen}> Pesquisar </Button>
        :
          <Button size="sm" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onPress={onOpen}> Pesquisar </Button>
        }
      </div>
      <RerenciaFiscal handleValue={handleValue} dataFiscal={dataFiscal} onOpenChange={onOpenChange} isOpen={isOpen} SetData={SetData} size={"3xl"} h={"h-2/4"}/>
      <div className="col-start-2 col-span-3">
        <Textarea  minRows={2.3} className="w-3/5" name="ncmDescricao" isDisabled labelPlacement="outside" value={dataFiscal?.ncmDescricao || descNcm || ''} 
        onChange={(e) => {handleValue(e)}} /> 
      </div>
      {/***
        *Feat CEST Por enquanto está desabilitada 
        *<div aria-labelledby="codProduto">
        *<span id="codProduto" className="text-xs">CEST</span>
        *</div>
        *<div >
        *<Input className="w-full" labelPlacement="outside" size="sm" />
        *</div>
        *<div className="flex justify-end w-40">
        *<Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20"> Pesquisar </Button>
        *</div>
        *<div className="col-start-2 col-span-3">
        *<Textarea  minRows={2.3} className="w-3/5" labelPlacement="outside" />
        *</div> 
        ***/}
      <div className="flex items-center col-start-3 pl-6 justify-between w-40" aria-labelledby="ipi">
        <span id="ipi" className="text-xs w-20">% IPI</span>
        <Input className="w-6/12" name="ipi" labelPlacement="outside" size="sm" />
      </div>
      <div className="col-start-2 col-span-3 flex">
        <label className="text-xs flex items-center">
          <input type="checkbox" className="mr-2 accent-[#edca62b4]" name="importadoZFM" placeholder="importadoZFM"/>
          Importado ZFM
        </label>
      </div>
      <div className="col-start-2 col-span-3 flex">
        <label className="text-xs flex items-center">
          <input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" name="produzidoZFM" placeholder="produzidoZFM"/>
          Produzido ZFM
        </label>
      </div>
      <div className="col-start-2 flex">
        <label className="text-xs flex items-center">
          <input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" name="baseDeCalculoIcms" placeholder="baseDeCalculoIcms"/>
          Reduz Base de Cálculo do ICMS
        </label>
      </div>
      <div className="flex items-center col-span-2 pl-2 justify-between w-40" aria-labelledby="porcetagemEstado">
        <span className="text-xs w-28">% No Estado</span>
        <Input className="w-6/12" name="porcetagemEstado" labelPlacement="outside" size="sm" />
      </div>
      <div className="col-start-2 flex">
        <label className="text-xs flex items-center">
          <input type="checkbox" className="mr-2 accent-[#edca62b4] cursor-pointer" name="tributaPISCofins " placeholder="tributaPISCofins"/>
          Tributa PIS/Cofins
        </label>
      </div>
      <div className="flex items-center col-span-2  w-40" aria-labelledby="porcetagemForaEstado">
        <span className="text-xs w-28">% Fora do Estado</span>
        <Input className="w-5/12" name="porcetagemForaEstado" labelPlacement="outside" size="sm" />
      </div>
      <div  aria-labelledby="substTributaria">
        <span className="text-xs">Subst Tributária</span>
      </div>
      <div className="col-start-2 col-span-3" aria-labelledby="selectSubstTributaria">
        <Select className="w-3/5" labelPlacement="outside" aria-label="substTributaria" name="substTributaria" aria-labelledby="substTributaria" size="sm">
          <SelectItem key={"teste2"} value={"teste2"}>teste2</SelectItem>
        </Select>
      </div>
      <div aria-labelledby="infoAdicionaisNF-e">
        <span className="text-xs">Info. Adicionais NF-e</span>
      </div>
      <div className="col-start-2 col-span-3">
        <Input className="w-3/5" name="infoAdicionaisNF-e" labelPlacement="outside" size="sm" />
      </div>
      <div aria-labelledby="infoAdicionaisNF-e2">
        <span className="text-xs">Info. Adicionais NF-e 2</span>
      </div>
      <div className="col-start-2 col-span-3">
        <Input className="w-3/5" name="infoAdicionaisNF-e2" labelPlacement="outside" size="sm" />
      </div>
      <div aria-labelledby="cfop">
        <span className="text-xs">CFOP</span>
      </div>
      <div className="w-full">
        <Input className="w-full" name="cfop" labelPlacement="outside" size="sm" />
      </div>
      <div className="flex justify-end w-40">
        <Button size="sm" name="adicionar" className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20"> Pesquisar </Button>
      </div>
      {/***
        *<div className="col-start-2 flex">
        * <label className="text-xs flex items-center">
        *   <input type="checkbox" className="mr-2" name="Importado ZFM" placeholder="Importado ZFM"/>
        *   Inserir Código do item manual
        * </label>
        *</div>
        * <label className="text-xs flex items-center">
        *   <input type="checkbox" className="mr-2" name="Importado ZFM" placeholder="Importado ZFM"/>
        *   Inserir Mesmo item com as mesma informações
        * </label>
        *</div>
        *<div className="col-start-2 flex">
        * <label className="text-xs flex items-center">
        * <input type="checkbox" className="mr-2" name="Importado ZFM" placeholder="Importado ZFM"/>
        *   Emitir etiqueta ao concluir:
        * </label>
        *</div>
        *<div className="flex justify-end w-40">
        * <Input className="w-5/12" labelPlacement="outside" size="sm" />
        *</div> 
        ***/}
    </div>
  </>
)
}

export default Fiscal