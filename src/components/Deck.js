import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';
import Loading from './Loading';

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
				<Link to={`/deck/${id}`}>
					<Button>See deck</Button>
				</Link>
				<Button onDelete={deleteHandler}>Delete</Button>
			</div>
		</Card>
	);
};

export default Deck;
