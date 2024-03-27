"use client";
import React, {useEffect, useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import TopButtons from "@/components/ui/topButtons";
import TableRender from "@/components/ui/table/tableRender";
import MiniSideBarButtons from "@/components/ui/miniSideBarButtons";
import useGetData from "@/hooks/services/useGetData";
import { DeleteModelo, EditModelo, RegisterModelo, SearchModelo } from "@/app/actions/modelo";
import Layout from "@/components/ui/layout/layout";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import useDeleteData from "@/hooks/services/useDeleteData";

export default function Modelos () {
	const option = "modelos"
	const [valueTable, setValueTable] = useState();
	const { warningGet , resultGet, ReceiveGet } = useGetData(SearchModelo)
	const { statusPost, warningPost, ReceivePost } = usePostData(RegisterModelo);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(EditModelo);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DeleteModelo)

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("modelos")
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
					<Breadcrumbs color='primary'>
						<BreadcrumbItem>Cadastro</BreadcrumbItem>
						<BreadcrumbItem>Compras</BreadcrumbItem>
						<BreadcrumbItem>Modelos</BreadcrumbItem>
					</Breadcrumbs>
			</div>
			<TopButtons title={option} option={option} GetData={ReceiveGet} />
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons name={option} valueTable={valueTable} PostData={ReceivePost} PutData={ReceivePut} 
				DeleteData={DeleteData} SetValueTable={setValueTable}/>
				{statusPost} {statusEdit} {statusDelete}
				{warningGet} {warningPost} {warningEdit} {warningDelete}
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