/** @format */

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Suspense } from 'react';

function App() {
	return (
		<Provider store={store}>
			<Suspense fallback={<>hehe</>}>
				<RouterProvider
					router={router}
					fallbackElement={<>Not Founds 404</>}
				/>
			</Suspense>
		</Provider>
	);
}

export default App;
