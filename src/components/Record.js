import React, { useState, useEffect } from 'react';
import Button from './Button';

import { Line } from 'rc-progress';

const Record = props => {
	const { firstSide, secondSide, id, learnded, trainedNumber } = props;
	const [progress, setProgress] = useState(0);

	const deleteHandler = () => {
		props.deleteRecord(id);
	};

	useEffect(() => {
		setProgress((trainedNumber / 5) * 100);
	}, [trainedNumber]);

	return (
		<div className="record">
			<div className="record__info">
				<h3 className="record__first-side">{firstSide}</h3>
				<Line percent={progress} strokeWidth="0.4" strokeColor={'rgb(86, 3, 176)'} />
				<p className="record__second-side">{secondSide}</p>
			</div>
			<Button onClick={deleteHandler}>Delete</Button>
		</div>
	);
};

export default Record;
