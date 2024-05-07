"use server";
import Get from "@/app/api/administracao-de-preco/get";
import Put from "@/app/api/administracao-de-preco/put";

const UpdateAdministracaoDePreco = async (nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}

const GetAdministracaoDePreco = async (nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}

export {GetAdministracaoDePreco, UpdateAdministracaoDePreco}