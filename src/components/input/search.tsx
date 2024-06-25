import { ReactNode, useState } from 'react';

import PopperSearch from '@/core/popper/search';
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
	const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const handleClose = () => {
		setIsOpenPopup(false);
	};
	const handleOpen = () => {
		setIsOpenPopup(true);
	};
	const handleSetValue = (valueInput: string) => {
		setValue(valueInput);
	};

	return (
		<div>
			<div
				className='flex select-none bg-white shadow-materialDesign hover:shadow-bootstrapLarge transition-all duration-500 rounded-md text-primary_dark items-center gap-2 p-2'
				aria-hidden
				onClick={handleOpen}>
				<IoIosSearch className='text-2xl' />
				<p>{Localize('WHAT_DO_YOU_WANT')}</p>
			</div>
			<PopperSearch onClose={handleClose} isOpen={isOpenPopup}>
				<section key={`${isOpenPopup}`}>
					<article className='flex items-center bg-primary_dark p-2 animate-translateLeft_duration_2s'>
						<div
							aria-hidden
							onClick={handleClose}
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
							isOpen: isOpenPopup,
							onClose: handleClose,
							onOpen: handleOpen,
						})}
					</article>
				</section>
			</PopperSearch>
		</div>
	);
}

export default InputSearch;
