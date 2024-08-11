import View from './view';
import { useState } from 'react';
import { STEP_SIGN_UP } from './types';

function Component() {
	const [step, setStep] = useState<STEP_SIGN_UP>(STEP_SIGN_UP.USER_NAME);

	const handleSubmitFormUser = () => {
		setStep(STEP_SIGN_UP.VERIFY);
	};

	const handleSubmitFormOTP = () => {
		setStep(STEP_SIGN_UP.INFORMATION);
	};

	return (
		<View
			step={step}
			onSubmitFormUser={handleSubmitFormUser}
			onSubmitOTP={handleSubmitFormOTP}
		/>
	);
}

export default Component;
