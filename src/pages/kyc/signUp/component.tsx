import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH_REDIRECT } from '@/utils/enums';
import { useState } from 'react';
import { STEP_SIGN_UP } from './types';

function Component() {
	const navigate = useNavigate();
	const [step, setStep] = useState<STEP_SIGN_UP>(STEP_SIGN_UP.USER_NAME);

	const handleConfirmUserName = () => {
		setStep(STEP_SIGN_UP.VERIFY);
	};
	const handleRedirectSignIn = () => {
		navigate(PATH_REDIRECT.KYC.SIGN_IN);
	};
	const handleVerify = () => {
		setStep(STEP_SIGN_UP.INFORMATION);
	};
	const handleCreateProfile = () => {
		navigate(PATH_REDIRECT.HOME);
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
