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
		saveRecordInStorage(record);
		setDeck({
			...deck,
			records: records.concat(record)
		});
	};

	const deleteRecord = id => {
		setRecords(records.filter(rec => rec.id !== id));
		removeRecordFromStorage(id);
	};

	const removeRecordFromStorage = id => {
		let decks = JSON.parse(localStorage.getItem('decks'));
		decks = decks.filter(deck => deck.id !== deckId);
		decks.push({
			...deck,
			records: records.filter(rec => rec.id !== id)
		});
		localStorage.setItem('decks', JSON.stringify(decks));
	};

	const saveRecordInStorage = record => {
		let decks = JSON.parse(localStorage.getItem('decks'));
		decks = decks.filter(deck => deck.id !== deckId);
		decks.push({
			...deck,
			records: records.concat(record)
		});
		localStorage.setItem('decks', JSON.stringify(decks));
	};

	return (
		<Container>
			<Deck singleView={true} deleteDeck={deleteDeck} title={deck.title} id={deck.id} records={deck.records} />
			<CreateRecordForm createRecord={createRecord} />
			{records.length > 0 && (
				<Card>
					{records.map((record, index) => {
						return <Record deleteRecord={deleteRecord} key={index} firstSide={record.firstSide} secondSide={record.secondSide} learned={record.learned} id={record.id} />;
					})}
				</Card>
			)}
		</Container>
	);
};

export default DeckPage;
