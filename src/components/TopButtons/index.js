import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal";
import Search from "../Search";
import {Button, Input, useDisclosure} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import EditModal from "../EditModal";


const TopButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [receivePostData, setReceivePostData] = useState();
    const [receiveGetData, setReceiveGetData] = useState();
    const [receivePutData, setReceivePutData] = useState();
    const [nameRequest, setNameRequest] = useState();
    const [nameRequestGet, setNameRequestGet] = useState();
    const [nameRequestPut, setNameRequestPut] = useState();
    const [open, setOpen] = useState(false)
    const {PostData, GetData, PutData, DeleteData} = props
    const modal = (value) =>{
        return setOpen(value)
    }

    const ReceivePost = ( nameRequest ,data) => {
        setNameRequest(nameRequest)
        setReceivePostData(data)
    }

    const ReceiveGet = (nameRequest, data) => {
        setNameRequestGet(nameRequest)
        setReceiveGetData(data)
    }

    const ReceivePut = (nameRequest, data) =>{
        setNameRequestPut(nameRequest)
        setReceivePutData(data)
    }

    
    const toClean = () => {
        setReceivePostData(null)
        setReceiveGetData(null)
        setReceivePutData(null)
        setNameRequestPut(null)
        setNameRequestGet(null)
        setNameRequest(null)
        
    }

    useEffect(() => {
        if (receivePostData) {
            PostData(nameRequest, receivePostData)
            return toClean()
        }
    })

    useEffect(() => {
        if (receivePutData) {
            PutData(nameRequestPut, receivePutData)
            return toClean();
        }
    })

    useEffect(() => {
        if (receiveGetData && nameRequestGet) {
            GetData(nameRequestGet, receiveGetData);
            return toClean();
        }else if (nameRequestGet) {
            GetData(nameRequestGet);
            return toClean();
        }
    })

    const OptionPage = (page) => {
        switch (page) {
            case "/arvore-de-produtos":
                return(
                    <>
                    <div className='flex flex-col justify-center items-center'>
                        <Search data={props} ReceiveGet={ReceiveGet} />
                    </div>
                    <div className='flex items-center'>
                        <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                            Cadastrar
                        </Button>
                        <RegisterModal name={props?.option} size={props?.size} h={props?.h} isOpen={isOpen} 
                        dataModal={props?.dataModal} onOpenChange={onOpenChange} ReceivePost={ReceivePost} />
                    </div>
                    <div className='flex items-center'>
                        {props?.valueTable ? 
                            <Button color="primary" size='sm' variant="ghost" onPress={() => {setOpen(true)}}>
                                Editar
                            </Button>
                            :
                            <Button color="primary" size="sm" variant="ghost" isDisabled>
                                Editar
                            </Button>
                        }
                        <EditModal name={props?.option} size={props?.size} h={props?.h} valueTable={props?.valueTable} 
                        ReceivePut={ReceivePut} isOpen={open} modal={modal}/>
                    </div>
                    <div className='flex items-center'>
                        {props?.valueTable ? 
                            <Button color="primary" size='sm' variant="ghost" onClick={() => DeleteData(props?.option, props?.valueTable)}>
                                Excluir
                            </Button>
                            :
                            <Button color="primary" size="sm" variant="ghost" isDisabled>
                                Excluir
                            </Button>
                        }
                    </div>
                    
                    </>
                )
            case"/fornecedor":
                return(
                    <>
                    <Search data={props} ReceiveGet={ReceiveGet} />
                    </>
                )
            default:
                break;
        }
    }

    return(
        <div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
            <div className=' w-full absolute pl-2'>
                <h1 className='font-bold text-[#D4D4D8] capitalize'>{props?.title}</h1>
            </div>
            {OptionPage(router)}
        </div>
    )
    
    }
export default TopButtons