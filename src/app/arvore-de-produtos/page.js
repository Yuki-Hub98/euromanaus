"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import {GetArvoreProduto, PostArvoreProduto, PutArvoreProduto, DelArvoreProduto} from "@/app/actions/arvore-produto";
import SuccessAlert from "../../components/SuccessAlert";
import TopButtons from "../../components/TopButtons";
import Warning from "../../components/Warning";
import Table from "../../components/Table";
import MiniSideBarNav from "../../components/MiniSideBarNav";


const nav = ["Departamento", "Linha", "Familia", "Grupo", "Cor", "Especificação"]


export default function ArvoreDeProduto () {
    const [option, setOption] = useState('departamento');
    const [tableData, setTableData] = useState();
    const [status, setStatus] = useState();
    const [dataPost, setDataPost] = useState();
    const [dataGet, setDataGet] = useState();
    const [dataPut, setDataPut] = useState();
    const [dataModal, setDataModal] = useState();
    const [dataDelete, setDataDelete] = useState();
    const [nameRequestMiniSideBar, setNameRequestMiniSideBar] = useState();
    const [requestMiniSideBar, setRequestMiniSideBar] = useState(false);
    const [nameRequest, setNameRequest] = useState();
    const [valueTable, setValueTable] = useState();
    

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

    const PostData = (nameRequest, data) => {
        setDataPost(data)
        setNameRequest(nameRequest)
    }

    const GetData = (nameRequest, data) => {
        if (data) {
            setNameRequest(nameRequest)
            setDataGet(data)
        }else{
            return Search(nameRequest)
        }
    }

    const PutData = (nameRequest, data)=>{
        setDataPut(data)
        setNameRequest(nameRequest)

    }

    const DeleteData = (nameRequest, data) =>{
        setDataDelete(data)
        setNameRequest(nameRequest)
    }

    useEffect(() => {
        if(dataPost) {
            Resgister(nameRequest, dataPost)
        }
        
        if (dataGet) {
            Search(nameRequest, dataGet)
        }

        if (dataPut){
            Edit(nameRequest, dataPut)    
        }

        if (dataDelete) {
            Delete(nameRequest, dataDelete)
        }

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
    
    const Clear = () => {
        setDataPost(null)
        setDataGet(null)
        setDataPut(null)
        setDataDelete(null)
        setNameRequest(null)
    }

    const modalData = async (opcao) =>{
        if (opcao){
            const data = await GetArvoreProduto(opcao)
            setDataModal(data)
            setRequestMiniSideBar(false)
        }
        
    }

    const Delete = async (nameRequest, data) =>{
        if (data) {
            const dataStatus = await DelArvoreProduto(nameRequest, data)
            setStatus(dataStatus)
            return Clear();
        }
    }

    const Edit = async (nameRequest, data)=>{
        if (data) {
            const statusData = await PutArvoreProduto(nameRequest, data);
            setStatus(statusData)
            return Clear();
        }
    }

    const Resgister = async (nameRequest, data) => {
        if(data){
            const statusData = await PostArvoreProduto(nameRequest, data);
            setStatus(statusData)
            return Clear();
            
        }
    }

    const Search = async (nameRequest, dataGet) => {
        if (dataGet) {
            const data =  await GetArvoreProduto(nameRequest, dataGet)
            setTableData(data)
            return Clear();
            
        }else{
            const data =  await GetArvoreProduto(nameRequest)
            setTableData(data)
            return Clear();
        }
    }
    
    const CloseStatus = () => {
        return setStatus(null);
    }

    return (
        <>
        <div className="h-screen flex flex-col pl-2 bg-[#0000008e] ">
        <div className='w-full h-6 absolute top-2'>
                <Breadcrumbs color='primary'>
                    <BreadcrumbItem>Cadastro</BreadcrumbItem>
                    <BreadcrumbItem>Compras</BreadcrumbItem>
                    <BreadcrumbItem>Árvore de Produto</BreadcrumbItem>
                    <BreadcrumbItem className='capitalize'>{option}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            { status?.descricao ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com"/> </> ): (null) }
            { status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Deletado com"/> </> ): (null) }
            <TopButtons title={option} size={"md"} h={'h-3/6'} option={option} valueTable={valueTable} PostData={PostData} GetData={GetData} PutData={PutData}
            DeleteData={DeleteData} dataModal={dataModal} tableData={tableData}/>
            {status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
            <div className=' w-full flex h-4/5 overflow-y-auto mt-1.5 flex-row'>
                <MiniSideBarNav ChosenOption={ChosenOption}  name={nav} />
                <div className='w-full flex h-50 overflow-y-auto  flex-col rounded'>
                    <div className='w-full h-full top-0 overflow-y-auto  bg-[#EDEDED]'>
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

