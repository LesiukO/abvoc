import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import { uuid } from 'uuidv4';

const CreateDeckForm = props => {
	const [deckName, setDeckName] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		props.createDeck({
			title: deckName,
			records: [],
			id: uuid()
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
