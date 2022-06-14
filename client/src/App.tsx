import Home from './pages/home/Home';
import Game from './pages/game/Game';
import NotFound from './pages/notFound/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game' element={<Game />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
