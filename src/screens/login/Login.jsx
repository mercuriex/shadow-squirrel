import React from 'react';
import PINProgress from '../../components/PINPad/PINProgress';
import PINPad from '../../components/PINPad/PINPad';

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

		// decrement is specified via -1
		if(digit <= -1){

			// we have at least one entry already, take one off
			if(this.state.pinEntries > 0){
				this.setState({
					pinEntries: this.state.pinEntries - 1,
					pinEntered: this.state.pinEntered.slice(0, -1)
				});
			}

			// we have no entries, so don't do anything
			else{
				return;
			}
		}

		// else, handle increment
		// replace callback with checkPIN function
		// decouple login logic on backend
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