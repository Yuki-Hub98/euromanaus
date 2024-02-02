import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal";
import SearchArvore from "../Search";
import {Button, useDisclosure} from "@nextui-org/react";
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
    const {PostData, GetData, PutData } = props
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
                        <SearchArvore data={props} ReceiveGet={ReceiveGet} />
                    </div>
                    <div className='flex items-center'>
                        <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                            Cadastrar
                        </Button>
                        <RegisterModal name={props?.option} isOpen={isOpen} dataModal={props?.dataModal} onOpenChange={onOpenChange} ReceivePost={ReceivePost} />
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
                        <EditModal name={props?.option} valueTable={props?.valueTable} ReceivePut={ReceivePut} isOpen={open} modal={modal}
                        tableData={props?.tableData} onOpenChange={onOpenChange} />
                    </div> 
                    </>
                )
        
            default:
                break;
        }
    }

    return(
        <div className='flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded w-full gap-2 bg-[#1E1E1F]'>
            <div className='absolute pl-2 w-full'>
                <h1 className='font-bold text-[#D4D4D8] capitalize'>{props?.title}</h1>
            </div>
            {OptionPage(router)}
        </div>
    )
    
    }
export default TopButtons