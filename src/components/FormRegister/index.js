"use Client";
import React , {useState} from "react";
import RegisterPessoa from "./registerPessoa";
import RegisterEndereco from "./registerEndereco";
import RegisterContato from "./registerContato";
import RegexToSave from "@/functions/regexToSave";

const FormRegister = (props) => {
		const {type, 
		handleChange, 
		data,
		request,
		fill,
		SetData
		} = props

		const [dataRender, setDataRender] = useState(data);

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
				<form className="w-full flex flex-col ">
						<RegisterPessoa type={type} handleChange={handleChange} handleRender={handleRender} dataFornecedor={dataRender}
						dataRepresentante={dataRender}/>
						<RegisterEndereco type={type} handleChange={handleChange} handleRender={handleRender} dataRepresentante={dataRender} fillToCep={fill} 
						req={request} dataFornecedor={dataRender} SetData={SetData}/>
						<RegisterContato type={type} handleChange={handleChange} handleRender={handleRender} dataFornecedor={dataRender} 
						dataRepresentante={dataRender} />
				</form>
				</>
		)


}

export default FormRegister