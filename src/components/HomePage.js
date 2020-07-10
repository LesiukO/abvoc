import React from 'react';
import Container from './Container';
import Card from './Card';
import Button from './Button';
import InfoBlock from './InfoBlock';
import CreateDeckForm from './CreateDeckForm';

const HomePage = () => {
	return (
		<Container>
			<InfoBlock />
			<CreateDeckForm />
		</Container>
	);
};

export default HomePage;
