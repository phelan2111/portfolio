import TextField, { ITextFieldProps } from '@/core/inputs/textField';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface IInputPasswordProps extends ITextFieldProps {}

function InputPassword(props: IInputPasswordProps) {
	const [isShowPass, setIsShowPass] = useState<boolean>(false);

	const handleToggleShowPassword = () => {
		setIsShowPass((prev) => !prev);
	};
	return (
		<TextField
			type={isShowPass ? 'text' : 'password'}
			icon={{
				direction: 'end',
				node: (
					<div
						aria-hidden
						className='text-primary_dark cursor-pointer'
						onClick={handleToggleShowPassword}>
						{isShowPass ? <BsEye /> : <BsEyeSlash />}
					</div>
				),
			}}
			{...props}
		/>
	);
}

export default InputPassword;
