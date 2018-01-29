import React from 'react';
import LoginDialog from '../components/LoginDialog';

class App extends React.Component{

	render(){
		return(
			<div>
				<LoginDialog loggedIn={false}/>
			</div>
		);
	}
}

export default App;