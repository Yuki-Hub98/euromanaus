"use client";
import Warning from "@/components/ui/warning";
import { useState } from "react";
const useSearchData = (getFunction) => {
  const [searchData, setSearchData] = useState([]);
	const [status, setStatus] = useState();
	const CloseStatus = () => {
		setStatus(null)
	}
	const ClearSearchData = () => {
		setSearchData([])
	}

  const Search = async (nameRequest, dataGet) => {
		if (dataGet) {
			try {
				const dataTable = await getFunction(nameRequest, dataGet);
				setStatus(dataTable)
				setSearchData(dataTable)
			} catch (error) {
				console.error('Erro ao pesquisar dados:', error);
			}
		}else{
			try {
				const dataTable = await getFunction(nameRequest);
				setStatus(dataTable)
				setSearchData(dataTable)
			} catch (error) {
				console.log(error)
			}
		}
	}

  let warningSearchDatat = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)

  return {searchData, warningSearchDatat, Search, ClearSearchData}
}

export default useSearchData