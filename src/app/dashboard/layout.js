import Sidebar from "@/components/SideBar"
import { Suspense } from "react"
import Spinner from "@/components/Spinner"
export default function LayoutDashboard({ children }) {
	return (
  <>
  <Suspense fallback={<Spinner/>}>
    <Sidebar/>
      <div className="flex h-screen ml-[16rem] bg-[#000000] overflow-hidden">
        <div className="relative max-h-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
  </Suspense>
  </>
	)
}
