"use server";
import Post from "@/app/api/etapa-de-producao/post";
import Get from "@/app/api/etapa-de-producao/get";
import Put from "@/app/api/etapa-de-producao/put";
import Del from "@/app/api/etapa-de-producao/del";


const RegisterEtapaDeProducao = async (nameRequest, data)=>{
  const post = await Post(nameRequest, data)
  return post
}
const GetEtapaDeProducao = async(nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}
const EditEtapaDeProducao = async(nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}
const DelEtapaDeProducao = async (nameRequest, data) => {
  const del = await Del(nameRequest, data)
  return del
}

export {RegisterEtapaDeProducao, GetEtapaDeProducao, EditEtapaDeProducao, DelEtapaDeProducao}