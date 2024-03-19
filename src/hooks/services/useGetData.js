"use client";
import Warning from "@/components/Warning";
import {useState} from "react";
const useGetData = (getFunction) => {

  const [resultGet, setResultGet] = useState([{}]);

	const CloseStatus = () => {
		return setResultGet(null);
	}

  const ReceiveGet = (nameRequest, data) => {
    if (data) {
			Search(nameRequest, data)
		}else{
			Search(nameRequest)
		}
	}

  const Search = async (nameRequest, dataGet) => {
		if (dataGet) {
			const data =  await getFunction(nameRequest, dataGet)
			setResultGet(data)
		}else{
			const data =  await getFunction(nameRequest)
			setResultGet(data)
		}
	}

  let warningGet = resultGet?.error ? ( <> <Warning status={resultGet} CloseStatus={CloseStatus} /> </>) : (null)

  return {resultGet, warningGet, ReceiveGet}
}

export default useGetData