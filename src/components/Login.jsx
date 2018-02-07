import React from 'react';
import PINProgress from './PINProgress';
import PINPad from './PINPad';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pinEntries: 0,
			pinEntered: ""
		};

		this.updatePINEntered = this.updatePINEntered.bind(this);
	}

	updatePINEntered(digit){

		// if decrement is specified, reduce digit number and remove last digit
		if(digit <= -1 && this.state.pinEntries > 0){
			this.setState({
				pinEntries: this.state.pinEntries - 1,
				pinEntered: this.state.pinEntered.slice(0, -1)
			});
		}

		// else, handle increment
		else{
			this.setState({
				pinEntries: this.state.pinEntries + 1,
				pinEntered: this.state.pinEntered + digit
			}, () => {
				if(this.state.pinEntries === 6){
					if(this.PINMatches()){
						this.props.setLoggedIn();
					}
					else{
						this.setState({
							pinEntries: 0,
							pinEntered: ""
						})
					}

				}
			});

		}

		// add delay to simulate authentication delay
		setTimeout(() => console.log(this.state.pinEntered), 10)

	}

	PINMatches(){
		// make sure we actually have the right number of digits,
		// then check PIN equals the right one.
		// if(this.state.pinEntries === 6){
		//
		// }
		return this.state.pinEntered === "121212";
	}

	render() {
		if (this.props.loggedIn) {
			return null;
		}

		else {
			return (
				<div>
					<PINProgress pinEntries={this.state.pinEntries}/>
					<PINPad updatePINEntered={this.updatePINEntered}/>
				</div>
			);
		}
	}

}

export default Login;