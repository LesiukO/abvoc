import React, { useEffect, useState } from 'react';
import Container from './Container';
import { useParams, useHistory } from 'react-router-dom';
import Deck from './Deck';

const DeckPage = () => {
	const deckId = useParams().deckId;

	const decks = JSON.parse(localStorage.getItem('decks'));
	const [deck, setDeck] = useState(null);

	const history = useHistory();

	useEffect(() => {
		const deck = decks.filter(deck => deck.id === deckId);
		setDeck(deck[0]);
	}, []);

	if (!deck) {
		return <div>Loading...</div>;
	}

	const deleteDeck = () => {
		localStorage.setItem('decks', JSON.stringify(decks.filter(deck => deck.id !== deckId)));
		history.push('/');
	};

	return (
		<Container>
			<Deck deleteDeck={deleteDeck} title={deck.title} id={deck.id} records={deck.records} />
		</Container>
	);
};

export default DeckPage;
