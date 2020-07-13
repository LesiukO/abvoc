import React, { useState, useEffect } from 'react';
import Container from './Container';
import InfoBlock from './InfoBlock';
import CreateDeckForm from './CreateDeckForm';
import Deck from './Deck';

const HomePage = () => {
	const [decks, setDecks] = useState([]);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('decks'))) {
			setDecks(JSON.parse(localStorage.getItem('decks')));
		}
	}, []);

	const createDeck = deck => {
		setDecks(decks.concat(deck));
		localStorage.setItem('decks', JSON.stringify(decks.concat(deck)));
	};

	const deleteDeck = id => {
		setDecks(decks.filter(deck => deck.id !== id));
		localStorage.setItem('decks', JSON.stringify(decks.filter(deck => deck.id !== id)));
	};

	return (
		<Container>
			<InfoBlock />
			<CreateDeckForm createDeck={createDeck} />
			{decks.map((deck, index) => {
				return <Deck onPage="home" deleteDeck={deleteDeck} records={deck.records} key={index} title={deck.title} id={deck.id} />;
			})}
		</Container>
	);
};

export default HomePage;
