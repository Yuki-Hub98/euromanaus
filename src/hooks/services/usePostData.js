"use client";
import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "@/reducers/models/dataReducer";
import { RemoveDuplicatesPost } from "@/functions/removeDuplicates";

const usePostData = (postFunction) => {

  const dataGlobal = useSelector(state => state.data);
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
      if (dataPost?.status === 422) {
        setStatus(dataPost)
        throw new Error (dataPost.message)
      }
      if(dataPost?.data?.length > 0) {
        const newData = RemoveDuplicatesPost(dataGlobal, dataPost.data);
        newData.forEach(element => dispatch(setPost(element)));
        setStatus(dataPost);
        return;
      }
      dispatch(setPost(dataPost?.data));
      setStatus(dataPost);
    } catch (error) {
      console.log(error)
    }
  }

  let statusPost = status?.status === 200 ? ( <> <SuccessAlert CloseStatus={CloseStatus} message="Cadastro efetuado com Sucesso !"/> </> ): (null) 

  let warningPost = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

  return { statusPost, warningPost, ReceivePost }

}

export default usePostData