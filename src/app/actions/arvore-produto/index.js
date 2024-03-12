"use server";

import Get from "@/app/api/arvore-produto/get";
import Post from "@/app/api/arvore-produto/post";
import Put from "@/app/api/arvore-produto/put";
import Del from "@/app/api/arvore-produto/del";

const PostArvoreProduto = async (request, data) => {
	const post = await Post(request, data)
	return post
}

const GetArvoreProduto = async (request, data, flag) => {
	const get = await Get(request, data, flag)
	return get
}

const PutArvoreProduto = async (request, data) => {
	const put = await Put(request, data)
	return put
}

const DelArvoreProduto = async (request, data) => {
	const del = await Del(request, data)
	return del
}

export { PostArvoreProduto, GetArvoreProduto, PutArvoreProduto, DelArvoreProduto}