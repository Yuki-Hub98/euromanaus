"useServer";
import Cep from "@/pages/api/fornecedor/cep";

const GetCep = async (data) => {
    const cep = Cep(data)
    return cep
}

export {GetCep}