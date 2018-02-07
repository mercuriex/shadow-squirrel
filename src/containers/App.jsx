import React from 'react';
import Login from '../components/Login';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			loggedIn: false
		};
		this.setLoggedIn = this.setLoggedIn.bind(this);
	}

	setLoggedIn(){
		this.setState({
			loggedIn: true
		});
	}

	render(){
		return(
			<div>
				<Login loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn}/>
			</div>
		);
	}
}

export default App;