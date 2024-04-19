"use server";
import GetModalRegisterFichaTecnica from "@/app/api/ficha-tecnica/getModalRegister";
import Post from "@/app/api/ficha-tecnica/post";
import Get from "@/app/api/ficha-tecnica/get";

const RegisterFichaTecnica = async (nameRequest, data) => {
  const post = await Post(data, nameRequest);
  return post
}

const GetFichaTecnica = async (nameRequest, data) => {
  const get = await Get(nameRequest, data)
  return get
}

const GetModalRegister = async (nameRequest) => {
  const get = await GetModalRegisterFichaTecnica(nameRequest);
  return get
}

export {RegisterFichaTecnica, GetModalRegister, GetFichaTecnica}