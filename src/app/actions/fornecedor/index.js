"use server";
import Cep from "@/pages/api/fornecedor/cep";
import Post from "@/pages/api/fornecedor/post";

const GetCep = async (data) => {
    const cep = Cep(data);
    return cep
}

const PostFornecedor = async (request, data) => {
    const post = await Post(request, data);
    return post
}

export {GetCep, PostFornecedor}