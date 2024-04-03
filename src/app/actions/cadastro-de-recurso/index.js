"use server";
import Post from "@/app/api/cadastro-de-recurso/post";
import Get from "@/app/api/cadastro-de-recurso/get";
import Put from "@/app/api/cadastro-de-recurso/put";
import Del from "@/app/api/cadastro-de-recurso/del";


const RegisterCadastroDeRecurso = async (nameRequest, data)=>{
  const post = await Post(nameRequest, data)
  return post
}
const GetCadastroDeRecurso = async(nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}
const EditCadastroDeRecurso = async(nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}
const DelCadastroDeRecurso = async (nameRequest, data) => {
  const del = await Del(nameRequest, data)
  return del
}

export {RegisterCadastroDeRecurso, GetCadastroDeRecurso, EditCadastroDeRecurso, DelCadastroDeRecurso}