"use client";
import React , {useEffect, useState} from "react";
import {Button,  Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";
import { usePathname } from "next/navigation";

const Search = (props) => {
		const router = usePathname()
		const [dataToGet, setDataToGet] = useState();
		const [dataSearchDesc, setDataSearchDesc] = useState();
		const {ReceiveGet} = props
		const { data } = props
		const Clear = () => {
				setDataToGet(null)
				setDataSearchDesc(null)
		}

		const handleChange = (e) =>{
				const {value, ariaLabel} = e.target
				switch (ariaLabel) {
						case "Razão Social":
								setDataSearchDesc(dataSearch => ({
										...dataSearch,
										razaoSocialFornecedor: value
								}))
								break;
						case "CPF/CNPJ":
								setDataSearchDesc(dataSearch => ({
										...dataSearch,
										cpfCnpjFornecedor: value
								}))
								break;
						case "Nome Fantasia":
								setDataSearchDesc(dataSearch => ({
												...dataSearch,
												nomeFantasiaFornecedor: value
								}))
								break;
						case "Descrição":
								setDataSearchDesc(dataSearch => ({
										...dataSearch,
										descricao: RegexToSave(value)
						}))
						default:
								break;
				}
		}

		const Click = () => {
				if (dataSearchDesc) {
						return setDataToGet(dataSearchDesc)
				}else{
						return ReceiveGet(data?.option);
				}
		}

		useEffect(() => {
				if (dataToGet) {
						ReceiveGet(data?.option, dataToGet);
						Clear();
				}
		})
		
		const optionPage = (page) => {
				switch(page){
						case "/arvore-de-produtos":
								return(
										<>
										<div className='h-12 flex flex-row justify-items-center items-center'>
												<Input className='w-64' labelPlacement='outside-left' placeholder=" " 
												onChange={(e) => handleChange(e)} color="primary" label="Descrição"/>
												<Button color="primary" size='sm' variant="ghost" onClick={() =>  Click()} >
														Pesquisar
												</Button>
										</div>
										</>
								)
						case "/fornecedor":
								return(
										<>
										<div className='flex flex-row justify-center items-center gap-2'>
												<Input  className='w-64'
												label="Razão Social"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} color="primary"/>
												<Input  className='w-64'
												label="CPF/CNPJ"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} color="primary"/>
												<Input  className='w-64'
												label="Nome Fantasia"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} color="primary"/>
												<div className="pt-6">
												<Button color="primary" size='sm' variant="ghost"  onClick={() =>  Click()}>
														Pesquisar
												</Button>
												</div>
										</div>
										</>
								)
				}
		}

		return(
				<>
				{optionPage(router)}
				</>
		)
}

export default Search