import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress';

const Deck = props => {
	// const { title, records, id } = props;
	const { title, id } = props;

	const [records, setRecords] = useState(props.records);
	const [progress, setProgress] = useState(0);

	const [numberOfRecords, setNumberOfRecords] = useState(0);
	const [numberOfLearnedRecords, setNumberOfLearnedRecords] = useState(0);
	const [numberOfSuccessfullTrainings, setNumberOfSuccessfullTrainings] = useState(0);

	useEffect(() => {
		let numberOfRecords = 0;
		let numberOfLearnedRecords = 0;
		let numberOfSuccessfullTrainings = 0;

		console.log(records);
		records.forEach(record => {
			numberOfRecords++;
			if (record.learned) numberOfLearnedRecords++;
			numberOfSuccessfullTrainings = numberOfSuccessfullTrainings + record.trainedNumber;
		});
		console.log(records);
		console.log(numberOfSuccessfullTrainings);

		let prog = (numberOfSuccessfullTrainings / (numberOfRecords * 5)) * 100;
		setProgress((numberOfSuccessfullTrainings / (numberOfRecords * 5)) * 100);
		console.log(prog);

		setNumberOfRecords(numberOfRecords);
		setNumberOfLearnedRecords(numberOfLearnedRecords);
		setNumberOfSuccessfullTrainings(numberOfSuccessfullTrainings);
	}, [records]);

	const deleteHandler = () => {
		props.deleteDeck(id);
	};

	if (props.onPage === 'home') {
		return (
			<Card>
				<h3 className="card__title">{title}</h3>
				<Line percent={progress} strokeWidth="0.4" strokeColor={'rgb(86, 3, 176)'} />
				<p>
					{numberOfLearnedRecords}/{numberOfRecords} records learned
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
					{numberOfLearnedRecords}/{numberOfRecords} records learned
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
					{numberOfLearnedRecords}/{numberOfRecords} records learned
				</p>

				<div className="card__buttons">
					<Link to={`/deck/${id}`}>
						<Button>Back</Button>
					</Link>
				</div>
			</Card>
		);
	}
};

export default Deck;
