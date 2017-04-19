import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", first_name: "", last_name: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
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
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, idx) => (
					<li key={`error-${idx}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  _formLink() {
    if (this.props.formType === "login") {
      return(
        <div>
          Don't have an account? &nbsp;
          <Link to="/signup">Sign up!</Link>;
        </div>
      )
    } else {
      return(
        <div>
          Already have an account? &nbsp;
          <Link to="/login">Login</Link>;
        </div>
      )
    }
  }

  _renderNameInput() {
    if (this.props.formType === "signup") {
      return(
        <div>
          <label> first name:
            <input type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="session-input" />
          </label>
          <br/>
          <label> last name:
            <input type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="session-input" />
          </label>
          <br/>
        </div>
      )
    }
  }

	render() {
    const formType = this.props.formType
    const text = (formType === 'login') ? "Log In" : "Sign Up";

		return (
			<div className="sessiom-form-container">
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<h1>{text}</h1>
					<br/>
					{this.renderErrors()}
          {this._renderNameInput()}
					<div className="session-form">
						<label> email:
							<input type="text"
								value={this.state.username}
								onChange={this.update("email")}
								className="session-input" />
						</label>
						<br/>
						<label> password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="session-input" />
						</label>
						<br/>
						<input type="submit" value={text} />
					</div>
				</form>
        <h3>{this._formLink()}</h3>
			</div>
		);
	}

}

export default withRouter(SessionForm);
