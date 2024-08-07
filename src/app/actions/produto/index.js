"use server";
import CodBarras from "@/app/api/produto/codBarras";
import Get from "@/app/api/produto/get";
import GetItensFichaTecnica from "@/app/api/produto/getItensFichaTecnica";
import Post from "@/app/api/produto/post";
import CstIcms from "@/app/api/produto/csticms";
import Ncm from "@/app/api/produto/ncm";
import ModeloLinha from "@/app/api/produto/modeloLinha";
import Del from "@/app/api/produto/del";
import SearchProduto from "@/app/api/produto/getProduto";
import LastIdItem from "@/app/api/produto/getLastId";
import ProdutoToEdit from "@/app/api/produto/produtoToEdit";
import Put from "@/app/api/produto/put";


const GetProduto = async (nameRequest, data) => {
  const get = await Get(nameRequest,  data)
  return get
}

const GetSearchProduto = async (data) => {
  const get = await SearchProduto(data)
  return get
}

const GetFichaTecnicaItens = async (nameRequest, data) => {
  const get = await GetItensFichaTecnica(nameRequest, data)
  return get
}

const GetLastIdItem = async () =>{
  const get = await LastIdItem()
  return get
}

const GetCst_Icms = async (data) => {
  const get = await CstIcms(data)
  return get 
}

const GetNcm = async (data) => {
  const get = await Ncm(data)
  return get
}

const GetModeloLinha = async (data) => {
  const get = await ModeloLinha(data)
  return get
}

const GetProdutoToEdit = async (data) => {
  const get = await ProdutoToEdit(data)  
  return get
}

const PostProduto = async (nameRequest, data) => {
  const post = await Post(nameRequest, data)
  return post
}

const PutProdudo = async (nameRequest, data) => {
  const put = await Put(nameRequest, data)
  return put
}

const PostCod = async (data) => {
  const post = await CodBarras(data);
  return post
}

const DelProduto = async (nameRequest, data) =>{
  const del = await Del(nameRequest, data)
  return del
}

export {GetProduto, GetFichaTecnicaItens, GetCst_Icms, GetNcm, GetModeloLinha, GetSearchProduto, GetLastIdItem, GetProdutoToEdit, PostProduto, PostCod, PutProdudo, DelProduto}