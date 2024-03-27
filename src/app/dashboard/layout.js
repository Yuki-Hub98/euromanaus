"use client"
import Sidebar from "@/components/ui/sideBar"
import { Suspense } from "react"
import { useSideBar } from "@/hooks/ui/useSideBar"
import Loading from "./loading"
export default function Layout({ children }) {
  const {isOpen, sideBar} = useSideBar(true)
	return (
  <>
  <Suspense fallback={<Loading/>}>
    <Sidebar statusSide={sideBar}/>
      <div className={`flex h-screen ${isOpen ? 'ml-[16rem]': 'ml-16'} duration-300 bg-[#000000] overflow-hidden`}>
        <div className="relative max-h-full flex flex-1 flex-col overflow-y-auto pl-2 overflow-x-hidden">
          {children}
        </div>
      </div>
  </Suspense>
  </>
	)
}
