'use client';
import {NextUIProvider} from '@nextui-org/react'

export default function Provider({children}){
	return (
		<NextUIProvider className='h-full'>
			{children}
		</NextUIProvider>

	)
}