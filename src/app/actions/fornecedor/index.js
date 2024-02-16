"use server";
import Cep from "@/pages/api/fornecedor/cep";
import Get from "@/pages/api/fornecedor/get";
import Post from "@/pages/api/fornecedor/post";

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

export {GetCep, PostFornecedor, GetFornecedor}