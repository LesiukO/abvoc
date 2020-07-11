import React, { useState, useEffect } from 'react';
import Container from './Container';
import Deck from './Deck';
import { useParams } from 'react-router-dom';

const DeckTrainPage = props => {
	const deckId = useParams().deckId;

	const decks = JSON.parse(localStorage.getItem('decks'));
	const [deck, setDeck] = useState(null);
	const [records, setRecords] = useState([]);
	const [currentRecord, setCurrentRecord] = useState(0);

	useEffect(() => {
		const deck = decks.filter(deck => deck.id === deckId)[0];
		setDeck(deck);
		setRecords(deck.records);
	}, [deckId]);

	if (!deck) {
		return <div>Loading...</div>;
	}

	return (
		<Container>
			<Deck onPage="train" title={deck.title} id={deck.id} records={deck.records} />
		</Container>
	);
};

export default DeckTrainPage;
