"use client";
import React, {useState} from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import SuccessAlert from "../../components/SuccessAlert";
import TopButtons from "@/components/TopButtons";
import MiniSideBarButtons from "@/components/MiniSideBarButtons";
import TableRender from "@/components/TableRender";
import { PostFornecedor, GetFornecedor } from "../actions/fornecedor";

export default function Fornecedor () {
    const option = "fornecedor"
    const [tableData, setTableData] = useState([{}]);
    const [status, setStatus] = useState();
    const [valueTable, setValueTable] = useState();
    

    const ValueTable = (value) => {
        setValueTable(value)
    }

    const PostData = (nameRequest, data) => {
        if (data) {
            Resgister(nameRequest, data)
        }
    }

    const GetData = (nameRequest, data) => {
        if (data) {
            Search(nameRequest, data);
        }else{
            Search(nameRequest)
        }
        
    }

    const Resgister = async (nameRequest, data) =>{
        if (data) {
            const statusData = await PostFornecedor(nameRequest, data);
            setStatus(statusData);
        }
    }

    const Search = async (nameRequest, dataGet) =>{
        if (dataGet) {
            const data = await GetFornecedor(nameRequest, dataGet);
            setTableData(data)
        }else{
            const data = await GetFornecedor(nameRequest)
            setTableData(data)
        }
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
                { status?.razaoSocialFornecedor ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) }
                { status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Deletado com com Sucesso !"/> </> ): (null) }
            <TopButtons title={option} option={option} GetData={GetData} />
            <div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
                <MiniSideBarButtons name={option} PostData={PostData}/>
                <div className='w-full flex overflow-y-auto h-50 flex-col rounded'>
                    <TableRender data={tableData} name={option} ValueTable={ValueTable} />
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