"use client";
import React, {useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import TopButtons from "@/components/TopButtons";
import TableRender from "@/components/TableRender";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import useGetData from "@/hooks/services/useGetData";
import { DeleteModelo, EditModelo, RegisterModelo, SearchModelo } from "@/app/actions/modelo";
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