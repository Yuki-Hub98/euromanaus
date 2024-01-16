"use client";

import React , {useEffect, useState} from "react";
import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, 
ModalFooter, Input} from "@nextui-org/react";
import Select from "react-select";
import {GetArvoreProduto, PostArvoreProduto} from "@/app/actions/arvore-produto";
import RegexToSave from "@/functions/regexToSave";


const CadastroArvore = (value) =>{
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [dataDescricao, setDataDescricao] = useState();

    const [selectData, setSelectData] = useState()

    const [tableData, setTableData] = useState()

    const [data, setData] = useState()

    useEffect(() => {
        if (!value.opNav) {
            setTableData(null)
        }
    },[value])
    
    const dataTransform = value?.dataModal?.map((data) => ( 
        {'value': data?.descricao, 'label':data?.descricao}
        ))
    
    const dataFormate = (opcao) =>{
        switch (opcao) {
            case 'Departamento':
                setData({'descricao': dataDescricao})
                break;
            case 'Linha':
                setData({'departamento': selectData, 'descricao': dataDescricao})
                break;
            case 'Familia':
                setData({'linha': selectData, 'descricao': dataDescricao})
                break;
            case 'Grupo':
                setData({'familia': selectData, 'descricao': dataDescricao})
                break;
            case 'Cor':
                setData({'descricao': dataDescricao})
                break;
            case 'Especificação':
                setData({'descricao': dataDescricao})
                break;
            default:
                break;
        }
        
    }

    const Tabela = (opcao, data) => {
        switch (opcao) {
            case "Departamento":
                return(
                    <>
                        <table className="w-2/4 m-4 border-collapse">
                            <thead>
                                <tr>
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((data) => (
                                    <>
                                        <tr key={data.descricao}>
                                            <td key={data.descricao} className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    </>
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
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Departamento</th>
                                    <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((data) => (
                                    <>
                                        <tr key={data.descricao}>
                                            <td key={data.departamento} className='border p-2 text-[#2c2c2b]'>{data.departamento}</td>
                                            <td key={data.descricao} className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                        </tr>
                                    </>
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
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Linha</th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <>
                                            <tr key={data.descricao}>
                                                <td key={data.linha} className='border p-2 text-[#2c2c2b]'>{data.linha}</td>
                                                <td key={data.descricao} className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                            </tr>
                                        </>
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
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Familia</th>
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <>
                                            <tr key={data.descricao}>
                                                <td key={data.familia} className='border p-2 text-[#2c2c2b]'>{data.familia}</td>
                                                <td key={data.descricao} className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                            </tr>
                                        </>
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
                                        <th className='bg-[#edca62b4] border text-[#2c2c2b] p-2'>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((data) => (
                                        <>
                                            <tr key={data.descricao}>
                                                <td key={data.descricao} className='border p-2 text-[#2c2c2b]'>{data.descricao}</td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        
                        </>
                    )
            default:
                break;
        }
    }


    const Search = async () => {
        let data = []
        data =  await GetArvoreProduto(value.name.toLowerCase())
        return setTableData(data)

    }

    useEffect(() => {
        if (data) {
            PostArvoreProduto(data, value.name.toLowerCase())
        }

    },[data])

    useEffect(() => {

    }, [tableData])

    return( 
    <>
        <div className={`flex flex-col items-center bg-[#2c2c2b] w-[85rem]`}>
            <div className='flex h-10 justify-center items-center w-96 font-bold '>
                <h2 className='text-white'>
                    {value.name}
                </h2>
            </div>
            
            <div className='flex flex-row justify-around mt-3 w-[70rem] items-center bg-[#2c2c2b]'>
                <form>
                <div className='flex flex-row mt-6 gap-3 items-center'>
                    <Input className='w-96' onChange={(e) => console.log(RegexToSave(e.target.value))} color="primary" label="Search"/>
                    <Button color="primary" variant="ghost" onClick={() => Search()} >
                        Pesquisar
                    </Button>
                </div>
                </form>
                <form>
                    <div className='flex mt-6'>
                        <Button color="primary" variant="ghost" onPress={onOpen}>
                            Cadastrar
                        </Button>
                        <Modal 
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="top-center"
                            size="md"
                            className=' h-80'
                            classNames={{
                                body: "py-6",
                                backdrop: "bg-[#D4D4D8]/50 backdrop-opacity-40",
                                base: "border-[#292f46] bg-[#D4D4D8] dark:bg-[#19172c] text-[#2c2c2b]",
                                header: "border-[#292f46]",
                                footer: "border-[#292f46]",
                                closeButton: "hover:bg-white/5 active:bg-white/10",
                            }}
                            >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1"> {value.name} </ModalHeader>
                                <ModalBody>
                                    <div className="flex flex-col w-full">
                                        <div className="w-full flex flex-row gap-2">
                                            {value.type === 1 ? 
                                                <div>
                                                    <Input label="Descrição" size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                                </div>
                                                :
                                                <div>
                                                <div className='flex justify-center w-96 relative'>
                                                    <Select className='w-60 ml-3' onChange={(e) => setSelectData(e.value)} options={dataTransform}/>
                                                </div>
                                                    <Input label="Descrição" size='lg' type="Text" onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                                </div>
                                            }
                                            
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className='bg-sky-50' variant="flat" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20"  onClick={() => dataFormate(value.name)} onPress={onClose}>
                                        Cadastrar
                                    </Button>
                                </ModalFooter>
                                </>
                                )}
                        </ModalContent>
                        </Modal>
                    </div>
                </form>
            </div>
            <div className='bg-s[#2c2c2b] h-[40rem] mt-8 rounded-md w-[75rem]'>
                <div className=' flex flex-col bg-[#D4D4D8] rounded items-center justify-center'>
                    {Tabela(value.name, tableData)}
                </div>
            </div>
        </div>
            
    </>)
    
}

export default CadastroArvore 