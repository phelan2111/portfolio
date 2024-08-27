import TextField from '@/components/root/inputs/textField';
import Localize from '@/langs';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function InputSearchDesktop() {
	const [searchValue, setSearchValue] = useState<string>('');
	console.log('searchValue', searchValue);

	const handleChangeInput = (value: string) => {
		setSearchValue(value);
	};

	return (
		<article className='flex items-center relative bg-primary_dark p-2 animate-translateBottom_duration_0dot8 rounded-xl w-full max-w-96'>
			<div className='w-8 h-8 absolute left-5 top-0 bg-primary_dark rounded-full animate-push' />
			<div className='w-4 h-4 absolute left-3 top-0 delay-150 bg-primary_dark rounded-full animate-push_delay_0dot8' />
			<div
				aria-hidden
				className='rounded-xl relative flex items-center min-w-8 h-8 justify-center bg-primary_dark'>
				<FiSearch className='text-xl relative z-10 text-primary_light' />
			</div>
			<div className='w-full'>
				<TextField
					autoFocus={true}
					onChange={(value) => {
						handleChangeInput(value);
					}}
					placeholder={Localize('WHAT_DO_YOU_WANT')}
					classNameInput='text-primary_light'
					className='!bg-transparent hover:!shadow-none !h-8 focus-within:!shadow-none'
				/>
			</div>
		</article>
	);
}

export default InputSearchDesktop;
