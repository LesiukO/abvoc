import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import DeckPage from './components/DeckPage';
import DeckTrainPage from './components/DeckTrainPage';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/deck/:deckId" exact>
					<DeckPage />
				</Route>
				<Route path="/deck/:deckId/train" exact>
					<DeckTrainPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
