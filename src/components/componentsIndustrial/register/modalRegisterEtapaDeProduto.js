"use Client";
import React from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input} from "@nextui-org/react";
import useHandleChange from "@/hooks/ui/useHandleChange";
import usePostData from "@/hooks/services/usePostData";
import { RegisterEtapaDeProducao } from "@/app/actions/etapa-de-producao";
import FormatURL from "@/functions/formatURL";

const ModalRegisterEtapaDeProducao = (props) => {
	const { onOpenChange, isOpen, size, height, name } = props
  const { statusPost, warningPost, ReceivePost } = usePostData(RegisterEtapaDeProducao);
	const { dataHandleChange, handleChange, clearHandle } = useHandleChange()

	return (
		<>
    {statusPost} {warningPost}
		<Modal 
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="top-center"
			size={size}
			className={height}
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
					<ModalHeader className="flex flex-col gap-1"> {name.toUpperCase()} </ModalHeader>
					<ModalBody>
					<div className="w-full grid gri-cols-6 gap-2 items-center">
						<div className="col-span-1">
								<span className="text-sm">Descricão</span>
            </div>
						<Input  size="sm" type="Text" name="etapaDeProducao" onChange={(e) => {handleChange(e)}} 
							labelPlacement="outside" className="col-start-2"/>
					</div>
					</ModalBody>
					<ModalFooter>
						<Button className='bg-sky-50' variant="flat" size="sm" onClick={() => {clearHandle()}} onPress={onClose} >
							Cancelar
						</Button>
						{ dataHandleChange ? (
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" onClick={() => {ReceivePost(FormatURL(name), dataHandleChange), clearHandle()}} 
								onPress={onClose} >
								Cadastrar
							</Button>
						)
							:
						(
							<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" size="sm" isDisabled>
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

export default ModalRegisterEtapaDeProducao