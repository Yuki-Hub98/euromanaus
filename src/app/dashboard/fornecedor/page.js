"use client";
import React, {useEffect, useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import TopButtons from "@/components/ui/topButtons";
import TableRender from "@/components/ui/table/tableRender";
import MiniSideBarButtons from "@/components/ui/miniSideBarButtons";
import { GetFornecedor } from "@/app/actions/fornecedor"
import useGetData from "@/hooks/services/useGetData";
import { DelFornecedor, PostFornecedor, PutFornecedor } from "@/app/actions/fornecedor";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";



export default function Fornecedor () {
	const option = "fornecedor"
	const [valueTable, setValueTable] = useState();
	const { warningGet , resultGet, ReceiveGet } = useGetData(GetFornecedor)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostFornecedor);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutFornecedor);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelFornecedor)

	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("fornecedor")
	},[])

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
				<MiniSideBarButtons name={option} valueTable={valueTable} SetValueTable={setValueTable} PostData={ReceivePost} PutData={ReceivePut} 
				DeleteData={DeleteData}/>
				{statusPost} {statusEdit} {statusDelete}
				{warningGet} {warningPost} {warningEdit} {warningDelete}
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={ValueTable} />
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