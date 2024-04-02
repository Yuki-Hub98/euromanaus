"use Client";
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input} from "@nextui-org/react";


const RegisterModal = (props) => {
	const [dataToPost, setDataToPost] = useState();
	const [data, setData] = useState ();
	const {ReceivePost, onOpenChange, isOpen} = props

	const toClean = () => {
		setData(null)
		setDataToPost(null)
		setDataProdutoDuplicated(null)
		return;
	}


	const TypeButton = (type) => {
		if(type=== 'modelos'){
			return 1 
		}
	}

	useEffect(() => {
		if(data){
			setDataToPost(data)
		}
	},[props, data])


	const isDisabled = dataToPost?.items || dataToPost?.descricao
	const buttons = (type) => {
		switch (type) {
			case 1:
				return(
					<>
					<div>
						<Input label="Descrição"  size="lg" type="Text" name="descricao" onChange={(e) => {handleChange(e)}} 
						labelPlacement="outside-left" className="w-80 mt-2 justify-between"/>
					</div>
					</>
				)
			default:
				break;
		}
	}

	return (
		<>
		<Modal 
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="top-center"
			size={props?.size}
			className={props?.h}
			classNames={{
			body: "py-6",
			backdrop: "bg-[#D4D4D8]/50 backdrop-opacity-40",
			base: "border-[#292f46] bg-[#D4D4D8] dark:bg-[#19172c] text-[#2c2c2b]",
			header: "border-[#292f46]",
			footer: "border-[#292f46]",
			closeButton: "hover:bg-white/5 active:bg-white/10",
			}}>
			<ModalContent>
				{(onClose) => (
					<>
					<ModalHeader className="flex flex-col gap-1"> {props?.name?.toUpperCase()} </ModalHeader>
					<ModalBody>
					<div className="w-full flex flex-col">
						<div className="w-full flex flex-row gap-2">
							{buttons(TypeButton(props?.name))}
						</div>
					</div>
					</ModalBody>
					<ModalFooter>
						<Button className='bg-sky-50' variant="flat" onClick={() => {toClean()}} onPress={onClose} >
							Cancelar
						</Button>
						{ isDisabled ? (
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {ReceivePost(props?.name, dataToPost), toClean()}} 
								onPress={onClose} >
								Cadastrar
							</Button>
						)
							:
						(
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" isDisabled>
								Cadastrar
							</Button>
						)}
					</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
		</>
	)
	
}

export default RegisterModal