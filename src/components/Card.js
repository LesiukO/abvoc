import React from 'react';

import './Card.css';

const Card = props => {
	return <div className={`card ` + (props.noPadding ? 'card--no-padding' : '')}>{props.children}</div>;
};

export default Card;
