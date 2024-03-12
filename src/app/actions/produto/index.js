"use server";
import CodBarras from "@/app/api/produto/codBarras";
import Get from "@/app/api/produto/get";
import Post from "@/app/api/produto/post";
import CstIcms from "@/app/api/produto/csticms";
import Ncm from "@/app/api/produto/ncm";

const PostCod = async (data) => {
  const post = await CodBarras(data);
  return post
}

const GetCst_Icms = async (data) => {
  const get = await CstIcms(data)
  return get 
}

const GetNcm = async (data) => {
  const get = await Ncm(data)
  return get
}

const PostProduto = async (nameRequest, data) => {
  const post = await Post(nameRequest, data)
  return post
}

const GetProduto = async (nameRequest, data) => {
  const get = await Get(nameRequest,  data)
  return get
}

export {PostCod, GetProduto, PostProduto, GetCst_Icms, GetNcm}