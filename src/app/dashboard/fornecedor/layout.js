import { Suspense } from "react"
import Loading from "../loading"
export default function LayoutFornecedor({ children }) {
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