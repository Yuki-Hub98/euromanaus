import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import CpfCnpj from "@/functions/formatCpfCnpj";
const RegisterPessoa = (props) => {
		const {type, 
		handleChange,
		handleRender, 
		dataFornecedor, 
		dataRepresentante
		} = props

		const [cpfCnpj, setCpfCnpj] = useState('')
		
		const FormatCpfCnpj = (e) => {
				setCpfCnpj(CpfCnpj(e?.target?.value.replace(/\D/g, '')))
				handleChange(e, cpfCnpj)
				handleRender(e, cpfCnpj)
		}

		const renderInput = (op) => {
			switch (op) {
				case "Fornecedor":
					return(
					<>
					<div className="w-full h-full grid grid-cols-8 gap-y-2">
						<div className="w-full items-center">
							<label form="razaoSocial" className='text-xs' >Razão Social<sup>*</sup></label>
						</div>
						<Input className="w-96 col-span-7" isRequired size="sm" value={dataFornecedor?.razaoSocialFornecedor || ''} labelPlacement="outside" name={`razaoSocial${type}`} 
							autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
						<div className="w-full col-start-1 items-center">
							<label form="nomeFantasia" className='text-xs' >Fantasia<sup>*</sup></label>
						</div>
						<Input className="w-96 col-span-7" isRequired size="sm" value={dataFornecedor?.nomeFantasiaFornecedor || ''} labelPlacement="outside" name={`nomeFantasia${type}`}
							autoComplete="off" placeholder=" " onChange={(e) => {handleChange(e), handleRender(e)}}/>
						<div className="w-full items-center col-start-1">
							<label className='text-xs'>CPF/CNPJ<sup>*</sup></label>
						</div>
						<Input className="w-96 col-start-2 col-end-6" isRequired size="sm" value={dataFornecedor?.cpfCnpjFornecedor || cpfCnpj} labelPlacement="outside" 
							name={`cpfCnpj${type}`} autoComplete="off" onChange={(e) => {FormatCpfCnpj(e)}}/>
						<div className="w-full items-center col-start-6 flex justify-end pr-2">
							<label className='text-xs pl-6'>IE/RG<sup>*</sup></label>
						</div>
						<Input className="col-start-7" isRequired  size="sm" value={dataFornecedor?.ieRgFornecedor || ''} labelPlacement="outside" name={`ieRg${type}`}
							autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
						<div className="col-start-1">
							<label className='text-xs' >Orgão Emissor</label>
						</div>
						<Input className="w-30 col-start-2 col-end-3" size="sm" value={dataFornecedor?.orgaoEmissorFornecedor || ''} labelPlacement="outside" name={`orgaoEmissor${type}`}
							autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
						<div className="col-start-3 flex justify-end items-center pr-3">
							<label className='text-xs'>UF</label>
						</div>
						<Input className="col-start-4 col-end-5" size="sm" value={dataFornecedor?.ufRgFornecedor || ''} labelPlacement="outside" name={`ufRg${type}`}
							autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
						<div className="col-start-6">
							<label className='text-xs' >Data de Emissão</label>
						</div>
						<Input className="w-30" type="date" value={dataFornecedor?.dataEmissaoFornecedor || ''} size="sm" labelPlacement="outside" name={`dataEmissao${type}`}
							autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
					</div>
					</>
					)

				case "Representante":
					return(
						<>
						<div className="w-full h-full grid grid-cols-8 gap-y-2">
							<div className="w-full items-center">
								<label form="razaoSocial" className=' text-xs' >Razão Social<sup>*</sup></label>
							</div>
							<Input className="w-96 col-span-7" isRequired  size="sm" value={dataRepresentante?.razaoSocialRepresentante || ''}  labelPlacement="outside" name={`razaoSocial${type}`}
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="w-full col-start-1 items-center">
								<label form="nomeFantasia" className='text-xs' >Fantasia<sup>*</sup></label>
							</div>
							<Input className="w-96 col-span-7" isRequired  size="sm" value={dataRepresentante?.nomeFantasiaRepresentante || ''} labelPlacement="outside" name={`nomeFantasia${type}`}
								autoComplete="off" placeholder=" " onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="w-full items-center col-start-1">
								<label className='text-xs'>CPF/CNPJ<sup>*</sup></label>
							</div>
							<Input className="w-96 col-start-2 col-end-6" isRequired size="sm" value={dataRepresentante?.cpfCnpjFornecedor || cpfCnpj} labelPlacement="outside" 
								name={`cpfCnpj${type}`} autoComplete="off" onChange={(e) => {FormatCpfCnpj(e)}}/>
							<div className="w-full items-center col-start-6 flex justify-end pr-2">
								<label className='text-xs pl-6'>IE/RG<sup>*</sup></label>
							</div>
							<Input className="col-start-7" isRequired  size="sm" value={dataRepresentante?.ieRgFornecedor || ''} labelPlacement="outside" name={`ieRg${type}`}
									autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-1">
								<label className='text-xs' >Orgão Emissor</label>
							</div>
							<Input className="w-30 col-start-2 col-end-3" size="sm" value={dataRepresentante?.orgaoEmissorFornecedor || ''} labelPlacement="outside" name={`orgaoEmissor${type}`}
									autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-3 flex justify-end items-center pr-3">
								<label className='text-xs'>UF</label>
							</div>
							<Input className="col-start-4 col-end-5" size="sm" value={dataRepresentante?.ufRgFornecedor || ''} labelPlacement="outside" name={`ufRg${type}`}
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-6">
								<label className='text-xs' >Data de Emissão</label>
							</div>
							<Input className="w-30" type="date" value={dataRepresentante?.dataEmissaoFornecedor || ''} size="sm" labelPlacement="outside" name={`dataEmissao${type}`}
									autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
						</>
				)
				default:
					break;
				}}

		return(
				<>
				{renderInput(type)}
				</>
		)
}

export default RegisterPessoa