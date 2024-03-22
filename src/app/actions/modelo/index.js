"use server";
import PostModelo from "@/app/api/produto/postModelo"
import GetModelos from "@/app/api/produto/getModelo"
import DelModelos from "@/app/api/produto/delModelo";
import PutModelos from "@/app/api/produto/putModelo";

const RegisterModelo = async (nameRequest, data) => {
  const post = await PostModelo(nameRequest, data)
  return post
}

const SearchModelo = async (nameRequest, data) => {
  const get = await GetModelos(nameRequest, data)
  return get
}

const EditModelo = async (nameRequest, data) => {
  const put = await PutModelos(nameRequest, data)
  return put
}

const DeleteModelo = async (nameRequest, data) => {
  const del = await DelModelos(nameRequest, data)
  return del
}

export {RegisterModelo, SearchModelo, EditModelo, DeleteModelo}
