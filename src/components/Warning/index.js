import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, 
    ModalFooter} from "@nextui-org/react";
import { useEffect, useState } from "react";


const Warning = (data) => {
    const { onOpenChange} = useDisclosure();

    const [status, setStatus] = useState()
    const [onOpen, setOnOpen] = useState(false)

    
    useEffect(() => {
        if(data.status){
            setOnOpen(true)
            setStatus(data.status)
        }else{
            setOnOpen(false)
        }

    },[data])

    return(
        <>
        <Modal 
            isOpen={onOpen}
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
            }}>
                <ModalContent>
                            { onOpen ? (
                                <>
                                    <ModalHeader> Warning </ModalHeader>
                                    <ModalBody>
                                        <div className="flex flex-col w-full">
                                            <div>
                                                <span>Codigo: {status?.status}</span>
                                            </div>
                                            <div>
                                                <span>Error: {status?.error}</span>
                                            </div>
                                            <div>
                                                <span>Message: {status?.message}</span>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {setOnOpen(false), data.CloseStatus()}}>
                                        Ok
                                    </Button>
                                </ModalFooter>
                                </> 
                            ) : (null)}
                </ModalContent>

        </Modal>
        </>
    )
}

export default Warning