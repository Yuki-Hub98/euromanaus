
import {Button} from "@nextui-org/react";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<div className="h-screen flex flex-col pl-2 bg-background-page">
				<Button className="bg-[#edca62b4] shadow-lg shadow-indigo-500/20"><Link href={"/dashboard"}>Navegar dashboard</Link></Button>
			</div>
		</>
	)
}