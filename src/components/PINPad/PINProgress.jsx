import React from 'react';
import './PINProgress.css';

// return visualization of PIN digits already entered.
// maybe replace map with lodash _.times() for readability
const PINProgress = props => {
	let count = props.pinEntries;
	return(
		<div className="progress-container">
			{[...Array(6)].map( circle =>
			<Circle fill={count-- > 0 ? "white": "transparent" } key={count}/>
			)}
		</div>
	);
};

const Circle = props =>
	<svg height="24" width="24">
		<circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill={props.fill}/>
		Sorry, your browser does not support inline SVG.
	</svg>;

export default PINProgress;