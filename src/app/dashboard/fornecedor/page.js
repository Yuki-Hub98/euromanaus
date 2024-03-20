"use client";
import React, {useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import TopButtons from "@/components/TopButtons";
import TableRender from "@/components/TableRender";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import { GetFornecedor } from "@/app/actions/fornecedor"
import useGetData from "@/hooks/services/useGetData";



export default function Fornecedor () {
	const option = "fornecedor"
	const [valueTable, setValueTable] = useState();
	const { warningGet , resultGet, ReceiveGet } = useGetData(GetFornecedor)
	

	const ValueTable = (value) => {
		setValueTable(value)
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Fornecedor</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			<TopButtons title={option} option={option} GetData={ReceiveGet} />
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons name={option} valueTable={valueTable} SetValueTable={setValueTable}/>
				{warningGet ? warningGet : null}
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} ValueTable={ValueTable} />
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