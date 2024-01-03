"use client";

import React, { useState } from "react";
import { Modal, Button, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter,Input,Tabs, Tab, Link, Card, CardBody, CardHeader, } from "@nextui-org/react";

export default function cadastroFun () {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selected, setSelected] = useState("Social");
    return (
        <div className="mt-2.5">
          <Button onPress={onOpen} color="primary">
            Cadastro de Forncedor
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
                        <Card className="max-w-full justify-items-center h-[520px] bg-slate-100">
                          <CardBody className="overflow-hidden">
                            <Tabs
                              fullWidth
                              size="md"
                              aria-label="Tabs form"
                              selectedKey={selected}
                              onSelectionChange={setSelected}>
                              <Tab key={"social"} title={"Social"}>
                                <form>
                                  <div className="w-full flex flex-row gap-2 justify-items-stretch">
                                    <div>
                                      <Input label="Nome Fantasia" type="Text" />
                                      <Input label="Razão Social" type="Text" />
                                      <Input label="CPF/CNPJ" type="Text"  />
                                      <Input label="INSCR. Social/ RG" type="Text"  />
                                    </div>
                                    <div> 
                                      <Input label="CEP" type={"Text"}  />
                                      <Input label="Endereço" type="Text"  />
                                      <Input label="Número" type="Text"  />
                                      <Input label="Bairro" type="Text"  />
                                      <Input label="Cidade" type="Text"  />
                                      <Input label="UF" type="Text"  />
                                    </div>
                                  </div>
                                </form>
                              </Tab>
                              <Tab key={"contato"} title={"Contato"}>
                                <form>
                                  <Input label="Telefone" type="Text"  />
                                  <Input label="Celular" type="Text" />
                                  <Input label="E-mail" type="Text" />
                                  <Input label="Contato" type="Text" />
                                </form>
                              </Tab>
                              <Tab key={"Outros"} title={"Outros"}>
                                <form>
                                  <Input label="Dados Bancarios" type="Text" />
                                  <Input label="Tarara" type="Text" />
                                  <Input label="Tarara" type="Text" />
                                  <Input label="Tarara" type="Text" />
                                </form>
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
        </div>
    )
}