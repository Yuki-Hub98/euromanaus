

import React from "react";
import {Input} from "@nextui-org/react";

const RegisterContato = (props) =>{
    const {type, 
    handleChange,
    dataFornecedor, 
    dataRepresentante
    } = props

    const renderInput = (op) =>{
        switch (op) {
            case "Fornecedor":
                return(
                <>
                <div className="w-full p-2">
                    <div className="w-full flex flex-row gap-10 mb-2 items-center"> 
                        <label className='text-xs pl-0.5'>Contato</label>
                        <Input className="w-60 pl-0.5" value={dataFornecedor?.contatoFornecedor || ''} size="sm" labelPlacement="outside" name={`contato${type}`}
                        onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-2 mb-2 items-center"> 
                        <div className="flex flex-row gap-9 pl-1 w-5/12 items-center">
                            <label className='text-xs'>Telefone</label>
                            <Input className="w-60" size="sm" value={dataFornecedor?.telefoneFornecedor || ''}  labelPlacement="outside" name={`telefone${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <label className='text-xs'>Celular</label>
                        <Input className="w-60" size="sm" value={dataFornecedor?.celularFornecedor || ''}  labelPlacement="outside" name={`celular${type}`} 
                        onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-4 mb-2 items-center"> 
                        <div className="flex flex-row gap-12 pl-1 w-5/12 items-center">
                            <label className='text-xs'>E-mail</label>
                            <Input className="w-60" size="sm" value={dataFornecedor?.emailFornecedor || ''} labelPlacement="outside" name={`email${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <label className='text-xs pl-0.5'>Site</label>
                        <Input className="w-60" size="sm" value={dataFornecedor?.siteFornecedor || ''} labelPlacement="outside" name={`site${type}`} 
                        onChange={(e) => {handleChange(e)}}/>
                    </div>
                </div>
                </>
                )
            case "Representante":
                return(
                <>
                <div className="w-full p-2">
                    <div className="w-full flex flex-row gap-10 mb-2 items-center"> 
                        <label className='text-xs pl-0.5'>Contato</label>
                        <Input className="w-60 pl-0.5" size="sm" value={dataRepresentante?.contatoFornecedor || ''} labelPlacement="outside" name={`contato${type}`}
                        onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-2 mb-2 items-center"> 
                        <div className="flex flex-row gap-9 pl-1 w-5/12 items-center">
                            <label className='text-xs'>Telefone</label>
                            <Input className="w-60" size="sm" value={dataRepresentante?.telefoneFornecedor || ''} labelPlacement="outside" name={`telefone${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <label className='text-xs'>Celular</label>
                        <Input className="w-60" size="sm" value={dataRepresentante?.celularFornecedor || ''} labelPlacement="outside" name={`celular${type}`} 
                        onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-4 mb-2 items-center"> 
                        <div className="flex flex-row gap-12 pl-1 w-5/12 items-center">
                            <label className='text-xs'>E-mail</label>
                            <Input className="w-60" size="sm" value={dataRepresentante?.emailFornecedor || ''} labelPlacement="outside" name={`email${type}`} 
                            onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <label className='text-xs pl-0.5'>Site</label>
                        <Input className="w-60" size="sm" value={dataRepresentante?.siteFornecedor || ''}  labelPlacement="outside" name={`site${type}`} 
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

export default RegisterContato