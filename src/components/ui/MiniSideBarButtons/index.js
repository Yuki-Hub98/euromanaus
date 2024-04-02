"use Client";
import React , {useState} from "react";
import { usePathname } from "next/navigation";
import {Button, useDisclosure } from "@nextui-org/react";
import RegisterModal from "../../ComponentsCompras/registerModal";
import EditModal from "../../ComponentsCompras/editModal";

const MiniSideBarButtons = (props) => {
    const router = usePathname()
    const { isOpen , onOpen , onOpenChange } = useDisclosure();
    const [open, setOpen] = useState(false)
    const { valueTable, SetValueTable, PostData, PutData, DeleteData } = props

    const modal = (value) =>{
      return setOpen(value)
    }

    const optionPage = (page) => {
        switch (page) {
            case "/dashboard/produtos":
              return(
                <>
                  <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                      Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"4xl"} h={"w-3/5"} name={props?.name} 
                    ReceivePost={PostData} onOpenChange={onOpenChange}/>
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
                      <EditModal name={props?.name} size={"4xl"} h={"w-3/5"} ReceivePut={PutData} 
                      valueTable={valueTable} SetValueTable={SetValueTable} isOpen={open} modal={modal}/>
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
                  </div>
                </>)
            case "/dashboard/modelos":
              return(
                <>
                  <div className='flex flex-col pt-5 justify-center gap-2 items-center'>
                    <Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
                      Cadastrar
                    </Button>
                    <RegisterModal isOpen={isOpen} size={"md"} h={"h-3/6"} name={props?.name} 
                    ReceivePost={PostData} onOpenChange={onOpenChange}/>
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
                      <EditModal name={props?.name} size={"md"} h={"h-3/6"} ReceivePut={PutData} 
                      valueTable={valueTable} SetValueTable={SetValueTable} isOpen={open} modal={modal}/>
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