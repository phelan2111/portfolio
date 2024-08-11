import { ISignUpUserProps } from '.';
import View from './view';

interface IComponentProps extends ISignUpUserProps {}
function Component(props: IComponentProps) {
	const handleSubmit = () => {
		props.onSignUpSuccess();
	};

	return <View onSubmit={handleSubmit} />;
}

export default Component;
