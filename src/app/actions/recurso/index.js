"use server";
import Post from "@/app/api/recursos/post";
import Get from "@/app/api/recursos/get";
import Put from "@/app/api/recursos/put";
import Del from "@/app/api/recursos/del";


const RegisterRecurso = async (nameRequest, data)=>{
  const post = await Post(nameRequest, data)
  return post
}
const GetRecurso = async(nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}
const EditRecurso = async(nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}
const DelRecurso = async (nameRequest, data) => {
  const del = await Del(nameRequest, data)
  return del
}

export {RegisterRecurso, GetRecurso, EditRecurso, DelRecurso}