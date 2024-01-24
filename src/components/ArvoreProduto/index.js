"use client";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import React , {useEffect, useState} from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import {GetArvoreProduto, PostArvoreProduto} from "@/app/actions/arvore-produto";
import Warning from "../Warning";
import RegisterModal from "../RegisterModal";
import SearchArvore from "../Search";
import SuccessAlert from "../SuccessAlert";
import MiniSideBar from "../MiniSideBar";

const ArvoreProduto = (data) =>{

    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [tableData, setTableData] = useState();
    const [status, setStatus] = useState();
    const [dataToPost, setDataToPost] = useState();
    const [dataToGet, setDataToGet] = useState();
    const nameRequest = ''

    const modalData = async (opcao) =>{
        let data = []
        data = await GetArvoreProduto(opcao)
        return setDataModal(data)
    }

    const ReceivePostData = (data) => {
        return setDataToPost(data)
    }

    const ReceiveGetData = (data) => {
        if (data) {
            return setDataToGet(data)
        }else{
            return Search(data)
        }
    }

    useEffect(() => {
        if (dataToPost) {
            Resgister(dataToPost)
        } 
        if (dataToGet) {
            Search(dataToGet)
        }
    },[dataToPost, dataToGet])

    const Search = async (dataGet) => {
        if (dataGet) {
            const data =  await GetArvoreProduto(nameRequest, dataGet)
            return setTableData(data)
        }else{
            const data =  await GetArvoreProduto(nameRequest)
            return setTableData(data)
        }
    }

    const Resgister = async (data) => {
        const statusData = await PostArvoreProduto(nameRequest, data);
        setStatus(statusData)
        
    }

    const CloseStatus = () => {
        return setStatus(null);
    }

    useEffect(() => {

    }, [tableData], [status])

    const opcoes = (op, opNav) => {

        useEffect(() => {
            if (op === "Linha") {
                modalData("departamento")
            }else if(op === "Familia"){
                modalData("linha")
            }else if(op === "Grupo"){
                modalData("familia")
            }
        },[op])
        
        /*
        switch (op) {
            case "Departamento":
                return (
                    <>
                    <ArvoreProduto name={"Departamento"} opNav={opNav} type={1} />
                    </>
                )
            case "Linha":
                return (                   
                    <>
                    <ArvoreProduto name={"Linha"} dataModal={dataModal} type={2} />
                    </>
                )
            case "Familia":
                return (
                    <>
                    <ArvoreProduto name={"Familia"} dataModal={dataModal} type={2} />
                    </>
                )
            case "Grupo":
                return (
                    <>
                    <ArvoreProduto name={"Grupo"} dataModal={dataModal} type={2} />
                    </>
                )
            case "Cor":
                return (
                    <>
                    <ArvoreProduto name={"Cor"} type={1} />
                    </>
                )
            case "Especificação":
                return (
                    <>
                    <ArvoreProduto name={"Especificação"} type={1} />
                    </>
                )
            default:
                break;
        }
        */
    }

    return (
        <>
            <div className='w-80 h-6 absolute top-2'>
                <Breadcrumbs color='primary'>
                    <BreadcrumbItem>Cadastro</BreadcrumbItem>
                    <BreadcrumbItem>Compras</BreadcrumbItem>
                    <BreadcrumbItem>Arvore de Produto</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            { status?.descricao ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com"/> </> ): (null) }
            <div className='flex flex-row pl-2 h-1/4 border rounded-md mt-8 w-full gap-2 bg-[#0000008e]'>
                <div className='flex flex-col justify-center items-center'>
                    <SearchArvore data={data} ReceiveGetData={ReceiveGetData}/>
                </div>
                <div className='flex items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                        Cadastrar
                    </Button>
                    <RegisterModal data={data} isOpen={isOpen} dataModal={data?.dataModal} onOpenChange={onOpenChange} ReceivePostData={ReceivePostData} CloseStatus={CloseStatus}/>
                    {status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
                </div>
            </div>
            <div className='flex h-4/5 w-full flex-row'>
                <MiniSideBar name={data?.name}/>
                <div className='flex w-full h-50 flex-col rounded-md'>
                    <div className='w-full h-full bg-[#F7F7F7]'>

                    </div>
                    <div className='w-full h-10 bg-[#D4D4D8]'>
                        teste teste teste teste
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ArvoreProduto; 