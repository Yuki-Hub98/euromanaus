"use Client";
import React , {useEffect, useState} from "react";
import RegisterPessoa from "@/components/componentsCompras/formRegister/registerPessoa";
import RegisterEndereco from "@/components/componentsCompras/formRegister/registerEndereco"
import RegisterContato from "@/components/componentsCompras/formRegister/registerContato";
import RegexToSave from "@/functions/regexToSave";
import FormatFone from "@/functions/formatFone";

const FormRegister = (props) => {
		const {type, 
		handleChange, 
		data,
		request,
		fill,
		SetData
		} = props

		const [dataRender, setDataRender] = useState(data);

		useEffect(() => {
			setDataRender(data)
		},[data])
	
		const handleRender = (e, cpfCnpj) => {
			const {value, name} = e.target
			setDataRender(prevState => ({
				...prevState,
				[name]:RegexToSave(value)
			}))
			if (name?.includes("telefone") || name?.includes("celular")) {
				setDataRender(prevState => ({
					...prevState,
					[name]: FormatFone(value)
			}));
			}
			if (name?.includes("email") || name.includes("site")) {
				setDataRender(prevState => ({
					...prevState,
					[name]: value
				}));
			}
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