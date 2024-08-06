import { useNavigate } from 'react-router-dom';
import View from './view';
import { useState } from 'react';
import { STEP_SIGN_UP } from './types';
import { PATH } from '@/routes/config';

function Component() {
	const navigate = useNavigate();
	const [step, setStep] = useState<STEP_SIGN_UP>(STEP_SIGN_UP.USER_NAME);

	const handleConfirmUserName = () => {
		setStep(STEP_SIGN_UP.VERIFY);
	};
	const handleRedirectSignIn = () => {
		navigate(PATH.KYC.SIGN_IN);
	};
	const handleVerify = () => {
		setStep(STEP_SIGN_UP.INFORMATION);
	};
	const handleCreateProfile = () => {
		navigate(PATH.HOME);
	};

	return (
		<View
			step={step}
			onRedirectSignIn={handleRedirectSignIn}
			onConfirmUserName={handleConfirmUserName}
			onCreateProfile={handleCreateProfile}
			onVerify={handleVerify}
		/>
	);
}

export default Component;
