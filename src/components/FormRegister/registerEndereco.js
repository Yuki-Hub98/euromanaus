import React from "react";
import { Button, Input, useDisclosure} from "@nextui-org/react";
import RerenciaCep from "./referenciaCep";

const RegisterEndereco = (props) => {
		const { type, 
		dataFornecedor, 
		dataRepresentante,
		handleChange,
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
										<div className="w-full p-2">
												<div className="w-full flex flex-row gap-[3.7rem] mb-2 items-center"> 
														<label className='text-xs pl-1.5'>CEP<sup>*</sup></label>
														<Input className="w-40 " isRequired size="sm" labelPlacement="outside" autoComplete="off" value={dataFornecedor?.cepFornecedor || ''} maxLength={8} name={`cep${type}`}
														onChange={(e) => {handleChange(e) }}/>
														<Button onClick={() => fillToCep(!req)} className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" >Preencher dados</Button>
														<Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Referencia</Button>
														<RerenciaCep dataFornecedor={dataFornecedor} dataRepresentante={dataRepresentante}
																isOpen={isOpen} handleChange={handleChange} SetData={SetData} type={type} 
																size={"3xl"} h={"h-3/4"} onOpenChange={onOpenChange}/>
												</div>
												<div className="w-full flex flex-row gap-2 mb-2 items-center"> 
														<div className="w-[60%] flex flex-row gap-8 pl-1 items-center">
																<label className='text-xs'>Endereço<sup>*</sup></label>
																<Input className="w-96" isRequired size="sm" autoComplete="off" value={dataFornecedor?.enderecoFornecedor || ''} labelPlacement="outside" name={`endereco${type}`}
																onChange={(e) => {handleChange(e) }}/>
														</div>
														<label className='text-xs'>Número</label>
														<Input className="w-24" isRequired size="sm" autoComplete="off" value={dataFornecedor?.numeroFornecedor || ''}  labelPlacement="outside" name={`numero${type}`} 
														onChange={(e) => {handleChange(e)}}/>
												</div>
												<div className="w-full flex flex-row gap-[0.80rem] mb-2 items-center">
														<label className='text-xs'>Complemento</label>
														<Input size="sm" className="w-96" autoComplete="off" value={dataFornecedor?.complementoFornecedor || ''} labelPlacement="outside" name={`complemento${type}`}
														onChange={(e) => {handleChange(e)}}/>
												</div>
												<div className="w-full flex flex-row mb-2 gap-2 items-center">
														<div className="w-[60%] flex flex-row gap-[2.80rem] pl-2 items-center">
																<label className='text-xs'>Bairro<sup>*</sup></label>
																<Input className="w-96" isRequired size="sm" autoComplete="off" value={dataFornecedor?.bairroFornecedor} labelPlacement="outside" name={`bairro${type}`}
																onChange={(e) => {handleChange(e)}}/>
														</div>
														<label className='text-xs pl-1'>Cidade<sup>*</sup></label>
														<Input className="w-32" isRequired size="sm" autoComplete="off" value={dataFornecedor?.cidadeFornecedor || ''} labelPlacement="outside" name={`cidade${type}`} 
														onChange={(e) => {handleChange(e)}}/>
														<label className='text-xs'>UF<sup>*</sup></label>
														<Input className="w-10" isRequired size="sm" autoComplete="off" value={dataFornecedor?.ufFornecedor || ''} labelPlacement="outside" name={`uf${type}`} 
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
														<label className='text-xs pl-1.5'>CEP<sup>*</sup></label>
														<Input className="w-40 " isRequired size="sm" value={dataRepresentante?.cepRepresentante || ''} autoComplete="off" labelPlacement="outside" maxLength={8} name={`cep${type}`}
														onChange={(e) => {handleChange(e)}}/>
														<Button onClick={() => fillToCep(!req)} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Preencher dados</Button>
														<Button onPress={onOpen} className="bg-[#edca62b4] w-26 shadow-lg shadow-indigo-500/20" size="sm" >Referencia</Button>
														<RerenciaCep dataFornecedor={dataFornecedor} dataRepresentante={dataRepresentante}
																isOpen={isOpen} handleChange={handleChange} SetData={SetData} type={type} 
																size={"3xl"} h={"h-3/4"} onOpenChange={onOpenChange}/>
												</div>
												<div className=" w-full flex flex-row gap-2 mb-2 items-center"> 
														<div className="w-[60%] flex flex-row gap-8 pl-1 items-center">
																<label className='text-xs'>Endereço<sup>*</sup></label>
																<Input className="w-96" isRequired size="sm" value={dataRepresentante?.enderecoRepresentante || ''} autoComplete="off" labelPlacement="outside" name={`endereco${type}`}
																onChange={(e) => {handleChange(e)}}/>
														</div>
														<label className='text-xs'>Número</label>
														<Input className="w-24" size="sm" value={dataRepresentante?.numeroRepresentante || ''} autoComplete="off" labelPlacement="outside" name={`numero${type}`} 
														onChange={(e) => {handleChange(e)}}/>
												</div>
												<div className="w-full flex flex-row gap-[0.80rem] mb-2 items-center">
														<label className='text-xs'>Complemento</label>
														<Input size="sm" className="w-96" value={dataRepresentante?.complementoRepresentante} autoComplete="off" labelPlacement="outside" name={`complemento${type}`}
														onChange={(e) => {handleChange(e)}}/>
												</div>
												<div className="w-full flex flex-row mb-2 gap-2 items-center">
														<div className="w-[60%] flex flex-row gap-[2.80rem] pl-2 items-center">
																<label className='text-xs'>Bairro<sup>*</sup></label>
																<Input className="w-96" isRequired size="sm" value={dataRepresentante?.bairroRepresentante || ''} autoComplete="off" labelPlacement="outside" name={`bairro${type}`}
																onChange={(e) => {handleChange(e)}}/>
														</div>
														<label className='text-xs pl-1'>Cidade<sup>*</sup></label>
														<Input className="w-32" isRequired size="sm" value={dataRepresentante?.cidadeRepresentante || ''} autoComplete="off" labelPlacement="outside" name={`cidade${type}`} 
																onChange={(e) => {handleChange(e)}}/>
														<label className='text-xs'>UF<sup>*</sup></label>
														<Input className="w-10"isRequired size="sm" value={dataRepresentante?.ufRepresentante || ''} autoComplete="off" labelPlacement="outside" name={`uf${type}`} 
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