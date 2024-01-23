"use server";

import Get from "@/pages/api/arvore-produto/get";
import Post from "@/pages/api/arvore-produto/post";

const PostArvoreProduto = async (request, data) => {
    const post = await Post(request, data)
    return post
}

const GetArvoreProduto = async (request ,data) => {
    const get = await Get(request, data)
    return get
}

export { PostArvoreProduto, GetArvoreProduto}