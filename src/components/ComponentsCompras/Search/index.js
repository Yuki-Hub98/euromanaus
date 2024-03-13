"use client";
import React , {useEffect, useState} from "react";
import {Button,  Input, Select, SelectItem} from "@nextui-org/react";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import RegexToSave from "@/functions/regexToSave";
import { GetModelo } from "@/app/actions/produto";


const Search = (props) => {
		const [dataToGet, setDataToGet] = useState();
		const [dataSearchDesc, setDataSearchDesc] = useState();
		const [dataModal, setDataModal] = useState({
			departamento:[],
			linha:[],
			modelo:[]
		});
		const {ReceiveGet} = props
		const { data, router } = props
		const Clear = () => {
				setDataToGet(null)
				setDataSearchDesc(null)
		}

		const RequestModal = async () =>{
			const dataDepartamento = await GetArvoreProduto("departamento")
	
			setDataModal(data=> ({
				...data,
				["departamento"]: [dataDepartamento],
			})) 
		}

		const RequestDepartamento = async (e) => {
			const {name, value} = e.target
			if (name === "departamento") {
				const linhaData = await GetArvoreProduto("linha", value, "produto")
				setDataModal(data => ({
					...data,
					["linha"]: [linhaData]
				}))
			}
		}

		const RequestModelo = async (e) =>{
			const {value} = e.target
			const modeloData = await GetModelo(value)
				setDataModal(data => ({
					...data,
					["modelo"]: [modeloData]
				}))
		}

		const handleChange = (e) =>{
			const {value, name} = e.target
			setDataSearchDesc(dataSearch => ({
				...dataSearch,
				[name]: RegexToSave(value)
			}))
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
	
		useEffect(()=> {
				RequestModal();
		},[])
		
		const optionPage = (page) => {
				switch(page){
						case "/dashboard/arvore-de-produtos":
								return(
										<>
										<div className='h-12 gap-2 flex flex-row justify-items-center items-center'>
												<Input className='w-72' labelPlacement='outside-left' placeholder=" " 
												onChange={(e) => handleChange(e)} color="primary" label="Descrição" name="descricao"/>
												<Button color="primary" size='sm' variant="ghost" onClick={() =>  Click()} >
														Pesquisar
												</Button>
										</div>
										</>
								)
						case "/dashboard/fornecedor":
								return(
										<>
										<div className='flex flex-row justify-center items-center gap-2'>
												<Input  className='w-64'
												label="Razão Social"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} name="razaoSocialFornecedor" color="primary"/>
												<Input  className='w-64'
												label="CPF/CNPJ"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} name="cpfCnpjFornecedor" color="primary"/>
												<Input  className='w-64'
												label="Nome Fantasia"
												labelPlacement={"outside"}
												placeholder=" "
												size="sm"
												onChange={(e) => handleChange(e)} name="nomeFantasiaFornecedor" color="primary"/>
												<div className="pt-6">
												<Button color="primary" size='sm' variant="ghost"  onClick={() =>  Click()}>
														Pesquisar
												</Button>
												</div>
										</div>
										</>
								)
						case "/dashboard/produtos":
						return(
							<>
							<div className='w-full h-full grid grid-cols-8 pt-5 gap-2 items-center justify-center'>
								<div className="flex flex-row items-center gap-2" >
									<span className="text-xs text-[#edca62]">Codigo</span>
									<Input 
													labelPlacement="outside"
													size="sm"
													onChange={(e) => handleChange(e)} name="idItem" color="primary"/>
								</div>
								<div className="flex flex-row col-span-2 items-center gap-2" >
									<span className="text-xs text-[#edca62]">Descrição</span>
									<Input 
													labelPlacement="outside"
													size="sm"
													className="w-96"
													onChange={(e) => handleChange(e)} name="descricao" color="primary"/>
								</div>
								<div className="flex flex-row col-span-2 items-center gap-2" >
									<span className="text-xs text-[#edca62]">Fornecedor</span>
									<Input
													labelPlacement="outside"
													size="sm"
													onChange={(e) => handleChange(e)} name="fornecedor" color="primary"/>
								</div>
								<div className="flex flex-row items-center gap-2" >
									<span className="text-xs text-[#edca62]">Unidade</span>
									<Input
													labelPlacement="outside"
													size="sm"
													onChange={(e) => handleChange(e)} name="unidade" color="primary"/>
								</div>
								<div className="w-8/12 flex flex-row items-center col-span-2 gap-2" >
									<span className="text-xs text-[#edca62]">Departamento</span>
									<Select size="sm" color="primary" onChange={(e) => {handleChange(e), RequestDepartamento(e)}} labelPlacement="outside" name="departamento" aria-label="departamento" >
										{dataModal?.departamento[0]?.map((departamento) => (
											<SelectItem key={departamento.descricao} value={departamento.descricao}>{departamento.descricao}</SelectItem>
										))}
									</Select>
								</div>
								<div className="flex flex-row items-center gap-2" >
									<span className="text-xs text-[#edca62]">Linha</span>
									<Select className="w-10/12" size="sm" onChange={(e) => {handleChange(e), RequestModelo(e)}} color="primary" name="linha" labelPlacement="outside-left" aria-label="linha" >
										{dataModal?.linha[0]?.map((linha) => (
											<SelectItem key={linha.linha} value={linha.linha}>{linha.linha}</SelectItem>
										))}
									</Select>
								</div>
								<div className="flex flex-row items-center gap-2 mr-1" >
									<span className="text-xs text-[#edca62]">Modelo</span>
									<Select className="w-10/12" size="sm" onChange={(e) => handleChange(e)} color="primary" name="modelo" labelPlacement="outside-left" aria-label="modelo" >
										{dataModal?.modelo[0]?.map((modelo) => (
											<SelectItem key={modelo.modelo} value={modelo.modelo}>{modelo.modelo}</SelectItem>
										))}
									</Select>
								</div>
								<div className="ml-2">
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