import { GetArvoreProduto } from "@/app/actions/arvore-produto"
import { useState } from "react"

const useSearchArvoreProduto = () => {
  const [dataArvore, setDataArvore] = useState({
    linha:[],
    familia:[],
    grupo:[],
  });

  const requestArvore = async (e) => {
    const {name, value} = e.target
    if (value === '') {
      return;
    }
    if (name === "departamento") {
      const linhaData = await GetArvoreProduto("linha", value, "produto")
      setDataArvore(data => ({
        ...data,
        ["linha"]: [linhaData]
      }))
    }else if (name === "linha") {
      const familiaData = await GetArvoreProduto("familia", value, "produto")
      setDataArvore(data => ({
        ...data,
        ["familia"]: [familiaData]
      }))
    }else if (name === "familia") {
      const grupoData = await GetArvoreProduto("grupo", value, "produto")
      setDataArvore(data => ({
        ...data,
        ["grupo"]: [grupoData]
      }))
    }
  }

  return {requestArvore, dataArvore}
}

export default useSearchArvoreProduto

