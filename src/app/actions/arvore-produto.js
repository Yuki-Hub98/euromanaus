"use server";

import Get from "@/pages/api/arvore-produto/get";
import Post from "@/pages/api/arvore-produto/post";

const PostArvoreProduto = async (data, resquest) => {
    const post = await Post(data, resquest)
    return post
}

const GetArvoreProduto = async (request) => {
    const get = await Get(request)
    return get
}

export { PostArvoreProduto, GetArvoreProduto}