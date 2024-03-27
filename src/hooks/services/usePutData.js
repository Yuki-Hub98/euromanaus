import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
const usePutData = (putFunction) => {

  const resultPut = useSelector(state => state.data)
  const [status, setStatus] = useState()
  const dispatch = useDispatch();
  const CloseStatus = () => {
		return setStatus(null);
	}

  const ReceivePut = async (nameRequest, data) =>{
    if (data) {
      try{
        const statusPut = await putFunction(nameRequest, data)
        setStatus(statusPut)
        dispatch({type: 'EDIT_DATA', payload: statusPut.data})
      }catch{
        const statusError = {
          status: 404,
          error: "Erro ao editar dados",
          message: "Por favor contacte os administradores"
        }
        setStatus(statusError)
      }
      
    }
  }

  let statusEdit =  status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Editado com com Sucesso !"/> </> ): (null)

  let warningEdit = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultPut, statusEdit, warningEdit, ReceivePut}
}
export default usePutData