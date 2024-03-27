"use client";
import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePostData = (postFunction) => {

  const resultPost = useSelector(state => state.data);
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const CloseStatus = () => {
    setStatus(null)
  }

  const ReceivePost = ( nameRequest ,data) => {
    if (data) {
      Request(nameRequest ,data)
    }
  }

  const Request = async (nameRequest ,data) => {
    try{
      const dataPost = await postFunction(nameRequest ,data)
      if (dataPost.status === 200) {
        setStatus(dataPost)
        dispatch({type: 'POST_DATA', payload: dataPost.data})
      }else{
        setStatus(dataPost)
      }
    }catch(error){
      const statusError = {
        status: 404,
        error: "Erro ao cadastrar dados",
        message: "Por favor contacte os administradores"
      }
      setStatus(statusError)
    }
      
      
  }

  let statusPost = status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) 

  let warningPost = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultPost, statusPost, warningPost, ReceivePost}

}

export default usePostData