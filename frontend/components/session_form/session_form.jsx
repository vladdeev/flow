import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "",
			password: "",
			first_name: "",
			last_name: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	componentWillUnmount() {
		this.props.receiveErrors([]);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(this.state);
		this.setState({ password: "" });
	}

	handleDemoLogin(e) {
		e.preventDefault();
		this.setState({email: "guest@welcome.io",
			password: "q1w2e3",
			first_name: "Robert",
			last_name: "Smith"
		}).then(() => (this.props.processForm(this.state)))
	}

	handleDemoLogin(e) {
    e.preventDefault();
    this.setState({email: "guest@welcome.io",
			password: "q1w2e3",
			first_name: "Robert",
			last_name: "Smith"
		}, function () {
    return this.props.processForm(this.state);
    });
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error) => (
					<li key={error}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  _formLink() {
    if (this.props.formType === "login") {
      return(
        <div className="session-form-links">
          Don't have an account? &nbsp;
          <Link to="/signup">Sign up!</Link>;
        </div>
      )
    } else {
      return(
        <div className="session-form-links">
          Already have an account? &nbsp;
          <Link to="/login">Login</Link>;
        </div>
      )
    }
  }

	_renderDemoLoginButton() {
		if (this.props.formType === "login") {
			return(
				<div>
					<form onSubmit={this.handleDemoLogin} className="session-form-box-demo">
						<input type="submit" value="Demo Login"/>
					</form>
				</div>
			)
		}
	}

  _renderNameInput() {
    if (this.props.formType === "signup") {
      return(
        <div>
          <label className="session-form-label">first name:</label>
            <input type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="session-input" />
          <label className="session-form-label">last name:</label>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="session-input" />
        </div>
      )
    }
  }

	render() {
    const formType = this.props.formType
    const text = (formType === 'login') ? "Log In" : "Sign Up";
		return (
			<div className="session-form">
				<div className="session-form-container">
					<div className="session-form-header">
						<h1>{text}</h1>
					</div>
					<form onSubmit={this.handleSubmit} className="session-form-box">
						{this.renderErrors()}
	          {this._renderNameInput()}
							<label className="session-form-label">email:</label>
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="session-input" />
							<label className="session-form-label">password:</label>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="session-input" />
							<input type="submit" value={text} />
					</form>
					{this._renderDemoLoginButton()}
					<span>{this._formLink()}</span>
				</div>
			</div>
		);
	}
}

export default withRouter(SessionForm);
