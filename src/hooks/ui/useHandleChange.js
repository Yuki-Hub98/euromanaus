"use client"
import { useEffect, useState } from "react"
import RegexToSave from "@/functions/regexToSave";

const useHandleChange = (value) => {
  const [dataHandleChange, setDataHandleChange] = useState();
  
  useEffect(() => {
    setDataHandleChange(value)
  }, [value])

  const clearHandle = () => {
    setDataHandleChange(null)
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    if (value == "") {
      setDataHandleChange(evetData => ({
        ...evetData,
        [name]: undefined
      }))
    }else{
      setDataHandleChange(evetData => ({
        ...evetData,
        [name]: RegexToSave(value)
      }))
    }
    
  }

  return {dataHandleChange, clearHandle, handleChange}

}

export default useHandleChange