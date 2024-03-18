'use client';
import {NextUIProvider} from '@nextui-org/react'
import {useRouter} from 'next/navigation'

export default function Provider({children}){
	const router = useRouter();
	return (
		<NextUIProvider className='h-full' navigate={router.push}>
			{children}
		</NextUIProvider>

	)
}