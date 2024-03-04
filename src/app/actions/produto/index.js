"use server";
import PostCodBarras from "@/pages/api/produto/codBarras";
import Get from "@/pages/api/produto/get";
import Post from "@/pages/api/produto/post";

const PostCod = async (data) => {
  const post = await PostCodBarras(data);
  return post
}

const PostProduto = async (nameRequest, data) => {
  const post = await Post(nameRequest, data)
  return post
}

const GetProduto = async (nameRequest, data) => {
  const get = await Get(nameRequest,  data)
  return get
}

export {PostCod, GetProduto, PostProduto}