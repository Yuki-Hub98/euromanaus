import Loading from "@/app/dashboard/loading"
import { Suspense } from "react"

export default function Layout({ children }) {
	return (
  <>
    <section>
      <Suspense fallback={<Loading/>}>
        <div className="h-screen flex flex-col pl-2 bg-background-page">
          {children}
        </div>
      </Suspense>
    </section>
  </>
  )
}