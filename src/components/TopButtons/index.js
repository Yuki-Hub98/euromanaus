import { useEffect, useState } from "react";
import RegisterModal from "../ComponentsCompras/RegisterModal";
import Search from "../ComponentsCompras/Search";
import {Button, useDisclosure} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import EditModal from "../ComponentsCompras/EditModal";
import { PostArvoreProduto, PutArvoreProduto, DelArvoreProduto } from "@/app/actions/arvore-produto";
import useDeleteData from "@/hooks/services/useDeleteData";
import usePostData from "@/hooks/services/usePostData";
import usePutData from "@/hooks/services/usePutData";


const TopButtons = (props) => {
	const router = usePathname()
	const { isOpen , onOpen , onOpenChange } = useDisclosure();
	const [receiveGetData, setReceiveGetData] = useState();
	const [nameRequestGet, setNameRequestGet] = useState();
	const [open, setOpen] = useState(false)
	const { GetData, SetValueTable, valueTable } = props
	const modal = (value) =>{
		return setOpen(value)
	}

	const { warningPost , statusPost , ReceivePost } = usePostData(PostArvoreProduto);
	const { statusEdit, warningEdit, ReceivePut } = usePutData(PutArvoreProduto);
	const { statusDelete, warningDelete, DeleteData } = useDeleteData(DelArvoreProduto)

	const ReceiveGet = (nameRequest, data) => {
		setNameRequestGet(nameRequest)
		setReceiveGetData(data)
	}

	const toClean = () => {
		setReceiveGetData(null)
	}

	useEffect(() => {
		if (receiveGetData && nameRequestGet) {
			GetData(nameRequestGet, receiveGetData);
			return toClean();
		}else if (nameRequestGet) {
			GetData(nameRequestGet);
			return toClean();
		}
	}, [receiveGetData, nameRequestGet])

	const OptionPage = (page) => {
		switch (page) {
			case "/dashboard/arvore-de-produtos":
				return(
					<>
					<div className='flex flex-col justify-center items-center'>
						<Search data={props} ReceiveGet={ReceiveGet} router={page} />
					</div>
					<div className='flex items-center'>
						<Button color="primary" size="sm" variant="ghost" onPress={onOpen}>
							Cadastrar
						</Button>
						<RegisterModal name={props?.option} size={props?.size} h={props?.h} isOpen={isOpen} 
						dataModal={props?.dataModal} onOpenChange={onOpenChange} ReceivePost={ReceivePost} />
						{ statusPost }
						{ warningPost }
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
						<EditModal name={props?.option} size={props?.size} h={props?.h} valueTable={valueTable} 
						ReceivePut={ReceivePut} SetValueTable={SetValueTable}  isOpen={open} modal={modal}/>
						{ statusEdit }
						{ warningEdit }
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
						{ statusDelete }
						{ warningDelete }
					</div>
					
					</>
				)
			case"/dashboard/fornecedor":
				return(
					<>
					<Search data={props} ReceiveGet={ReceiveGet} router={page} />
					</>
				)
			case"/dashboard/produtos":
				return(
					<>
					<Search data={props} ReceiveGet={ReceiveGet} router={page} />
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