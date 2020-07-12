import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress';

const Deck = props => {
	const { title, records, id } = props;
	const [progress, setProgress] = useState(0);

	let learnedRecocdsNumber = 0;
	let recordsNumber = 0;
	if (records) {
		recordsNumber = records.length;
		learnedRecocdsNumber = records.filter(rec => rec.learned === true).length;
	}

	useEffect(() => {
		// setProgress((learnedRecocdsNumber / recordsNumber) * 100);
		setProgress(50);
	}, []);

	const deleteHandler = () => {
		props.deleteDeck(id);
	};

	if (props.onPage === 'home') {
		return (
			<Card>
				<h3 className="card__title">{title}</h3>
				<Line percent={progress} strokeWidth="0.4" strokeColor={'rgb(86, 3, 176)'} />
				<p>
					{learnedRecocdsNumber}/{recordsNumber} records learned
				</p>
				<p>Learning in progress</p>

				<div className="card__buttons">
					<Link to={`/deck/${id}`}>
						<Button>See deck</Button>
					</Link>
					<Button onClick={deleteHandler}>Delete</Button>
				</div>
			</Card>
		);
	} else if (props.onPage === 'deck') {
		return (
			<Card>
				<h3 className="card__title">{title}</h3>
				<Line percent={progress} strokeWidth="0.4" strokeColor={'rgb(86, 3, 176)'} />
				<p>
					{learnedRecocdsNumber}/{recordsNumber} records learned
				</p>
				<p>Learning in progress</p>

				<div className="card__buttons">
					<Link to={`/`}>
						<Button>Back</Button>
					</Link>
					<Button onClick={deleteHandler}>Delete</Button>
				</div>
			</Card>
		);
	} else if (props.onPage === 'train') {
		return (
			<Card>
				<h3 className="card__title">{title}</h3>
				<Line percent={progress} strokeWidth="0.4" strokeColor={'rgb(86, 3, 176)'} />
				<p>
					{learnedRecocdsNumber}/{recordsNumber} records learned
				</p>

				<div className="card__buttons">
					<Link to={`/`}>
						<Button>Back</Button>
					</Link>
				</div>
			</Card>
		);
	}
};

export default Deck;
