"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , { useEffect, useState } from "react";
import { DelArvoreProduto, GetArvoreProduto, PostArvoreProduto, PutArvoreProduto } from "@/app/actions/arvore-produto";
import TopButtons from "@/components/ui/topButtons";
import TableRender from "@/components/ui/table/tableRender";
import MiniSideBarNav from "@/components/ui/miniSideBarNav";
import { navArvoreProduto } from "@/DB/data";
import useGetData from "@/hooks/services/useGetData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import useDeleteData from "@/hooks/services/useDeleteData";
import Layout from "@/components/ui/layout/layout";

export default function ArvoreDeProduto () {
	const [option, setOption] = useState('departamento');
	const [tableData, setTableData] = useState();
	const [dataModal, setDataModal] = useState();
	const [nameRequestMiniSideBar, setNameRequestMiniSideBar] = useState();
	const [requestMiniSideBar, setRequestMiniSideBar] = useState(false);
	const [valueTable, setValueTable] = useState();

	const { resultGet , warningGet, ReceiveGet } = useGetData(GetArvoreProduto)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostArvoreProduto);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutArvoreProduto);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelArvoreProduto)
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

	useEffect(() => {
		ReceiveGet("departamento")
	},[])

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
			<TopButtons title={option} option={option} valueTable={valueTable} GetData={ReceiveGet} DeleteData={DeleteData} 
			PostData={ReceivePost} PutData={ReceivePut}
			dataModal={dataModal} tableData={tableData} SetValueTable={setValueTable} />
				{statusPost} {statusEdit} {statusDelete}
				{warningGet} {warningPost} {warningEdit} {warningDelete}
				<div className=' w-full flex h-4/5 overflow-y-auto mt-1.5 flex-row'>
					<MiniSideBarNav ChosenOption={ChosenOption}  name={navArvoreProduto} />
					<div className='w-full flex h-50 overflow-y-auto  flex-col rounded'>
						<TableRender data={resultGet} name={option} buttons={false} ValueTable={ValueTable} style={"w-1/3"} type={"search"}/>
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

