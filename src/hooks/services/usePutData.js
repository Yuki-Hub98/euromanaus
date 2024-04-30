import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { setEdit, setEditSeverallData } from "@/reducers/models/dataReducer";

const usePutData = (putFunction) => {
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
        if(statusPut.data?.summaryItems){
          dispatch(setEditSeverallData(statusPut.data))
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