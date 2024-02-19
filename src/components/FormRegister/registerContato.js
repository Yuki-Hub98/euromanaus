

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
										<div className="w-full flex flex-row  gap-[2.6rem] mb-2 items-center"> 
												<label className='text-xs pl-0.5'>Contato</label>
												<Input className="w-60 pl-0.5" value={dataFornecedor?.contatoFornecedor || ''} size="sm" labelPlacement="outside" name={`contato${type}`}
												autoComplete="off" onChange={(e) => {handleChange(e)}}/>
										</div>
										<div className="w-full flex flex-row gap-2 mb-2 items-center"> 
												<div className="flex flex-row gap-10 pl-1 w-5/12 items-center">
														<label className='text-xs'>Telefone</label>
														<Input className="w-60" size="sm" value={dataFornecedor?.telefoneFornecedor || ''}  labelPlacement="outside" name={`telefone${type}`} 
														autoComplete="off" onChange={(e) => {handleChange(e)}}/>
												</div>
												<label className='text-xs'>Celular</label>
												<Input className="w-60" size="sm" value={dataFornecedor?.celularFornecedor || ''}  labelPlacement="outside" name={`celular${type}`} 
												autoComplete="off" onChange={(e) => {handleChange(e)}}/>
										</div>
										<div className="w-full flex flex-row gap-4 mb-2 items-center"> 
												<div className="flex flex-row gap-[3.2rem] pl-1 w-5/12 items-center">
														<label className='text-xs'>E-mail</label>
														<Input className="w-60" size="sm" value={dataFornecedor?.emailFornecedor || ''} labelPlacement="outside" name={`email${type}`} 
														autoComplete="off" onChange={(e) => {handleChange(e)}}/>
												</div>
												<label className='text-xs pl-0.5'>Site</label>
												<Input className="w-60" size="sm" value={dataFornecedor?.siteFornecedor || ''} labelPlacement="outside" name={`site${type}`} 
												autoComplete="off" onChange={(e) => {handleChange(e)}}/>
										</div>
								</div>
								</>
								)
						case "Representante":
								return(
								<>
								<div className="w-full p-2">
										<div className="w-full flex flex-row gap-[2.6rem] mb-2 items-center"> 
												<label className='text-xs pl-0.5'>Contato</label>
												<Input className="w-60 pl-0.5" size="sm" value={dataRepresentante?.contatoRepresentante || ''} labelPlacement="outside" name={`contato${type}`}
												autoComplete="off" onChange={(e) => {handleChange(e)}}/>
										</div>
										<div className="w-full flex flex-row gap-2 mb-2 items-center"> 
												<div className="flex flex-row gap-[2.5rem] pl-1 w-5/12 items-center">
														<label className='text-xs'>Telefone</label>
														<Input className="w-60" size="sm" value={dataRepresentante?.telefoneRepresentante || ''} labelPlacement="outside" name={`telefone${type}`} 
														autoComplete="off" onChange={(e) => {handleChange(e)}}/>
												</div>
												<label className='text-xs'>Celular</label>
												<Input className="w-60" size="sm" value={dataRepresentante?.celularRepresentante || ''} labelPlacement="outside" name={`celular${type}`} 
												autoComplete="off" onChange={(e) => {handleChange(e)}}/>
										</div>
										<div className="w-full flex flex-row gap-4 mb-2 items-center"> 
												<div className="flex flex-row gap-[3.2rem] pl-1 w-5/12 items-center">
														<label className='text-xs'>E-mail</label>
														<Input className="w-60" size="sm" value={dataRepresentante?.emailRepresentante || ''} labelPlacement="outside" name={`email${type}`} 
														autoComplete="off" onChange={(e) => {handleChange(e)}}/>
												</div>
												<label className='text-xs pl-0.5'>Site</label>
												<Input className="w-60" size="sm" value={dataRepresentante?.siteRepresentante || ''}  labelPlacement="outside" name={`site${type}`} 
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

export default RegisterContato