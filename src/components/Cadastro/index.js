"use client";
import React , {useState} from "react";
import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, 
ModalFooter,Input,Tabs, Tab, Card, CardBody } from "@nextui-org/react";

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
                            {console.log(onClose)}
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

export default Cadastro