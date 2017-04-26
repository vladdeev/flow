import React from 'react';
import { withRouter } from 'react-router';

class DemoLogin extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const demoUser = {
			email: "guest@welcome.io",
			password: "q1w2e3",
			first_name: "Robert",
			last_name: "Smith"
		}

		this.props.login(demoUser).then(() => {
			return this.props.router.push('/');
		});
	}

	render() {
		return null;
	}
}

export default withRouter(DemoLogin);
