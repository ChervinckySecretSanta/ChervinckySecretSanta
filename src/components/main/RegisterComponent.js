import React from 'react';
import RegisterBackground from './background/RegisterBackground';
import './css/signin.css';

class RegisterComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onRegisterSubmit = () => {
		fetch('https://cherv-secret-santa.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.user_id){
				this.props.loadUser(user);

			}
		})
	}

render(){

	 return (
	 	<div>
	 		<RegisterBackground/>
	 		<form className="signInForm">
	 			<div className="welcomeDiv">Please Enter Your Password To Register
	 			</div>
	 			<div className="signInInfoDiv">
	 				<div className="infoDivSpacer"> </div>
			 		<div className="signInLabelsDiv">
			 			<label htmlFor="emailInput" className="signInLabels">Email:</label>
			 			<label htmlFor="passwordInput" className="signInLabels">Password:</label>
			 		</div>
			 		<div className="signInInputsDiv">
			 			<input 
			 				name="emailInput" 
			 				type="text" 
			 				onChange={this.onEmailChange}
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Email" 
			 				required
			 			/>
			 			<input 
			 				name="passwordInput" 
			 				type="password" 
			 				onChange={this.onPasswordChange}
			 				className="signInInputs" 
			 				placeholder="Please Enter Your Password" 
			 				required
			 			/>
			 		</div>
			 		<div className="infoDivSpacer">
			 		</div>
		 		</div>
		 		<div className="signInSubmitDiv">
		 			<input type="button" className="mask" value=""></input>
		 			<input 
		 				type="button" 
		 				onClick={this.onRegisterSubmit}
		 				className="signInSubmit" 
		 				value="Sign In"
		 			></input>
		 		</div>
	 		</form>
	 	</div>
	 )
	}
}

export default RegisterComponent;