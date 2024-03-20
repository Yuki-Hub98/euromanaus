"use client";
import SuccessAlert from "@/components/SuccessAlert";
import Warning from "@/components/Warning";
import {useState} from "react";

const useDeleteData = (deleteFunction) => {
  const [resultDelte, setResultDelete] = useState();

  const CloseStatus = () => {
		return setResultDelete(null);
	}

  const DeleteData = async (nameRequest, data) => {
		const statusDel = await deleteFunction(nameRequest,data)
		setResultDelete(statusDel)
	}

  let statusDelete =  resultDelte?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Deletado com com Sucesso !"/> </> ): (null)

  let warningDelete = resultDelte?.error ? ( <> <Warning status={resultDelte} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultDelte, statusDelete, warningDelete, DeleteData}

}

export default useDeleteData