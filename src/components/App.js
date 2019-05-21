import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import Home from '../pages/Home';
import RickAndMorty from '../pages/RickAndMorty';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					path='/rick-and-morty'
					component={RickAndMorty}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
