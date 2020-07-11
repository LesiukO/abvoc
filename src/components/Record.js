import React from 'react';
import Button from './Button';
import Loading from './Loading';

const Record = props => {
	const { firstSide, secondSide, id, rearnded } = props;

	if (!firstSide || !secondSide) {
		return <Loading />;
	}

	return (
		<div className="record">
			<div className="record__info">
				<h3 className="record__first-side">{firstSide}</h3>
				<div className="record__line"></div>
				<p className="record__second-side">{secondSide}</p>
			</div>
			<Button>Delete</Button>
		</div>
	);
};

export default Record;
