"use client"
import React , {useEffect, useState} from "react";
import { Modal, Button, ModalContent, ModalHeader, ModalBody,
	ModalFooter, Input} from "@nextui-org/react";
import RegexToSave from "@/functions/regexToSave";


const EditModal = (props) => {
	const { ReceivePut, valueTable, SetValueTable } = props
	const [dataToPut, setDataToPut] = useState();
	const [dataDescricao, setDataDescricao] = useState();
	const [data, setData] = useState (valueTable);

	useEffect(()=> {
		setDataDescricao(valueTable?.descricao)
	},[valueTable])
	
	const toClean = () => {
		setData(null)
		setDataToPut(null)
		setDataDescricao(null)
		SetValueTable(null)
		return;
	}

	const change = (value) => {
		toClean();
		return props?.modal(value)
	}

	const FormateToPut = (op) =>{
		if (op === 'modelos') {
			return setDataToPut({'descricao': valueTable?.descricao, 'edit':dataDescricao})
		}
		switch (op) {  
			case'produtos':
				setDataToPut(data)
				break;
			default:
				break;
		}
				
		}

	const TypeButton = (type) => {
		if(type === "modelos"){
			return 1 
	}

	const buttons = (type) => {
		switch (type) {
			case 1:
				return(
					<>
						<div>
							<Input label="Descrição" value={dataDescricao}  size='lg' type="Text"  onChange={(e) => setDataDescricao(RegexToSave(e.target.value))} labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
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
				isOpen={props?.isOpen}
				onOpenChange={(e) => change(e)}
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
				}}
				>
				<ModalContent>
					{ props?.isOpen ? (
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
									<Button className='bg-sky-50' variant="flat" onClick={() => {toClean(), props?.modal(!props?.isOpen)}} >
										Cancelar
									</Button>
									{ dataDescricao || data ? (
										<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" onClick={() => {FormateToPut(props?.name), props?.modal(!props?.isOpen)}} >
											Editar
										</Button>
									)
										:
									(
										<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20" isDisabled>
											Editar
										</Button>
									)
									}
								</ModalFooter>
						</>
					): null}
				</ModalContent>
			</Modal>
		</>
	)
	}
}

export default EditModal