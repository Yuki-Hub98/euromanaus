"use server";

import Get from "@/pages/api/arvore-produto/get";
import Post from "@/pages/api/arvore-produto/post";

const PostArvoreProduto = async (data, resquest) => {
    Post(data, resquest)
}

const GetArvoreProduto = async (request) => {
    return Get(request)
}

export { PostArvoreProduto, GetArvoreProduto}