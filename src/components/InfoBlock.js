import React from 'react';
import Card from './Card';
import Button from './Button';

const InfoBlock = () => {
	return (
		<Card>
			<h3 className="card__title">Abvoc</h3>
			<p>0/2 decks learned</p>
			<p>0/0 records learned</p>
			<div className="card__buttons">
				<Button>Import Vocabulary</Button>
				<Button>Export Vocabulary</Button>
				<Button>Reset</Button>
			</div>
		</Card>
	);
};

export default InfoBlock;
