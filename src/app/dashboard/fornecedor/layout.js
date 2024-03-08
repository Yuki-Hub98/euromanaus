import { Suspense } from "react"
import Loading from "../loading"
export default function LayoutFornecedor({ children }) {
	return (
  <>
    <section>
      <div className="h-screen flex flex-col pl-2 bg-background-page">
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </div>
    </section>
  </>
  )
}