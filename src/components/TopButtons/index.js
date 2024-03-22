import { useEffect, useState } from "react";
import RegisterModal from "../ComponentsCompras/RegisterModal";
import Search from "../ComponentsCompras/Search";
import {Button, useDisclosure} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import EditModal from "../ComponentsCompras/EditModal";


const TopButtons = (props) => {
	const router = usePathname()
	const { isOpen , onOpen , onOpenChange } = useDisclosure();
	const [open, setOpen] = useState(false)
	const { PostData, PutData, GetData, SetValueTable, valueTable, DeleteData } = props
	const modal = (value) =>{
		return setOpen(value)
	}

	const OptionPage = (page) => {
		switch (page) {
			case "/dashboard/arvore-de-produtos":
				return(
					<>
					<div className='flex flex-col justify-center items-center'>
						<Search data={props} ReceiveGet={GetData} router={page} />
					</div>
					<div className='flex items-center'>
						<Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
							Cadastrar
						</Button>
						<RegisterModal name={props?.option} size={"md"} h={"h-3/6"} isOpen={isOpen} 
						dataModal={props?.dataModal} onOpenChange={onOpenChange} ReceivePost={PostData} />
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
						<EditModal name={props?.option} size={"md"} h={"h-3/6"} valueTable={valueTable} 
						ReceivePut={PutData} SetValueTable={SetValueTable}  isOpen={open} modal={modal}/>
					</div>
					<div className='flex items-center'>
						{props?.valueTable ? 
							<Button color="primary" size='sm' variant="ghost" onClick={() => DeleteData(props?.option, valueTable)}>
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
			case"/dashboard/fornecedor":
				return(
					<>
					<Search data={props} ReceiveGet={GetData} router={page} />
					</>
				)
			case"/dashboard/produtos":
				return(
					<>
					<Search data={props} ReceiveGet={GetData} router={page} />
					</>
				)
			case"/dashboard/modelos":
			return(
				<>
					<div className='flex flex-col justify-center items-center'>
						<Search data={props} ReceiveGet={GetData} router={page} />
					</div>
				</>
			)
			default:
				break;
		}
	}

	return(
		<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
			<div className=' w-full absolute pl-2'>
				<h1 className='font-bold text-background-table capitalize'>{props?.title}</h1>
			</div>
			{OptionPage(router)}
		</div>
	)
	
	}
export default TopButtons