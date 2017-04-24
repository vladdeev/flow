import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class DemoLogin extends React.Component {
	constructor(props) {
		super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
	}

	handleDemoLogin(e) {
    e.preventDefault();
    const demoUser = {
      email: "guest@welcome.io",
			password: "q1w2e3",
			first_name: "Robert",
			last_name: "Smith"
		}
    this.props.login(demoUser)
  }

	render() {
		return(
			<Link to="/login">demo login</Link>
		)
	}
}

export default DemoLogin;
