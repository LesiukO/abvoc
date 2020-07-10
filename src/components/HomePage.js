import React, { useState } from 'react';
import Container from './Container';
import InfoBlock from './InfoBlock';
import CreateDeckForm from './CreateDeckForm';
import Deck from './Deck';

const HomePage = () => {
	const [decks, setDecks] = useState([
		{
			title: 'deck1',
			records: [
				{
					firstSide: 'apple',
					secondSide: 'яблуко',
					learned: false
				},
				{
					firstSide: 'apple',
					secondSide: 'яблуко',
					learned: true
				}
			]
		},
		{
			title: 'deck1',
			records: [
				{
					firstSide: 'apple',
					secondSide: 'яблуко',
					learned: false
				},
				{
					firstSide: 'apple',
					secondSide: 'яблуко',
					learned: true
				},
				{
					firstSide: 'apple',
					secondSide: 'яблуко',
					learned: true
				}
			]
		}
	]);

	const createDeck = deck => {
		setDecks(decks.concat(deck));
	};

	return (
		<Container>
			<InfoBlock />
			<CreateDeckForm createDeck={createDeck} />
			{decks.map((deck, index) => {
				return <Deck records={deck.records} key={index} title={deck.title} />;
			})}
		</Container>
	);
};

export default HomePage;
