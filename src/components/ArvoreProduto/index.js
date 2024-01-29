"use client";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import {GetArvoreProduto, PostArvoreProduto} from "@/app/actions/arvore-produto";
import SuccessAlert from "../SuccessAlert";
import MiniSideBar from "../MiniSideBar";
import TopButtons from "../TopButtons";
import Warning from "../Warning";
import Table from "../Table";

const ArvoreProduto = (props) =>{

    const [option, setOption] = useState('departamento');
    const [tableData, setTableData] = useState();
    const [status, setStatus] = useState();
    const [dataPost, setDataPost] = useState();
    const [dataGet, setDataGet] = useState();
    const [dataModal, setDataModal] = useState();
    const [nameRequestMiniSideBar, setNameRequestMiniSideBar] = useState();
    const [requestMiniSideBar, setRequestMiniSideBar] = useState(false)
    const [nameRequest, setNameRequest] = useState()
    const [valueTable, setValueTable] = useState()
    

    const ChosenOption = (option, request) => {
        const op = option.toLowerCase() === "especificação" ? "especificacao" : option.toLowerCase()
        if (request) {
            setRequestMiniSideBar(request)
        }
        setNameRequestMiniSideBar(op);
        setTableData(null)
        return setOption(op)
    }

    const ValueTable = (value) => {
        setValueTable(value)
    }

    console.log(valueTable)

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

    useEffect(() => {
        if(dataPost) {
            Resgister(nameRequest, dataPost)
        }
        
        if (dataGet) {
            Search(nameRequest, dataGet)
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
        setNameRequest(null)
    }

    const modalData = async (opcao) =>{
        if (opcao){
            const data = await GetArvoreProduto(opcao)
            setDataModal(data)
            setRequestMiniSideBar(false)
        }
        
    }

    const Resgister = async (nameRequest, data) => {
        if(data){
            const statusData = await PostArvoreProduto(nameRequest, data);
            setStatus(statusData)
            return Clear()
            
        }
    }

    const Search = async (nameRequest, dataGet) => {
        if (dataGet) {
            const data =  await GetArvoreProduto(nameRequest, dataGet)
            setTableData(data)
            return Clear()
            
        }else{
            const data =  await GetArvoreProduto(nameRequest)
            setTableData(data)
            return Clear()
        }
    }
    
    const CloseStatus = () => {
        return setStatus(null);
    }

    return (
        <>
            <div className='w-full h-6 absolute top-2'>
                <Breadcrumbs color='primary'>
                    <BreadcrumbItem>Cadastro</BreadcrumbItem>
                    <BreadcrumbItem>Compras</BreadcrumbItem>
                    <BreadcrumbItem>Árvore de Produto</BreadcrumbItem>
                    <BreadcrumbItem>{option?.charAt(0).toUpperCase() + option?.slice(1)}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            { status?.descricao ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com"/> </> ): (null) }
            <TopButtons title={option?.charAt(0).toUpperCase() + option?.slice(1)} option={option} PostData={PostData} GetData={GetData} dataModal={dataModal}/>
            {status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
            <div className='flex h-4/5 overflow-y-auto mt-1.5 w-full flex-row'>
                <MiniSideBar ChosenOption={ChosenOption}  name={props?.name} />
                <div className='flex w-full overflow-y-auto h-50 flex-col rounded'>
                    <div className='w-full top-0 overflow-y-auto h-full bg-[#EDEDED]'>
                        <Table data={tableData} name={option} ValueTable={ValueTable}/>
                    </div>
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
export default ArvoreProduto; 