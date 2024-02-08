import React from "react";
import { Button, Input, useDisclosure} from "@nextui-org/react";
import RerenciaCep from "./referenciaCep";

const RegisterEndereco = (props) => {
    const { type, 
    dataFornecedor, 
    dataRepresentante,
    handleChange,
    req,
    fillToCep
    } = props

    const { isOpen , onOpen , onOpenChange } = useDisclosure();

    const renderInput = (op) =>{
        switch (op) {
            case "Fornecedor":
                return(
                    <>
                    <div className="w-full p-2">
                        <div className="w-full flex flex-row  gap-[3.7rem] mb-2 items-center"> 
                            <label className='text-xs pl-1.5'>CEP</label>
                            <Input className="w-40 " size="sm" labelPlacement="outside" value={dataFornecedor?.cepFornecedor || ''} maxLength={8} name={`cep${type}`}
                            onChange={(e) => {handleChange(e) }}/>
                            <Button onClick={() => fillToCep(!req)} className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" >Preencher dados</Button>
                            <Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Referencia</Button>
                            <RerenciaCep isOpen={isOpen} handleChange={handleChange} 
                            type={type} size={"3xl"} w={"h-3/6"} onOpenChange={onOpenChange}/>
                        </div>
                        <div className="w-full flex flex-row  gap-2 mb-2 items-center"> 
                            <div className="flex flex-row gap-8 pl-1 w-[60%] items-center">
                                <label className='text-xs'>Endereço</label>
                                <Input className="w-96" size="sm" value={dataFornecedor?.enderecoFornecedor || ''} labelPlacement="outside" name={`endereco${type}`}
                                onChange={(e) => {handleChange(e) }}/>
                            </div>
                            <label className='text-xs'>Número</label>
                            <Input className="w-24" size="sm" value={dataFornecedor?.numeroFornecedor || ''}  labelPlacement="outside" name={`numero${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row  gap-2 pl-0.5 mb-2 items-center">
                            <label className='text-xs'>Complemento</label>
                            <Input size="sm" className="w-96" value={dataFornecedor?.complementoFornecedor || ''} labelPlacement="outside" name={`complemento${type}`}
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row mb-2 gap-2 items-center">
                            <div className="flex flex-row gap-12 pl-2 w-[60%] items-center">
                                <label className='text-xs'>Bairro</label>
                                <Input className="w-96" size="sm" value={dataFornecedor?.bairroFornecedor} labelPlacement="outside" name={`bairro${type}`}
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <label className='text-xs pl-1'>Cidade</label>
                            <Input className="w-32" size="sm" value={dataFornecedor?.cidadeFornecedor || ''} labelPlacement="outside" name={`cidade${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                            <label className='text-xs'>UF</label>
                            <Input className="w-10" size="sm" value={dataFornecedor?.ufFornecedor || ''} labelPlacement="outside" name={`uf${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                    </div>
                    </>
                )
            case "Representante":
                return(
                    <>
                    <div className="w-full p-2">
                        <div className=" w-full flex flex-row gap-[3.7rem] mb-2 items-center"> 
                            <label className='text-xs pl-1.5'>CEP</label>
                            <Input className="w-40 " size="sm" value={dataRepresentante?.cepRepresentante || ''} labelPlacement="outside" maxLength={8} name={`cep${type}`}
                            onChange={(e) => {handleChange(e)}}/>
                            <Button onClick={() => fillToCep(!req)} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Preencher dados</Button>
                            <Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Referencia</Button>
                            <RerenciaCep isOpen={isOpen} handleChange={handleChange} 
                            type={type} size={"3xl"} w={"h-3/6"} onOpenChange={onOpenChange}/>
                        </div>
                        <div className=" w-full flex flex-row gap-2 mb-2 items-center"> 
                            <div className="flex flex-row gap-8 pl-1 w-[60%] items-center">
                                <label className='text-xs'>Endereço</label>
                                <Input className="w-96" size="sm" value={dataRepresentante?.enderecoRepresentante || ''} labelPlacement="outside" name={`endereco${type}`}
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <label className='text-xs'>Número</label>
                            <Input className="w-24" size="sm" value={dataRepresentante?.numeroRepresentante || ''} labelPlacement="outside" name={`numero${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row gap-2 pl-0.5 mb-2 items-center">
                            <label className='text-xs'>Complemento</label>
                            <Input size="sm" className="w-96" value={dataRepresentante?.complementoRepresentante} labelPlacement="outside" name={`complemento${type}`}
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className=" w-full flex flex-row mb-2 gap-2 items-center">
                            <div className="flex flex-row gap-12 pl-2 w-[60%] items-center">
                                <label className='text-xs'>Bairro</label>
                                <Input className="w-96" size="sm" value={dataRepresentante?.bairroRepresentante || ''} labelPlacement="outside" name={`bairro${type}`}
                                onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <label className='text-xs pl-1'>Cidade</label>
                            <Input className="w-32" size="sm" value={dataRepresentante?.cidadeRepresentante || ''} labelPlacement="outside" name={`cidade${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                            <label className='text-xs'>UF</label>
                            <Input className="w-10" size="sm" value={dataRepresentante?.ufRepresentante || ''} labelPlacement="outside" name={`uf${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
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
            {renderInput(type)}
        </>
    )
}

export default RegisterEndereco