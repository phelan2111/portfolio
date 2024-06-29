import { ReactNode, useState } from 'react';

import PopperBottomRight from '@/core/popper/bottomRight';
import { IoIosSearch } from 'react-icons/io';
import Localize from '@/langs';
import { IoArrowBackOutline } from 'react-icons/io5';
import TextField from '@/core/inputs/textField';

export interface IRenderInputSearchProps {
	valueSearch: string;
	isOpen: boolean;
	onClose: VoidFunction;
	onOpen: VoidFunction;
}
interface IInputSearchProps {
	render: (renderProps: IRenderInputSearchProps) => ReactNode;
}

function InputSearch(props: IInputSearchProps) {
	const [value, setValue] = useState<string>('');

	const handleSetValue = (valueInput: string) => {
		setValue(valueInput);
	};

	return (
		<PopperBottomRight
			renderMainContent={(renderProps) => {
				return (
					<div
						onClick={renderProps.onOpen}
						className='flex select-none bg-white shadow-materialDesign hover:shadow-bootstrapLarge transition-all duration-500 rounded-md text-primary_dark items-center gap-2 p-2'
						aria-hidden>
						<IoIosSearch className='text-2xl' />
						<p>{Localize('WHAT_DO_YOU_WANT')}</p>
					</div>
				);
			}}
			renderPopper={(renderProps) => {
				return (
					<section key={`${renderProps.isOpen}`}>
						<article className='flex items-center bg-primary_dark p-2 animate-translateLeft_duration_2s'>
							<div
								aria-hidden
								onClick={renderProps.onClose}
								className='min-w-10 h-10 rounded-full flex items-center justify-center'>
								<IoArrowBackOutline />
							</div>
							<div className='w-full'>
								<TextField
									onChange={handleSetValue}
									placeholder={Localize('WHAT_DO_YOU_WANT')}
									classNameInput='text-primary_light'
									className='!bg-transparent hover:!shadow-none focus-within:!shadow-none'
								/>
							</div>
						</article>
						<article>
							{props.render({
								valueSearch: value,
								...renderProps,
							})}
						</article>
					</section>
				);
			}}
		/>
	);
}

export default InputSearch;
