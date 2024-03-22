"use client"
import { useState } from "react"

const useHandleChange = () => {
  const [dataHandleChange, setDataHandleChange] = useState();
  const handleChange = (e) => {
    const {name, value} = e.target.value;

    setDataHandleChange(evetData => ({
      ...evetData,
      [name]: value
    }))
  }

  return {dataHandleChange, handleChange}

}

export default useHandleChange