import React from 'react';

import './styles/css/CharacterCard.css';

function CharacterCard(props) {
	const { character } = props;

	return (
		<div
			className='character-card'
			style={{
				backgroundImage: `url(${character.image})`
			}}
		>
			<div className='character-card-name-container text-truncate'>
				{character.name}
			</div>
		</div>
	);
}
export default CharacterCard;
