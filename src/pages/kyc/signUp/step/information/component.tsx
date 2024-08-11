import { useRedirect } from '@/hooks/useRedirect';
import View from './view';
import { PATH } from '@/routes/config';

interface IComponentProps {}
function Component(props: IComponentProps) {
	console.log('Component', props);
	const { redirectPage } = useRedirect();
	const handleSubmit = () => {
		redirectPage(PATH.HOME);
	};
	return <View onSubmit={handleSubmit} />;
}

export default Component;
