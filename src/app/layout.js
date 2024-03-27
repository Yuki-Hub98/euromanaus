import { Inter } from 'next/font/google'
import "../styles/globals.css"
import Providers from './providers/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Euromanaus',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ `${inter.className} h-full` }>
				<div className='flex h-screen overflow-hidden'>
					<Providers>
						<div className="flex h-screen bg-[#000000] overflow-hidden">
								<div className="relative max-h-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
									<main className="purple-dark text-foreground bg-background">
										{children}
									</main>
								</div>
						</div>
					</Providers>
				</div>
			</body>
		</html>
	)
}
