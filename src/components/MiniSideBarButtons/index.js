"use Client";
import React , {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import {Button, useDisclosure } from "@nextui-org/react";
import RegisterModal from "../RegisterModal";

const MiniSideBarButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();

    const optionPage = (page) => {
        switch (page) {
            case"/fornecedor":
            return(
                <>
                    <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                        Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"4xl"} h={"w-3/5"} name={"fornecedor"} onOpenChange={onOpenChange}/>
                    <Button color="primary" size="sm" variant="ghost">
                        Editar
                    </Button>
                    <Button color="primary" size="sm" variant="ghost">
                        Excluir
                    </Button>
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