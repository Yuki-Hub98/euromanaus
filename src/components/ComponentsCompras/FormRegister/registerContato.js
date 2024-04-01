import React from "react";
import {Input} from "@nextui-org/react";

const RegisterContato = (props) =>{
		const {type, 
		handleChange,
		handleRender,
		dataFornecedor, 
		dataRepresentante
		} = props

		const renderInput = (op) =>{
			switch (op) {
				case "Fornecedor":
					return(
						<>
						<div className="w-full h-full grid grid-cols-8 gap-y-2 mt-2">
							<div className="col-start-1">
								<label className='text-xs'>Contato</label>
							</div>
							<Input className="w-96 col-span-7" value={dataFornecedor?.contatoFornecedor || ''} size="sm" labelPlacement="outside" name={`contato${type}`}
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-1">
								<label className='text-xs'>Telefone</label>
							</div>
							<Input className="w-84 col-start-2 col-end-5" size="sm" value={dataFornecedor?.telefoneFornecedor || ''}  labelPlacement="outside" name={`telefone${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-5 flex justify-end items-center pr-2">
								<label className='text-xs'>Celular</label>
							</div>
							<Input className="w-84 col-start-6 col-end-8" size="sm" value={dataFornecedor?.celularFornecedor || ''}  labelPlacement="outside" name={`celular${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-1">
								<label className='text-xs'>E-mail</label>
							</div>
							<Input className="w-84 col-start-2 col-end-5" size="sm" value={dataFornecedor?.emailFornecedor || ''} labelPlacement="outside" name={`email${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-5 flex justify-end items-center pr-2">
								<label className='text-xs'>Site</label>
							</div>
							<Input className="w-84 col-start-6 col-end-8" size="sm" value={dataFornecedor?.siteFornecedor || ''} labelPlacement="outside" name={`site${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>	
						</div>
						</>
					)
				case "Representante":
					return(
						<>
						<div className="w-full h-full grid grid-cols-8 gap-y-2 mt-2">
							<div className="col-start-1">
								<label className='text-xs'>Contato</label>
							</div>
							<Input className="w-96 col-span-7" value={dataRepresentante?.contatoFornecedor || ''} size="sm" labelPlacement="outside" name={`contato${type}`}
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-1">
								<label className='text-xs'>Telefone</label>
							</div>
							<Input className="w-84 col-start-2 col-end-5" size="sm" value={dataRepresentante?.telefoneFornecedor || ''}  labelPlacement="outside" name={`telefone${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-5 flex justify-end items-center pr-2">
								<label className='text-xs'>Celular</label>
							</div>
							<Input className="w-84 col-start-6 col-end-8" size="sm" value={dataRepresentante?.celularFornecedor || ''}  labelPlacement="outside" name={`celular${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-1">
								<label className='text-xs'>E-mail</label>
							</div>
							<Input className="w-84 col-start-2 col-end-5" size="sm" value={dataRepresentante?.emailFornecedor || ''} labelPlacement="outside" name={`email${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="col-start-5 flex justify-end items-center pr-2">
								<label className='text-xs'>Site</label>
							</div>
							<Input className="w-84 col-start-6 col-end-8" size="sm" value={dataRepresentante?.siteFornecedor || ''} labelPlacement="outside" name={`site${type}`} 
								autoComplete="off" onChange={(e) => {handleChange(e), handleRender(e)}}/>	
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