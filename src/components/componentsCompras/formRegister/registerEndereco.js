import React from "react";
import { Button, Input, useDisclosure} from "@nextui-org/react";
import RerenciaCep from "@/components/componentsCompras/formRegister/referenciaCep"


const RegisterEndereco = (props) => {
		const { type, 
		dataFornecedor, 
		dataRepresentante,
		handleChange,
		handleRender,
		req,
		fillToCep,
		SetData
		} = props

		const { isOpen , onOpen , onOpenChange } = useDisclosure();

		const renderInput = (op) =>{
			switch (op) {
				case "Fornecedor":
					return(
						<>
						<div className="w-full h-full grid grid-cols-8 gap-y-2 mt-2">
							<div className="w-full items-center">
								<label className='text-xs pl-1.5'>CEP<sup>*</sup></label>
							</div>
							<Input className="col-start-2 col-end-4" isRequired size="sm" labelPlacement="outside" autoComplete="off" value={dataFornecedor?.cepFornecedor || ''} maxLength={8} name={`cep${type}`}
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<Button onClick={() => fillToCep()} className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20 col-start-4 col-end-5 left-2" size="sm" >Preencher dados</Button>
							<Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20 col-start-5 col-end-6 left-4" size="sm" >Referencia</Button>
							<RerenciaCep dataFornecedor={dataFornecedor} dataRepresentante={dataRepresentante}
									isOpen={isOpen} handleChange={handleChange} handleRender={handleRender} SetData={SetData} type={type} 
									size={"3xl"} h={"h-3/4"} onOpenChange={onOpenChange}/>
							<div className="col-start-1">
								<label className='text-xs'>Endereço<sup>*</sup></label>
							</div>
							<Input className="w-96 col-start-2 col-end-6" isRequired size="sm" autoComplete="off" value={dataFornecedor?.enderecoFornecedor || ''} labelPlacement="outside" name={`endereco${type}`}
								onChange={(e) => {handleChange(e), handleRender(e) }}/>
							<div className="w-full items-center col-start-6 flex justify-end pr-2">
								<label className='text-xs'>Número</label>
							</div>
							<Input className="col-start-7" isRequired size="sm" autoComplete="off" value={dataFornecedor?.numeroFornecedor || ''}  labelPlacement="outside" name={`numero${type}`} 
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="w-full items-center col-start-1">
								<label className='text-xs'>Complemento</label>
							</div>
							<Input size="sm" className="w-96 col-span-7" autoComplete="off" value={dataFornecedor?.complementoFornecedor || ''} labelPlacement="outside" name={`complemento${type}`}
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="items-center">
								<label className='text-xs'>Bairro<sup>*</sup></label>
							</div>
							<Input className="w-84 col-start-2 col-end-5" isRequired size="sm" autoComplete="off" value={dataFornecedor?.bairroFornecedor || ''} labelPlacement="outside" name={`bairro${type}`}
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="flex justify-end items-center pr-2">
								<label className='text-xs pl-1'>Cidade<sup>*</sup></label>
							</div>
							<Input className="w-28" isRequired size="sm" autoComplete="off" value={dataFornecedor?.cidadeFornecedor || ''} labelPlacement="outside" name={`cidade${type}`} 
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							<div className="flex justify-end items-center gap-2">
								<label className='text-xs'>UF<sup>*</sup></label>
								<Input className="w-10" isRequired size="sm" autoComplete="off" value={dataFornecedor?.ufFornecedor || ''} labelPlacement="outside" name={`uf${type}`} 
								onChange={(e) => {handleChange(e), handleRender(e)}}/>
							</div>
						</div>
						</>
					)
				case "Representante":
					return(
						<>
							<div className="w-full h-full grid grid-cols-8 gap-y-2 mt-2">
								<div className="w-full items-center">
									<label className='text-xs pl-1.5'>CEP<sup>*</sup></label>
								</div>
								<Input className="col-start-2 col-end-4" isRequired size="sm" labelPlacement="outside" autoComplete="off" value={dataRepresentante?.cepFornecedor || ''} maxLength={8} name={`cep${type}`}
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
								<Button onClick={() => fillToCep()} className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20 col-start-4 col-end-5 left-2" size="sm" >Preencher dados</Button>
								<Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20 col-start-5 col-end-6 left-4" size="sm" >Referencia</Button>
								<RerenciaCep dataFornecedor={dataFornecedor} dataRepresentante={dataRepresentante}
										isOpen={isOpen} handleChange={handleChange} handleRender={handleRender} SetData={SetData} type={type} 
										size={"3xl"} h={"h-3/4"} onOpenChange={onOpenChange}/>
								<div className="col-start-1">
									<label className='text-xs'>Endereço<sup>*</sup></label>
								</div>
								<Input className="w-96 col-start-2 col-end-6" isRequired size="sm" autoComplete="off" value={dataRepresentante?.enderecoFornecedor || ''} labelPlacement="outside" name={`endereco${type}`}
									onChange={(e) => {handleChange(e), handleRender(e) }}/>
								<div className="w-full items-center col-start-6 flex justify-end pr-2">
									<label className='text-xs'>Número</label>
								</div>
								<Input className="col-start-7" isRequired size="sm" autoComplete="off" value={dataRepresentante?.numeroFornecedor || ''}  labelPlacement="outside" name={`numero${type}`} 
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
								<div className="w-full items-center col-start-1">
									<label className='text-xs'>Complemento</label>
								</div>
								<Input size="sm" className="w-96 col-span-7" autoComplete="off" value={dataRepresentante?.complementoFornecedor || ''} labelPlacement="outside" name={`complemento${type}`}
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
								<div className="items-center">
									<label className='text-xs'>Bairro<sup>*</sup></label>
								</div>
								<Input className="w-84 col-start-2 col-end-5" isRequired size="sm" autoComplete="off" value={dataRepresentante?.bairroFornecedor || ''} labelPlacement="outside" name={`bairro${type}`}
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
								<div className="flex justify-end items-center pr-2">
									<label className='text-xs pl-1'>Cidade<sup>*</sup></label>
								</div>
								<Input className="w-28" isRequired size="sm" autoComplete="off" value={dataRepresentante?.cidadeFornecedor || ''} labelPlacement="outside" name={`cidade${type}`} 
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
								<div className="flex justify-end items-center gap-2">
									<label className='text-xs'>UF<sup>*</sup></label>
									<Input className="w-10" isRequired size="sm" autoComplete="off" value={dataRepresentante?.ufFornecedor || ''} labelPlacement="outside" name={`uf${type}`} 
									onChange={(e) => {handleChange(e), handleRender(e)}}/>
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