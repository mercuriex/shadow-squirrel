import React from 'react';
import styles from './loginDialog.css';

const LoginDialog = props => {

	if(props.loggedIn){
		return null;
	}

	else{
		return(
			<div className="container">
				<div className="numberGrid">
					<div className="item">1</div>
					<div className="item">2</div>
					<div className="item">3</div>
					<div className="item">4</div>
					<div className="item">5</div>
					<div className="item">6</div>
					<div className="item">7</div>
					<div className="item">8</div>
					<div className="item">9</div>
					<div className="item"></div>
					<div className="item">0</div>
					<div className="item">back</div>
				</div>
			</div>
		);
	}

};

export default LoginDialog;