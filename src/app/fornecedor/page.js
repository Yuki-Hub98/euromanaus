"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import SuccessAlert from "../../components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import Table from "@/components/Table";
import React, {useEffect, useState} from "react";

export default function Fornecedor () {
    const [option, setOption] = useState('fornecedor');
    const [tableData, setTableData] = useState();
    const [status, setStatus] = useState();
    const [valueTable, setValueTable] = useState();
    

    const ValueTable = (value) => {
        setValueTable(value)
    }

    const CloseStatus = () => {
        return setStatus(null);
    }

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
            <TopButtons title={option} />
            <div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
                <MiniSideBarButtons />
                <div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
                    <div className='w-full top-0 overflow-y-auto h-full bg-[#EDEDED]'>
                        <Table data={tableData} name={option} ValueTable={ValueTable} />
                    </div>
                    <div className='w-full h-10 bg-[#CFCFCF]'>
                        <span className='text-black'>
                            teste teste teste teste
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}