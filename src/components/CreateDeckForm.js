import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';

const CreateDeckForm = props => {
	const [deckName, setDeckName] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		props.createDeck({
			title: deckName,
			learnedRecocdsNumber: 0,
			recordsNumber: 0
		});
		setDeckName('');
	};

	const inputHandler = e => {
		setDeckName(e.target.value);
	};

	return (
		<Card>
			<p>to search or create decks</p>
			<form onSubmit={submitHandler}>
				<Input value={deckName} onInput={inputHandler} />
			</form>
			<br />
			<br />
		</Card>
	);
};

export default CreateDeckForm;
