import { To, useNavigate } from 'react-router-dom';

export function useRedirect() {
	const navigate = useNavigate();
	const redirectPage = (path: To) => navigate(path);
	const redirectPrev = () => navigate(-1);
	return {
		redirectPage,
		redirectPrev,
	};
}
