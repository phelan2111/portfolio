import { IOTPSignUpProps } from '.';
import View from './view';

interface IComponentProps extends IOTPSignUpProps {}
function Component(props: IComponentProps) {
	const handleSubmit = () => {
		props.onSubmit();
	};
	return <View onSubmit={handleSubmit} />;
}

export default Component;
