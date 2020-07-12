import React, { useState, useEffect } from 'react';
import Container from './Container';
import Deck from './Deck';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Input from './Input';

import { Line } from 'rc-progress';

const DeckTrainPage = props => {
	const deckId = useParams().deckId;

	const decks = JSON.parse(localStorage.getItem('decks'));
	const [deck, setDeck] = useState(null);
	const [records, setRecords] = useState([]);
	const [currentRecord, setCurrentRecord] = useState(0);

	const [translationValue, setTranslationValue] = useState('');
	const [progress, setProgress] = useState(0);
	const [colorOfPregress, setColorOfPregress] = useState('rgba(0,0,0,0)');

	useEffect(() => {
		const deck = decks.filter(deck => deck.id === deckId)[0];
		setDeck(deck);
		setRecords(deck.records);
	}, [deckId]);

	if (!deck) {
		return <div>Loading...</div>;
	}

	const translationValueHandler = e => {
		setTranslationValue(e.target.value);

		const lengthOfEnteredValue = e.target.value.length;
		const subs = records[currentRecord].secondSide.slice(0, lengthOfEnteredValue);
		const percent = (lengthOfEnteredValue / records[currentRecord].secondSide.length) * 100;

		if (e.target.value === subs) {
			setProgress(percent);
			if (percent > 0 && percent < 40) {
				setColorOfPregress('red');
			} else if (percent > 40 && percent < 70) {
				setColorOfPregress('yellow');
			} else if (percent > 70 && percent < 100) {
				setColorOfPregress('green');
			}
		} else {
			setProgress(0);
			setColorOfPregress('rgba(0,0,0,0)');
		}

		if (e.target.value === records[currentRecord].firstSide) {
			if (currentRecord < records.length - 1) {
				setCurrentRecord(curr => curr + 1);
			} else {
				setCurrentRecord(0);
			}
			setTranslationValue('');
			setProgress(0);
			setColorOfPregress('rgba(0,0,0,0)');
		}

		if (e.target.value.length === 0) {
			setProgress(0);
			setColorOfPregress('rgba(0,0,0,0)');
		}
	};

	return (
		<Container>
			<Deck onPage="train" title={deck.title} id={deck.id} records={deck.records} />
			<Card>
				<h3>{records[currentRecord].firstSide}</h3>
			</Card>
			<Card>
				<p>enter translation of the record above</p>
				<Input value={translationValue} onInput={translationValueHandler} />
				<br />
				<br />
				<Line percent={progress} strokeWidth="1" strokeColor={colorOfPregress} />
			</Card>
		</Container>
	);
};

export default DeckTrainPage;
