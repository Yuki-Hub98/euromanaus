import React, { useState } from "react";
import {Input} from "@nextui-org/react";
const RegisterPessoa = (props) => {
    const {type, 
    handleChange, 
    dataFornecedor, 
    dataRepresentante
    } = props

    const renderInput = (op) => {
        switch (op) {
            case "Fornecedor":
                return(
                <>
                <div className="w-full p-2">
                    <div className="w-full flex flex-row gap-3 pl-1 mb-2 items-center">
                        <label form="razaoSocial" className=' text-xs' >Razão Social</label>
                        <Input className="w-96 pl-1" size="sm" value={dataFornecedor?.razaoSocialFornecedor || ''} labelPlacement="outside" name={`razaoSocial${type}`} 
                        autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-9 pl-1 mb-2 items-center">
                        <label form="nomeFantasia" className=' text-xs' >Fantasia</label>
                            <Input className="w-96 pl-1" size="sm" value={dataFornecedor?.nomeFantasiaFornecedor || ''} labelPlacement="outside" name={`nomeFantasia${type}`}
                            autoComplete="off" placeholder=" " onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-3 mb-2 items-center">
                        <div className="w-[60%] flex flex-row items-center pl-1 gap-7">
                            <label className='text-xs'>CPF/CNPJ</label>
                            <Input className="w-96 pl-0.5" size="sm" value={dataFornecedor?.cpfCnpjFornecedor || ''} labelPlacement="outside" name={`cpfCnpj${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <label className='text-xs pl-6'>IE/RG</label>
                        <Input className="w-[9rem]" size="sm" value={dataFornecedor?.ieRgFornecedor || ''} labelPlacement="outside" name={`ieRg${type}`}
                        autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                    </div>
                    <div className="w-full flex flex-row gap-2 pl-0.5 mb-2 items-center">
                        <label className='text-xs' >Orgão Emissor</label>
                        <Input className="w-30" size="sm" value={dataFornecedor?.orgaoEmissorFornecedor || ''} labelPlacement="outside" name={`orgaoEmissor${type}`}
                        autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                        <label className='text-xs' >UF</label>
                        <Input className="w-28" size="sm" value={dataFornecedor?.ufRgFornecedor || ''} labelPlacement="outside" name={`ufRg${type}`}
                        autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                        <label className='text-xs' >Data de Emissão</label>
                        <Input className="w-30" type="date" value={dataFornecedor?.dataEmissaoFornecedor || ''} size="sm" labelPlacement="outside" name={`dataEmissao${type}`}
                        autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                    </div>
                </div>
                </>
                )

            case "Representante":
                return(
                    <>
                    <div className="w-full p-2">
                        <div className="w-full flex flex-row  gap-3 pl-1 mb-2 items-center">
                            <label form="razaoSocial" className=' text-xs' >Razão Social</label>
                            <Input className="w-96 pl-1" size="sm" value={dataRepresentante?.razaoSocialRepresentante || ''}  labelPlacement="outside" name={`razaoSocial${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row gap-9 pl-1 mb-2 items-center">
                            <label form="nomeFantasia" className=' text-xs' >Fantasia</label>
                                <Input className="w-96 pl-1" size="sm" value={dataRepresentante?.nomeFantasiaRepresentante || ''} labelPlacement="outside" name={`nomeFantasia${type}`}
                                autoComplete="off" placeholder=" " onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row gap-3 mb-2 items-center">
                            <div className="w-[60%] flex flex-row items-center pl-1 gap-7">
                                <label className='text-xs'>CPF/CNPJ</label>
                                <Input className="w-96 pl-0.5" size="sm" value={dataRepresentante?.cpfCnpjRepresentante || ''} labelPlacement="outside" name={`cpfCnpj${type}`}
                                autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                            </div>
                            <label className='text-xs pl-6'>IE/RG</label>
                            <Input className="w-[9rem]" size="sm" value={dataRepresentante?.ieRgRepresentante || ''} labelPlacement="outside" name={`ieRg${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className="w-full flex flex-row gap-2 pl-0.5 mb-2 items-center">
                            <label className='text-xs' >Orgão Emissor</label>
                            <Input className="w-30" size="sm" value={dataRepresentante?.orgaoEmissorRepresentante || ''} labelPlacement="outside" name={`orgaoEmissor${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                            <label className='text-xs' >UF</label>
                            <Input className="w-28" size="sm" value={dataRepresentante?.ufRgRepresentante || ''} labelPlacement="outside" name={`ufRg${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
                            <label className='text-xs' >Data de Emissão</label>
                            <Input className="w-30" type="date" value={dataRepresentante?.dataEmissaoRepresentante || ''} size="sm" labelPlacement="outside" name={`dataEmissao${type}`}
                            autoComplete="off" onChange={(e) => {handleChange(e)}}/>
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

export default RegisterPessoa