"use server";
import GetModalRegisterFichaTecnica from "@/app/api/ficha-tecnica/getModalRegister";
import Post from "@/app/api/ficha-tecnica/post";
import Get from "@/app/api/ficha-tecnica/get";
import Put from "@/app/api/ficha-tecnica/put";

const RegisterFichaTecnica = async (nameRequest, data) => {
  const post = await Post(data, nameRequest);
  return post
}

const UpdateFichaTecnica = async (nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}

const GetFichaTecnica = async (nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}

const GetModalRegister = async (nameRequest) => {
  const get = await GetModalRegisterFichaTecnica(nameRequest);
  return get
}

export {RegisterFichaTecnica, GetModalRegister, GetFichaTecnica, UpdateFichaTecnica}