import React, { useEffect } from 'react';
import Card from './Card';
import Input from './Input';

const CreateDeckForm = () => {
	return (
		<Card>
			<p>to search or create decks</p>
			<form>
				<Input />
			</form>
			<br />
			<br />
		</Card>
	);
};

export default CreateDeckForm;
