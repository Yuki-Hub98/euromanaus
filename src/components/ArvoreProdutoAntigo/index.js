"use client";

import React , {useEffect, useState} from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import {GetArvoreProduto, PostArvoreProduto} from "@/app/actions/arvore-produto";
import Warning from "../Warning";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import RegisterModal from "../RegisterModal";
import SuccessAlert from "../SuccessAlert";
import SearchArvore from "../Search";

const ArvoreProdutoAntigo = (value) =>{
    
    const { isOpen , onOpen , onOpenChange } = useDisclosure();

    const [tableData, setTableData] = useState();

    const [status, setStatus] = useState();

    const [dataToPost, setDataToPost] = useState();

    const [dataToGet, setDataToGet] = useState();

    const nameRequest = value.name.toLowerCase() === "especificação" ? "especificacao" : value.name.toLowerCase();

    useEffect(() => {
        if (!value.opNav) {
            setTableData(null);
        }
    },[value])
    
    const Tabela = (opcao, data) => {
        switch (opcao) {
            case "Departamento":
                return(
                    <>
                        <table className="w-2/4 m-4 border-collapse">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data?.map((data) => (
                                    <tr key={data?.descricao}>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                        <td className='border p-2 border-[#d9d9d9] text-[#2c2c2b]'>{data?.descricao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>                    
                    </>
                )
            case "Linha":
                return(
                    <>
                        <table className="w-2/4 m-4 border-collapse">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Departamento</th>
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((data) => (
                                    <tr key={data?.descricao}>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                        <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                        <td  className='border p-2 text-[#2c2c2b]'>{data.departamento}</td>
                                        <td  className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )

                case "Familia":
                    return(
                        <>
                            <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Linha</th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.linha}</td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )

                case "Grupo":
                    return(
                        <>
                            <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Familia</th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-1/2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr data={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.familia}</td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )
                case "Cor":
                    return(
                        <>
                        <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                        </>
                    )
                    case "Especificação":
                    return(
                        <>
                        <table className="w-2/4 m-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2 w-full'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <tr key={data?.descricao}>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><RiDeleteBin2Line color='#f53300'/></td>
                                            <td onClick={(e) => console.log(e)} className='cursor-pointer'><CiEdit color='#2c2c2b'/></td>
                                            <td className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                        </>
                    )
            default:
                break;
        }
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


    return( 
    <>
        <div className={`flex flex-col items-center bg-[#0000008e] h-screen w-full`}>
            { status?.descricao ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com"/> </> ): (null) }
            <div className='flex flex-row pl-2 w-full h-56 gap-2 bg-[#1E1E1F] border'>
                <div className='flex flex-col justify-center items-center'>
                <SearchArvore data={value} ReceiveGetData={ReceiveGetData}/>
                </div>
                <div className='flex items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                        Cadastrar
                    </Button>
                    <RegisterModal data={value} isOpen={isOpen} dataModal={value?.dataModal} onOpenChange={onOpenChange} ReceivePostData={ReceivePostData} CloseStatus={CloseStatus}/>
                    {status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)}
                </div>
            </div>
            <div className='h-50 rounded-md pl-32 w-full overflow-auto'>
                <div className=' flex flex-col bg-[#F7F7F7] rounded'>
                    {Tabela(value.name, tableData)}
                </div>
            </div>
        </div>
            
    </>)
    
}

export default ArvoreProdutoAntigo 