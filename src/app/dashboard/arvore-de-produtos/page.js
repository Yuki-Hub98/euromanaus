"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , { useEffect, useState } from "react";
import { GetArvoreProduto } from "@/app/actions/arvore-produto";
import SuccessAlert from "@/components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import Warning from "@/components/Warning";
import TableRender from "@/components/TableRender";
import MiniSideBarNav from "@/components/MiniSideBarNav";
import { navArvoreProduto } from "@/DB/data";
import useGetData from "@/hooks/services/useGetData";

export default function ArvoreDeProduto () {
	const [option, setOption] = useState('departamento');
	const [tableData, setTableData] = useState();
	const [dataModal, setDataModal] = useState();
	const [nameRequestMiniSideBar, setNameRequestMiniSideBar] = useState();
	const [requestMiniSideBar, setRequestMiniSideBar] = useState(false);
	const [valueTable, setValueTable] = useState();

	const { warningGet , resultGet , ReceiveGet } = useGetData(GetArvoreProduto)

	const ChosenOption = (option, request) => {
		const op = option.toLowerCase() === "especificação" ? "especificacao" : option.toLowerCase()
		if (request) {
			setRequestMiniSideBar(request)
		}
		setNameRequestMiniSideBar(op);
		setTableData([{}])
		setValueTable(null)
		return setOption(op)
	}

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		if (requestMiniSideBar) {
			switch (nameRequestMiniSideBar) {
				case 'linha':
					modalData('departamento')
					break;
				case 'familia':
					modalData('linha')
					break;
				case 'grupo':
					modalData('familia')
					break;
				default:
					break;
			}
		}
	})

	const modalData = async (opcao) =>{
		if (opcao){
			const data = await GetArvoreProduto(opcao)
			setDataModal(data)
			setRequestMiniSideBar(false)
		}
		
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>Árvore de Produto</BreadcrumbItem>
					<BreadcrumbItem className='capitalize'>{option}</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<TopButtons title={option} size={"md"} h={'h-3/6'} option={option} valueTable={valueTable} GetData={ReceiveGet} 
			dataModal={dataModal} tableData={tableData} SetValueTable={setValueTable}/>
				{ warningGet }
				<div className=' w-full flex h-4/5 overflow-y-auto mt-1.5 flex-row'>
					<MiniSideBarNav ChosenOption={ChosenOption}  name={navArvoreProduto} />
					<div className='w-full flex h-50 overflow-y-auto  flex-col rounded'>
						<TableRender data={resultGet} name={option} ValueTable={ValueTable} type={"search"}/>
						<div className='w-full h-10 bg-[#CFCFCF]'>
							<span className='text-black'>
								teste teste teste teste
							</span>
						</div>
					</div>
			</div>
		</>
	)
}

