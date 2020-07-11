import React, { useEffect, useState } from 'react';
import Container from './Container';
import { useParams, useHistory } from 'react-router-dom';
import Deck from './Deck';
import CreateRecordForm from './CreateRecordForm';
import Card from './Card';
import Record from './Record';

const DeckPage = () => {
	const deckId = useParams().deckId;

	const decks = JSON.parse(localStorage.getItem('decks'));
	const [deck, setDeck] = useState(null);
	const [records, setRecords] = useState([]);

	const history = useHistory();

	useEffect(() => {
		const deck = decks.filter(deck => deck.id === deckId)[0];
		setDeck(deck);
		setRecords(deck.records);
		console.log(records);
	}, [deckId]);

	if (!deck) {
		return <div>Loading...</div>;
	}

	const deleteDeck = () => {
		localStorage.setItem('decks', JSON.stringify(decks.filter(deck => deck.id !== deckId)));
		history.push('/');
	};

	const createRecord = record => {
		setRecords(records.concat(record));
		updateDeckInStorage(record);
		setDeck({
			...deck,
			records: records.concat(record)
		});
	};

	const updateDeckInStorage = record => {
		let decks = JSON.parse(localStorage.getItem('decks'));
		decks = decks.filter(deck => deck.id !== deckId);
		decks.push({
			title: deck.title,
			id: deck.id,
			records: records.concat(record)
		});
		localStorage.setItem('decks', JSON.stringify(decks));
		console.log(decks);
	};

	return (
		<Container>
			<Deck singleView={true} deleteDeck={deleteDeck} title={deck.title} id={deck.id} records={deck.records} />
			<CreateRecordForm createRecord={createRecord} />
			{records.length > 0 && (
				<Card>
					{records.map((record, index) => {
						return <Record key={index} firstSide={record.firstSide} secondSide={record.secondSide} learned={record.learned} id={record.id} />;
					})}
				</Card>
			)}
		</Container>
	);
};

export default DeckPage;
