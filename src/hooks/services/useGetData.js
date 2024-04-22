"use client";
import Warning from "@/components/ui/warning";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGet, setGetSeveralData } from "@/reducers/models/dataReducer";
const useGetData = (getFunction) => {

	const resultGet = useSelector(state => state.data.renderItemsState);
	const severAllGet = useSelector(state => state.data.allItemsState);
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
				if(dataTable[0]?.summaryItems){
					let summaryItems = dataTable.map((element) => 	element.summaryItems);
					let allItems = dataTable.map((element) => element.allItems);
					dispatch(setGetSeveralData(summaryItems, allItems));
				}else{ 
					dispatch(setGet(dataTable));
				}
			} catch (error) {
				console.error('Erro ao pesquisar dados:', error);
			}
		}else{
			try {
				const dataTable = await getFunction(nameRequest);
				setStatus(dataTable)
				if(dataTable[0]?.summaryItems){
					dispatch(setGetSeveralData(dataTable))
				}else{ 
					dispatch(setGet(dataTable));
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

  let warningGet = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null)

  return {resultGet, severAllGet, warningGet, ReceiveGet}
}

export default useGetData