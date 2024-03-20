import SuccessAlert from "@/components/SuccessAlert";
import Warning from "@/components/Warning";
import React, {useState} from "react"
const usePutData = (putFunction) => {

  const [resultPut, setResultPut] = useState()

  const CloseStatus = () => {
		return setResultPut(null);
	}

  const ReceivePut = async (nameRequest, data) =>{
    if (data) {
      const statusPut = await putFunction(nameRequest, data)
      setResultPut(statusPut)
    }
  }

  let statusEdit =  resultPut?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Editado com com Sucesso !"/> </> ): (null)

  let warningEdit = resultPut?.error ? ( <> <Warning status={resultPut} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultPut, statusEdit, warningEdit, ReceivePut}
}
export default usePutData