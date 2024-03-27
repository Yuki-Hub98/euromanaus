'use client';
import {NextUIProvider} from '@nextui-org/react'
import {useRouter} from 'next/navigation'
import { Provider } from 'react-redux';
import store from '@/reducers/store';

export default function Providers({children}){
	const router = useRouter();
	return (
		<Provider store={store}>
			<NextUIProvider className='h-full' navigate={router.push}>
				{children}
			</NextUIProvider>
		</Provider>

	)
}