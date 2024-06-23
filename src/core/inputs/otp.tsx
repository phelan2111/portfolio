import { useState } from 'react';
import OTPInput from 'react-otp-input';

interface IInputOTPProps {
	numInputs?: number;
	defaultValue?: string;
}

function InputOTP({
	defaultValue = '',
	numInputs = 6,
	...props
}: IInputOTPProps) {
	const [otp, setOtp] = useState<string>(defaultValue);

	return (
		<OTPInput
			value={otp}
			onChange={setOtp}
			numInputs={numInputs}
			containerStyle={{
				justifyContent: 'space-between',
			}}
			renderInput={(props) => (
				<input
					{...props}
					type='number'
					className='!w-12 !h-12 rounded-sm outline-none text-primary_dark text-lg focus:shadow-white shadow-bootstrapLarge'
				/>
			)}
			{...props}
		/>
	);
}

export default InputOTP;
