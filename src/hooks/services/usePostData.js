"use client";
import SuccessAlert from "@/components/SuccessAlert";
import Warning from "@/components/Warning";
import {useState} from "react";

const usePostData = (postFunction) => {

  const [resultPost, setResultPost] = useState();

  const CloseStatus = () => {
		return setResultPost(null);
	}

  const ReceivePost = ( nameRequest ,data) => {
    if (data) {
      Request(nameRequest ,data)
    }
  }

  const Request = async (nameRequest ,data) => {
    const status = await postFunction(nameRequest ,data)
    setResultPost(status)
  }

  let statusPost = resultPost?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) 

  let warningPost = resultPost?.error ? ( <> <Warning status={resultPost} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultPost, statusPost, warningPost, ReceivePost}

}

export default usePostData