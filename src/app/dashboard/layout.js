import Sidebar from "@/components/SideBar"
export default function LayoutDashboard({ children }) {
	return (
  <>
  <Sidebar/>
    <div className="flex h-screen ml-[16rem] bg-[#000000] overflow-hidden">
      <div className="relative max-h-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
      </div>
    </div>
  </>
	)
}
