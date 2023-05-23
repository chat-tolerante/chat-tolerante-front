import {Provider} from 'react-redux';
import {store} from './redux';
import {RouterProvider} from 'react-router-dom';
import {router} from './navigation';

/**
 * Main component
 * Includes the Redux Store provider
 * and the Router provider
 */
function App(): React.ReactElement {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
