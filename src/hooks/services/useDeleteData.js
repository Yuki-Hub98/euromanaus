"use client";
import SuccessAlert from "@/components/ui/successAlert";
import Warning from "@/components/ui/warning";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDelete } from "@/reducers/models/dataReducer";

const useDeleteData = (deleteFunction) => {
  const resultDelte = useSelector(state => state.data)
  const [status, setStatus] = useState()
  const dispatch = useDispatch();
  const CloseStatus = () => {
		return setStatus(null);
	}

  const DeleteData = async (nameRequest, data) => {
      try {
        const statusDel = await deleteFunction(nameRequest, data)
        console.log(statusDel)
        if (statusDel?.status === 403 ) {
          setStatus(statusDel)
          throw new Error (statusDel.message)
        }
        dispatch(setDelete(statusDel))
        setStatus(statusDel)
      } catch (error) {
        console.log(error)
      }
	}

  let statusDelete =  status?.del ? ( <> <SuccessAlert CloseStatus={CloseStatus}  message="Deletado com com Sucesso !"/> </> ): (null)

  let warningDelete = status?.error ? ( <> <Warning status={status} CloseStatus={CloseStatus} /> </>) : (null) 

  return {resultDelte, statusDelete, warningDelete, DeleteData}

}

export default useDeleteData