import React, {useState} from "react";
import { Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";

const FormDadosBancarios = (props) =>{
		const {handleChange} = props

		const [dataRender, setDataRender] = useState(props?.data);

		const handleRender = (e, cpfCnpj) => {
			const {value, name} = e.target
			setDataRender(prevState => ({
				...prevState,
				[name]:RegexToSave(value)
			}))
			if ((name === "cpfCnpjFornecedor" && cpfCnpj) || (name === "cpfCnpjRepresentante" && cpfCnpj)) {
				setDataRender(prevState => ({
						...prevState,
						[name]: cpfCnpj
				}));
		}
	}

		return(
				<>
				<div className="w-9/12 max-h-full p-2">
						<h1 className="font-bold">Dados Bancarios</h1>
						<div className="w-full flex flex-row  gap-2 mt-2 mb-1 p-2 items-center"> 
								<div className="w-5/12 flex flex-row gap-5 items-center">
										<label className='text-xs'>Cod. Banco</label>
										<Input className="w-14 p-1" size="sm" value={ dataRender?.codBanco || '' } labelPlacement="outside" name="codBanco" 
												onChange={(e) => {handleChange(e), handleRender(e)}}/>
								</div>
								<label className='text-xs'>Banco</label>
								<Input className="w-40" size="sm" value={ dataRender?.banco || '' } labelPlacement="outside" name="banco" 
										onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
						<div className="flex flex-row w-full gap-10 mb-1 p-2 items-center"> 
								<label className='text-xs'>Agência</label>
								<Input className="w-40 pl-1" size="sm" value={dataRender?.agencia || ''}  labelPlacement="outside" name="agencia" 
										onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
						<div className="flex flex-row w-full gap-[3.5rem] mb-1 p-2 items-center"> 
								<label className='text-xs'>Conta</label>
								<Input className="w-40" size="sm" value={dataRender?.contaBanco || ''} labelPlacement="outside" name="contaBanco" 
										onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
						<div className="flex flex-row w-full gap-2 mb-1 p-2 items-center"> 
								<label className='text-xs'>Orgão Emissor</label>
								<Input className="w-40" size="sm" value={dataRender?.orgaoEmissorBanco || ''}  labelPlacement="outside" name="orgaoEmissorBanco" 
										onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
						<div className="flex flex-row w-full gap-[2.2rem] mb-1 p-2 items-center"> 
								<label className='text-xs'>Chave Pix</label>
								<Input className="w-40" size="sm" value={dataRender?.pix || ''} labelPlacement="outside" name="pix" 
										onChange={(e) => {handleChange(e), handleRender(e)}}/>
						</div>
				</div>
				</>
		)
}

export default FormDadosBancarios