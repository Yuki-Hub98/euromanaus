"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , {useState} from "react";
import useGetData from "@/hooks/services/useGetData";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";
import ModalRegisterMaoDeObra from "@/components/ComponentsIndustrial/Register/modalRegisterMaoDeObra";

export default function MaoDeObra () {
	const option = "maoDeObra"
	const [valueTable, setValueTable] = useState();

	const { warningGet , resultGet , ReceiveGet } = useGetData()
	const { statusPost, warningPost, ReceivePost } = usePostData();
	const { statusEdit, warningEdit, ReceivePut } = usePutData();
	const { statusDelete, warningDelete, DeleteData } = useDeleteData()
	
	const ValueTable = (value) => {
		setValueTable(value)
	}

	return (
		<>
			<div className='w-full h-6 absolute top-2'>
				<Breadcrumbs color='primary'>
					<BreadcrumbItem>Cadastro</BreadcrumbItem>
					<BreadcrumbItem>Compras</BreadcrumbItem>
					<BreadcrumbItem>Mão de Obra</BreadcrumbItem>
				</Breadcrumbs>
			</div>
			<ModalRegisterMaoDeObra/>
		</>
	)
}