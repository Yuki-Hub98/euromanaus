"use server";
import Post from "@/app/api/cadastro-de-funcao/post";
import Get from "@/app/api/cadastro-de-funcao/get";
import Put from "@/app/api/cadastro-de-funcao/put";
import Del from "@/app/api/cadastro-de-funcao/del";


const RegisterCadastroDeFuncao = async (nameRequest, data)=>{
  const post = await Post(nameRequest, data)
  return post
}
const GetCadastroDeFuncao = async(nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}
const EditCadastroDeFuncao = async(nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}
const DelCadastroDeFuncao = async (nameRequest, data) => {
  const del = await Del(nameRequest, data)
  return del
}

export {RegisterCadastroDeFuncao, GetCadastroDeFuncao, EditCadastroDeFuncao, DelCadastroDeFuncao}