"use Client";
import React , {useState} from "react";
import { usePathname } from "next/navigation";
import {Button, useDisclosure } from "@nextui-org/react";
import RegisterModal from "../ComponentsCompras/RegisterModal";
import EditModal from "../ComponentsCompras/EditModal";
import { DelProduto, PostProduto, PutProdudo } from "@/app/actions/produto";
import { DelFornecedor, PostFornecedor, PutFornecedor } from "@/app/actions/fornecedor";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";

const MiniSideBarButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [open, setOpen] = useState(false)
    const produtoPost = usePostData(PostProduto);
    const produtoUpdate = usePutData(PutProdudo);
    const produtoDelete = useDeleteData(DelProduto);
    const fornecedorPost = usePostData(PostFornecedor);
    const forncedorUpdate = usePutData(PutFornecedor);
    const fornecedorDelete = useDeleteData(DelFornecedor);
    const { valueTable, SetValueTable } = props

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
                    ReceivePost={fornecedorPost.ReceivePost} onOpenChange={onOpenChange}/>
                    {fornecedorPost.statusPost}
                    {fornecedorPost.warningPost}
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
                      <EditModal name={props?.name} size={"4xl"} h={"w-3/5"} ReceivePut={forncedorUpdate.ReceivePut} 
                      valueTable={valueTable} isOpen={open} SetValueTable={SetValueTable} modal={modal}/>
                      {forncedorUpdate.statusEdit}
                      {forncedorUpdate.warningEdit}
                    </div>
                    {valueTable ? 
                      <Button color="primary" size="sm" variant="ghost" onClick={() => fornecedorDelete.DeleteData(props?.name, valueTable)}>
                        Excluir
                      </Button>
                        :
                      <Button color="primary" size="sm" isDisabled variant="ghost">
                        Excluir
                      </Button>
                    }
                    {fornecedorDelete.statusDelete}
                    {fornecedorDelete.warningDelete}
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
                    ReceivePost={produtoPost.ReceivePost} onOpenChange={onOpenChange}/>
                    {produtoPost.statusPost}
                    {produtoPost.warningPost}
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
                      <EditModal name={props?.name} size={"4xl"} h={"w-3/5"} ReceivePut={produtoUpdate.ReceivePut} 
                      valueTable={valueTable} SetValueTable={SetValueTable} isOpen={open} modal={modal}/>
                      {produtoUpdate.statusEdit}
                      {produtoUpdate.warningEdit}
                    </div>
                    {valueTable ? 
                      <Button color="primary" size="sm" variant="ghost" onClick={() => produtoDelete.DeleteData(props?.name, valueTable)}>
                        Excluir
                      </Button>
                        :
                      <Button color="primary" size="sm" isDisabled variant="ghost">
                        Excluir
                      </Button>
                    }
                    {produtoDelete.statusDelete}
                    {produtoDelete.warningDelete}
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