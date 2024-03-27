"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import TopButtons from "@/components/ui/topButtons";
import TableRender from "@/components/ui/table/tableRender";
import MiniSideBarButtons from "@/components/ui/miniSideBarButtons";
import { GetProduto } from "@/app/actions/produto";
import useGetData from "@/hooks/services/useGetData";
import { DelProduto, PostProduto, PutProdudo } from "@/app/actions/produto";
import Layout from "@/components/ui/layout/layout";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";

export default function Produtos () {
	const option = "produtos"
	const [valueTable, setValueTable] = useState();

	const { warningGet , resultGet , ReceiveGet } = useGetData(GetProduto)
	const { statusPost, warningPost, ReceivePost } = usePostData(PostProduto);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutProdudo);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelProduto)
	
	const ValueTable = (value) => {
		setValueTable(value)
	}

	useEffect(() => {
		ReceiveGet("produtos")
	},[])

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>Produtos</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<TopButtons title={option} option={option} GetData={ReceiveGet}/>
			{statusPost} {statusEdit} {statusDelete}
			{warningGet} {warningPost} {warningEdit} {warningDelete}
			<div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
				<MiniSideBarButtons name={option} valueTable={valueTable} SetValueTable={setValueTable} PostData={ReceivePost} PutData={ReceivePut} 
				DeleteData={DeleteData}/>
				<div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
					<TableRender data={resultGet} name={option} buttons={false} style={"table-auto whitespace-nowrap"} ValueTable={ValueTable}/>
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