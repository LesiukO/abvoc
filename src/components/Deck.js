import React from 'react';
import Card from './Card';
import Button from './Button';

const Deck = props => {
	const { title, records, id } = props;

	let learnedRecocdsNumber = 0;
	let recordsNumber = 0;
	if (records) {
		recordsNumber = records.length;
		learnedRecocdsNumber = records.filter(rec => rec.learned === true).length;
	}

	const deleteHandler = () => {
		props.deleteDeck(id);
	};

	return (
		<Card>
			<h3 className="card__title">{title}</h3>
			<p>
				{learnedRecocdsNumber}/{recordsNumber} records learned
			</p>
			<p>Learning in progress</p>
			<div className="card__buttons">
				<Button>See deck</Button>
				<Button onDelete={deleteHandler}>Delete</Button>
			</div>
		</Card>
	);
};

export default Deck;
