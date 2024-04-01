import Search from "../../ComponentsCompras/search";
import { usePathname } from "next/navigation";



const TopButtons = (props) => {
	const router = usePathname()
	const { GetData } = props

	const OptionPage = (page) => {
		switch (page) {
			case"/dashboard/produtos":
				return(
					<>
					<Search data={props} ReceiveGet={GetData} router={page} />
					</>
				)
			case"/dashboard/modelos":
			return(
				<>
					<div className='flex flex-col justify-center items-center'>
						<Search data={props} ReceiveGet={GetData} router={page} />
					</div>
				</>
			)
			default:
				break;
		}
	}

	return(
		<div className='w-full flex flex-row pl-2 h-1/4 shadow-2xl mt-8 rounded  gap-2 bg-background-component'>
			<div className=' w-full absolute pl-2'>
				<h1 className='font-bold text-background-table capitalize'>{props?.title}</h1>
			</div>
			{OptionPage(router)}
		</div>
	)
	
	}
export default TopButtons