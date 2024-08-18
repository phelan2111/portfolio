import {
	forwardRef,
	ForwardRefRenderFunction,
	RefObject,
	useImperativeHandle,
	useRef,
} from 'react';
import { CiSearch } from 'react-icons/ci';

export type InputHandle = {
	focus: VoidFunction;
};

export type InputSearchYourLibraryProps = {
	onChange: VoidFunction;
};

const InputRef = (
	props: InputSearchYourLibraryProps,
	ref: RefObject<InputHandle>,
) => {
	const inputRef = useRef<HTMLInputElement>(null);
	useImperativeHandle(ref, () => {
		return {
			focus() {
				if (inputRef.current) {
					inputRef.current.focus();
				}
			},
			onChange() {},
		};
	});
	return (
		<input
			className='bg-transparent w-52 outline-none hidden group-focus-within:block group-hover:block text-sm'
			type='text'
			{...props}
			ref={inputRef}
		/>
	);
};

const Input = forwardRef(
	InputRef as ForwardRefRenderFunction<
		InputHandle,
		InputSearchYourLibraryProps
	>,
);

function SearchYourLibrary(props: InputSearchYourLibraryProps) {
	const ref = useRef<InputHandle>(null);

	return (
		<div
			aria-hidden
			onMouseOut={() => ref.current?.focus()}
			onBlur={() => void 0}
			className='flex items-center bg-white/10 h-10 group rounded-full w-10 hover:w-64 focus-within:w-64 transition-all duration-500 cursor-pointer'>
			<div className='min-w-10 h-10 flex items-center justify-center'>
				<CiSearch />
			</div>
			<Input {...props} ref={ref} />
		</div>
	);
}

export default SearchYourLibrary;
