import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "@/reducers/models/dataReducer";
const usePutData = (putFunction) => {

  const resultPut = useSelector(state => state.data)
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
        setStatus(statusPut)
        dispatch(setEdit(statusPut.data))
      } catch (error) {
        console.log(error)
      }  
    }
}

let statusEdit =  status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Editado com com Sucesso !"/> </> ): (null)

let warningEdit = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

return {resultPut, statusEdit, warningEdit, ReceivePut}
}

export default usePutData