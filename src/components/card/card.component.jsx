import React from 'react';
import './card.styles.css';
// 
export const Card = (props) => (
	<div className='card-container'>
	<img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
	<h2>{props.monster.name}</h2>
	<p>{props.monster.email}</p>
	</div>
);
// grab random monster pic with specified size
// {props.monster.id} uses the id to as a url parameter to get unique pics
//