"use server";

import Get from "@/pages/api/arvore-produto/get";
import Post from "@/pages/api/arvore-produto/post";
import Put from "@/pages/api/arvore-produto/put";

const PostArvoreProduto = async (request, data) => {
    const post = await Post(request, data)
    return post
}

const GetArvoreProduto = async (request ,data) => {
    const get = await Get(request, data)
    return get
}

const PutArvoreProduto = async (request, data) => {
    const put = await Put(request, data)
    return put
}

export { PostArvoreProduto, GetArvoreProduto, PutArvoreProduto}