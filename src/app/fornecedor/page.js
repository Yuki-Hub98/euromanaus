"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import SuccessAlert from "../../components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import React, {useState} from "react";


export default function Fornecedor () {
    const [option, setOption] = useState('departamento');
    const [tableData, setTableData] = useState();
    const [status, setStatus] = useState();


    return (
        <>
        <div className="flex flex-col pl-2 h-screen bg-[#0000008e] ">
            <div className='w-full h-6 absolute top-2'>
                    <Breadcrumbs color='primary'>
                        <BreadcrumbItem>Cadastro</BreadcrumbItem>
                        <BreadcrumbItem>Compras</BreadcrumbItem>
                        <BreadcrumbItem>Fornecedor</BreadcrumbItem>
                    </Breadcrumbs>
            </div>
                { status?.descricao ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com"/> </> ): (null) }
                { status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Deletado com"/> </> ): (null) }
            <TopButtons />
            
        </div>
        </>
    )
}