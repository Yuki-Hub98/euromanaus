import Loading from "@/app/dashboard/loading"
import { Suspense } from "react"
import formatText from "@/functions/formatText"

export default function LayoutPrint({ children }) {
  const title = children.props.childProp
	return (
  <>
    <Suspense fallback={<Loading/>}>
      <section className="h-screen w-screen bg-white">
        <header className="h-1/6 w-full flex justify-center">
          <h1 className="text-background-component">{formatText(title.segment)}</h1>
        </header>
        <div className="h-full w-full ">
          {children}
        </div>
        <footer className="h-1/6 w-full bg-white ">
        </footer>
      </section>
    </Suspense>
  </>
  )
}