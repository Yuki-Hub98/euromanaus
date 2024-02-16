"use Client";
import React , {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import {Button, useDisclosure } from "@nextui-org/react";
import RegisterModal from "../RegisterModal";

const MiniSideBarButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [receivePostData, setReceivePostData] = useState();
    const [receivePutData, setReceivePutData] = useState();
    const [nameRequest, setNameRequest] = useState();
    const { PostData, PutData, DeleteData, valueTable } = props

    const ReceivePost = ( nameRequest ,data) => {
        setNameRequest(nameRequest)
        setReceivePostData(data)
    }

    const ReceivePut = (nameRequest, data) =>{
        setReceivePutData(data)
        setNameRequest(nameRequest)
    }

    const toClean = () => {
        setReceivePostData(null)
        setReceivePutData(null)
    }

    useEffect(() => {
        if (receivePostData) {
            PostData(nameRequest, receivePostData)
            return toClean()
        }
    })

    useEffect(() => {
        if (receivePutData) {
            PutData(nameRequest, receivePutData)
            return toClean()
        }
    })
    const optionPage = (page) => {
        switch (page) {
            case"/fornecedor":
            return(
                <>
                    <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                        Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"4xl"} h={"w-3/5"} name={props?.name} 
                    ReceivePost={ReceivePost} onOpenChange={onOpenChange}/>
                    <Button color="primary" size="sm" variant="ghost">
                        Editar
                    </Button>
                    {valueTable ? 
                        <Button color="primary" size="sm" variant="ghost" onClick={() => DeleteData(props?.name, valueTable)}>
                            Excluir
                        </Button>
                        :
                        <Button color="primary" size="sm" isDisabled variant="ghost">
                            Excluir
                        </Button>
                    }
                    
                    </div>
                </>)
            default:
                break;
        }
    }

    return(
        <>
        <aside className=' h-full w-40 flex flex-col  bg-[#1E1E1F] rounded left-64 '>
            {optionPage(router)}
        </aside>
        </>
    )
}

export default MiniSideBarButtons