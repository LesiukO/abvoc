import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import Input from './Input';
import { uuid } from 'uuidv4';
import Button from './Button';

const CreateRecordForm = props => {
	const [searchRecordValue, setSearchRecordValue] = useState('');
	const [firstSide, setFirstSide] = useState('');
	const [secondSide, setSecondSide] = useState('');
	const [isCreationMode, setIsCreationMode] = useState(false);

	const createRecordSubmitHandler = e => {
		e.preventDefault();
		props.createRecord({
			firstSide,
			secondSide,
			learned: false,
			trainedNumber: 0,
			id: uuid()
		});
		setIsCreationMode(false);
		setSearchRecordValue('');
		setFirstSide('');
		setSecondSide('');
	};

	const searchInputHandler = e => {
		setIsCreationMode(false);
		setSearchRecordValue(e.target.value);
		setFirstSide(e.target.value);
	};

	const firstSideHandler = e => {
		setFirstSide(e.target.value);
	};

	const secondSideHandler = e => {
		setSecondSide(e.target.value);
	};

	const SearchOrCreateRecordHandler = e => {
		e.preventDefault();
		setIsCreationMode(true);
	};

	return (
		<>
			<Card>
				<p>to search or create records</p>
				<form onSubmit={SearchOrCreateRecordHandler}>
					<Input value={searchRecordValue} onInput={searchInputHandler} />
				</form>
				<br />
				<br />
			</Card>
			{isCreationMode && (
				<Card>
					<form onSubmit={createRecordSubmitHandler}>
						<p>create record</p>
						<p>First side</p>
						<Input value={firstSide} onInput={firstSideHandler} />
						<p>Second side</p>
						<Input focus={true} id="secondSideInput" value={secondSide} onInput={secondSideHandler} />
						<p>
							<Button onClick={createRecordSubmitHandler}>Create record</Button>
						</p>
						<p>enter first and second side</p>
					</form>
				</Card>
			)}
		</>
	);
};

export default CreateRecordForm;
