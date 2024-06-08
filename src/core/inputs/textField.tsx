import Localize from '@/langs';

interface ITextFieldProps {
	label?: string;
	className?: string;
	name?: string;
}

function TextField({ className = '', name = '', ...props }: ITextFieldProps) {
	return (
		<div className='flex flex-col gap-0.5'>
			{props.label && <p className='text-sm'>{Localize(props.label)}</p>}
			<input
				name={name}
				className={`w-full outline-none h-11 text-primary_dark px-4 rounded-sm focus:shadow-white hover:shadow-white transition-all text-base duration-500 ${className}`}
			/>
			{/* <p className='text-xs text-red-300 px-2 py-0.5 rounded-3xl italic text-end'>
				error
			</p> */}
		</div>
	);
}

export default TextField;
