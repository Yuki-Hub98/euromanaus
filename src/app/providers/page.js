'use client';
import {NextUIProvider} from '@nextui-org/react'
import { RecoilRoot } from 'recoil'

export default function Provider({children}){
	return (
		<RecoilRoot>
			<NextUIProvider className='h-full'>
				{children}
			</NextUIProvider>
		</RecoilRoot>
	)
}