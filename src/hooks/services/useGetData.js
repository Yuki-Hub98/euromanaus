"use client";
import Warning from "@/components/ui/warning";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGet } from "@/reducers/models/dataReducer";
const useGetData = (getFunction) => {

	const resultGet = useSelector(state => state.data);
	const [status, setStatus] = useState()
  const dispatch = useDispatch();

	const CloseStatus = () => {
		setStatus(null)
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
			try {
				const dataTable = await getFunction(nameRequest, dataGet);
				setStatus(dataTable)
				dispatch(setGet(dataTable));
			} catch (error) {
				console.error('Erro ao pesquisar dados:', error);
			}
		}else{
			try {
				const dataTable = await getFunction(nameRequest);
				setStatus(dataTable)
				dispatch(setGet(dataTable));
			} catch (error) {
				const statusError = {
					status: 404,
					error: "Erro ao pesquisar dados",
					message: "Por favor contacte os administradores"
				}
				setStatus(statusError)
			}
		}
	}

  let warningGet = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)

  return {resultGet, warningGet, ReceiveGet}
}

export default useGetData