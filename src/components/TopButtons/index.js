import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal";
import SearchArvore from "../Search";
import {Button, useDisclosure} from "@nextui-org/react";
import { usePathname } from "next/navigation";


const TopButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [closeStatus, setCloseStatus] = useState();
    const [receivePostData, setReceivePostData] = useState();
    const [receiveGetData, setReceiveGetData] = useState();
    const [nameRequest, setNameRequest] = useState();
    const [nameRequestGet, setNameRequestGet] = useState();
    
    const ReceivePost = ( nameRequest ,data) => {
        setNameRequest(nameRequest)
        setReceivePostData(data)
    }

    const ReceiveGet = (nameRequest, data) => {
        setNameRequestGet(nameRequest)
        setReceiveGetData(data)
    }

    const toClean = () => {
        setReceivePostData(null)
        setReceiveGetData(null)
        setNameRequestGet(null)
        setNameRequest(null)
        
    }

    useEffect(() => {
        if (receivePostData) {
            props?.PostData(nameRequest, receivePostData)
            return toClean()
        }
        if (receiveGetData && nameRequestGet) {
            props?.GetData(nameRequestGet, receiveGetData);
            return toClean();
        }else if (nameRequestGet) {
            props?.GetData(nameRequestGet);
            return toClean();
        }
        
    },[props, nameRequest ,receiveGetData ,receivePostData , nameRequestGet])

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
                    </>
                )
        
            default:
                break;
        }
    }




    return(
        <div className='flex flex-row pl-2 h-1/4 border rounded-md mt-8 w-full gap-2 bg-[#0000008e]'>
            <div className='absolute w-44'>
                <h1>{props?.title}</h1>
            </div>
            {OptionPage(router)}
        </div>
    )
    
    }
export default TopButtons