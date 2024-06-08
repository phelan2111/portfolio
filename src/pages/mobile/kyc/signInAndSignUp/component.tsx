import { useState } from 'react';
import View from './view';
import { StepKYC } from '.';

function Component() {
	const [step, setStep] = useState<StepKYC>(StepKYC.signIn);

	const handleChangeStepSignIn = () => {
		setStep(StepKYC.signIn);
	};
	const handleChangeStepSignUp = () => {
		setStep(StepKYC.signUp);
	};

	return (
		<View
			onChangeStepSignIn={handleChangeStepSignIn}
			onChangeStepSignUp={handleChangeStepSignUp}
			step={step}
		/>
	);
}

export default Component;
