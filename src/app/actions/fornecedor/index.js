"use server";
import Cep from "@/app/api/fornecedor/cep";
import Del from "@/app/api/fornecedor/del";
import Get from "@/app/api/fornecedor/get";
import Post from "@/app/api/fornecedor/post";
import Put from "@/app/api/fornecedor/put";

const GetCep = async (data) => {
	const cep = Cep(data);
	return cep
}

const PostFornecedor = async (request, data) => {
	const post = await Post(request, data);
	return post
}

const GetFornecedor = async (request, data, flag) => {
	const get = await Get(request, data, flag);
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