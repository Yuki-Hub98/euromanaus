"use client"
import { useState } from "react";

const useSideBar = (open) => {
  const [isOpen, setIsOpen ] = useState(open);
  
  const sideBar = () => {
    setIsOpen(!isOpen)
  }
  return {isOpen, sideBar}
}

export {useSideBar}