"use server";
import Cep from "@/pages/api/fornecedor/cep";
import Del from "@/pages/api/fornecedor/del";
import Get from "@/pages/api/fornecedor/get";
import Post from "@/pages/api/fornecedor/post";
import Put from "@/pages/api/fornecedor/put";

const GetCep = async (data) => {
    const cep = Cep(data);
    return cep
}

const PostFornecedor = async (request, data) => {
    const post = await Post(request, data);
    return post
}

const GetFornecedor = async (request, data) => {
    const get = await Get(request, data);
    return get
}

const PutFornecedor = async(request, data) => {
    const put = await Put(request, data)
    return put
}

const DelFornecedor = async (request, data) => {
    const del = await Del(request, data)
    return del
}

export {GetCep, PostFornecedor, GetFornecedor, PutFornecedor, DelFornecedor}