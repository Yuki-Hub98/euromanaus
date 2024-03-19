"use Client";
import React , {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import {Button, useDisclosure } from "@nextui-org/react";
import RegisterModal from "../ComponentsCompras/RegisterModal";
import EditModal from "../ComponentsCompras/EditModal";
import { PostProduto } from "@/app/actions/produto";
import { DelFornecedor, PutFornecedor } from "@/app/actions/fornecedor";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";

const MiniSideBarButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [open, setOpen] = useState(false)
    const { warningPost , statusPost , ReceivePost } = usePostData(PostProduto);
    const { statusEdit, warningEdit, ReceivePut} = usePutData(PutFornecedor);
    const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelFornecedor)
    
    const { valueTable } = props

    const modal = (value) =>{
      return setOpen(value)
    }

    const optionPage = (page) => {
        switch (page) {
            case"/dashboard/fornecedor":
            return(
                <>
                    <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                      Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"4xl"} h={"w-3/5"} name={props?.name} 
                    ReceivePost={ReceivePost} onOpenChange={onOpenChange}/>
                    {statusPost}
                    {warningPost}
                    <div className='flex items-center'>
                      {valueTable ? 
                        <Button color="primary" size="sm" variant="ghost" onPress={() => {setOpen(true)}}>
                          Editar
                        </Button>
                      :
                        <Button color="primary" size="sm" isDisabled variant="ghost">
                          Editar
                        </Button>
                      }
                      <EditModal name={props?.name} size={"4xl"} h={"w-3/5"} ReceivePut={ReceivePut} 
                      valueTable={valueTable} isOpen={open} modal={modal}/>
                      {statusEdit}
                      {warningEdit}
                    </div>
                    {valueTable ? 
                      <Button color="primary" size="sm" variant="ghost" onClick={() => DeleteData(props?.name, valueTable)}>
                        Excluir
                      </Button>
                        :
                      <Button color="primary" size="sm" isDisabled variant="ghost">
                        Excluir
                      </Button>
                    }
                    {statusDelete}
                    {warningDelete}
                    </div>
                </>)
            case "/dashboard/produtos":
              return(
                <>
                  <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                      Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"4xl"} h={"w-3/5"} name={props?.name} 
                    ReceivePost={ReceivePost} onOpenChange={onOpenChange}/>
                    {statusPost}
                    {warningPost}
                    <div className='flex items-center'>
                      {valueTable ? 
                        <Button color="primary" size="sm" variant="ghost" onPress={() => {setOpen(true)}}>
                          Editar
                        </Button>
                      :
                        <Button color="primary" size="sm" isDisabled variant="ghost">
                          Editar
                        </Button>
                      }
                      <EditModal name={props?.name} size={"4xl"} h={"w-3/5"} ReceivePut={ReceivePut} 
                      valueTable={valueTable} isOpen={open} modal={modal}/>
                      {statusEdit}
                      {warningEdit}
                    </div>
                    {valueTable ? 
                      <Button color="primary" size="sm" variant="ghost" onClick={() => DeleteData(props?.name, valueTable)}>
                        Excluir
                      </Button>
                        :
                      <Button color="primary" size="sm" isDisabled variant="ghost">
                        Excluir
                      </Button>
                    }
                    {statusDelete}
                    {warningDelete}
                  </div>
                </>)
            default:
                break;
        }
    }

    return(
        <>
        <aside className=' h-full w-40 flex flex-col bg-background-component rounded left-64 '>
            {optionPage(router)}
        </aside>
        </>
    )
}

export default MiniSideBarButtons