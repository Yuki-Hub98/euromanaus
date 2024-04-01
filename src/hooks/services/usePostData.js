"use client";
import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "@/reducers/models/dataReducer";

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
    try {
      const dataPost = await postFunction(nameRequest ,data)
      console.log(dataPost)
      if (dataPost?.status === 422) {
        setStatus(dataPost)
        throw new Error (dataPost.message)
      }
      dispatch(setPost(dataPost))
      setStatus(dataPost)
    } catch (error) {
      console.log(error)
    }
  }

  let statusPost = status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) 

  let warningPost = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultPost, statusPost, warningPost, ReceivePost}

}

export default usePostData