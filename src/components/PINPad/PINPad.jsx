import React from 'react';
import './PINPad.css';

// COMPRESS THIS
const PINPad = props => {

	const handleClick = digit => e => {
		props.updatePINEntered(digit);
	};

	return (
		<div className="container">
			<div className="numberGrid">
				<div className="selectable upper" onClick={handleClick(1)}>1</div>
				<div className="selectable upper" onClick={handleClick(2)}>2</div>
				<div className="selectable upper" onClick={handleClick(3)}>3</div>
				<div className="selectable upper" onClick={handleClick(4)}>4</div>
				<div className="selectable upper" onClick={handleClick(5)}>5</div>
				<div className="selectable upper" onClick={handleClick(6)}>6</div>
				<div className="selectable upper" onClick={handleClick(7)}>7</div>
				<div className="selectable upper" onClick={handleClick(8)}>8</div>
				<div className="selectable upper" onClick={handleClick(9)}>9</div>
				<div/>
				<div className="selectable lower" onClick={handleClick(0)}>0</div>
				<div className="selectable lower" onClick={handleClick(-1)}>&lt;=</div>
			</div>
		</div>
	);
};
export default PINPad;