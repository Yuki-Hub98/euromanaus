"use client";
import React , {useState} from "react";
import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, 
ModalFooter,Input,Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Select from "react-select";


const Cadastro = () =>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = useState("Social");
    return(
        <>
        <form className="mt-2.5">
            <Button onPress={onOpen} color="primary">
                Cadastro de Fornecedor
            </Button>
            <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            size="5xl"
            >
                <ModalContent >
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-center"> Cadastro de Fornecedor </ModalHeader>
                        <ModalBody>
                        <div className="flex flex-col w-full">
                            <Card className="max-w-full justify-items-center h-[520px]">
                            <CardBody className="overflow-hidden">
                                <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}>
                                <Tab key={"social"} title={"Social"}>
                                    <div className="w-full flex flex-row gap-2">
                                        <div>
                                        <Input label="Nome Fantasia" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"/>
                                        <Input label="Razão Social" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="CPF/CNPJ" type="Text" labelPlacement="outside-left" className="mt-2 justify-between" />
                                        <Input label="INSCR. Social/ RG" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        </div>
                                        <div> 
                                        <Input label="CEP" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Endereço" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"   />
                                        <Input label="Número" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Bairro" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Cidade" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="UF" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab key={"contato"} title={"Contato"}>
                                    <div className="w-full flex flex-row gap-2 justify-items-stretch">
                                        <div>
                                        <Input label="Telefone" type="Text" labelPlacement="outside-left" className="mt-2 justify-between" />
                                        <Input label="Celular" type="Text" labelPlacement="outside-left" className="mt-2 justify-between" />
                                        <Input label="E-mail" type="Text" labelPlacement="outside-left" className="mt-2 justify-between" />
                                        <Input label="Contato" type="Text" labelPlacement="outside-left" className="mt-2 justify-between" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab key={"Outros"} title={"Outros"}>
                                    <div className="w-full flex flex-row gap-2 justify-items-stretch">
                                        <div>
                                        <Input label="Dados Bancarios" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Tarara" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Tarara" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        <Input label="Tarara" type="Text" labelPlacement="outside-left" className="mt-2 justify-between"  />
                                        </div>
                                    </div>
                                </Tab>
                                </Tabs>
                            </CardBody>
                            </Card>
                        </div>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Cancelar
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Cadastrar
                        </Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </form>
        </>
    )
}

const CadastroArvore = (value) =>{
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const op = [
        {value: "opcao 1", label:"opcao 1"},
        {value: "opcao 2", label:"opcao 2"},
        {value: "opcao 3", label:"opcao 3"},
        {value: "opcao 4", label:"opcao 4"}
    ] 

    const dataTransform = value?.data?.map((data) => ( 
        {'value': data?.descricao, 'label':data?.descricao}
        ))

    return( 
    <>
        <div className={`flex flex-col items-center w-[85rem]`}>
            <div className='flex h-10 justify-center items-center w-96 '>
                <h2>
                    {value.name}
                </h2>
            </div>
            
            <div className='flex flex-row justify-around mt-3 w-[70rem] items-center'>
                <form>
                <div className='flex flex-row mt-6 gap-3 items-center'>
                    <Input className='w-96' label="Search"/>
                    <Button type='submit'>
                        Pesquisar
                    </Button>
                </div>
                </form>
                <form>
                    <div className='flex mt-6'>
                        <Button onPress={onOpen}>
                            Cadastrar
                        </Button>
                        <Modal 
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="top-center"
                            size="md"
                            className=' h-80'>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1"> {value.name} </ModalHeader>
                                <ModalBody>
                                    <div className="flex flex-col w-full">
                                        <div className="w-full flex flex-row gap-2">
                                            {value.type === 1 ? 
                                                <div>
                                                    <Input label="Descrição" size='lg' type="Text" labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                                </div>
                                                :
                                                <div>
                                                <div className='flex justify-center w-96 relative'>
                                                    <Select className='w-60 ml-3' options={dataTransform}/>
                                                </div>
                                                    <Input label="Descrição" size='lg' type="Text" labelPlacement="outside-left" className="mt-2 w-80 justify-between"/>
                                                </div>
                                            }
                                            
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button type='submit' color='primary' onPress={onClose}>
                                        Cadastrar
                                    </Button>
                                </ModalFooter>
                                </>
                                )}
                        </ModalContent>
                        </Modal>
                    </div>
                </form>
            </div>
            <div className=' bg-slate-200 h-[40rem] mt-8 rounded-md w-[75rem]'>
                <h1>
                    Resultado
                </h1>
            </div>
        </div>
            
    </>)
    
}

export {Cadastro, CadastroArvore}