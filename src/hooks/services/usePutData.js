import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { setEdit, setEditSeveralData } from "@/reducers/models/dataReducer";
import { RemoveDuplicatesPut } from "@/functions/removeDuplicates";

const usePutData = (putFunction) => {
  const dataGlobal = useSelector(state => state.data.renderItemsState)
  const [status, setStatus] = useState()
  const dispatch = useDispatch();
  const CloseStatus = () => {
		return setStatus(null);
	}

  const ReceivePut = async (nameRequest, data) =>{
    if (data) {
      try {
        const statusPut = await putFunction(nameRequest, data)
        if (statusPut?.status === 422) {
          setStatus(statusPut)
          throw new Error (statusPut.message)
        }
        if(statusPut?.data?.length > 0) {
          const newData = RemoveDuplicatesPut(dataGlobal, statusPut.data);
          newData.forEach(element => dispatch(setEdit(element)));
          setStatus(statusPut)
          return;
        }
        if(statusPut?.data?.summaryItems){
          dispatch(setEditSeveralData(statusPut?.data?.summaryItems, statusPut?.data?.allItems))
        }else{
          dispatch(setEdit(statusPut.data))
        };
        setStatus(statusPut)
      } catch (error) {
        console.log(error)
      }  
    }
}

let statusEdit =  status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Editado com com Sucesso !"/> </> ): (null)

let warningEdit = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

return { statusEdit, warningEdit, ReceivePut }
}

export default usePutData