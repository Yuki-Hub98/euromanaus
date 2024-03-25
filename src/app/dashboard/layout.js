"use client"
import Sidebar from "@/components/ui/SideBar"
import { Suspense } from "react"
import Spinner from "@/components/ui/animation/spinner"
import { useSideBar } from "@/hooks/ui/useSideBar"
export default function LayoutDashboard({ children }) {
  const {isOpen, sideBar} = useSideBar(true)
	return (
  <>
  <Suspense fallback={<Spinner/>}>
    <Sidebar statusSide={sideBar}/>
      <div className={`flex h-screen ${isOpen ? 'ml-[16rem]': 'ml-16'} duration-300 bg-[#000000] overflow-hidden`}>
        <div className="relative max-h-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
  </Suspense>
  </>
	)
}
