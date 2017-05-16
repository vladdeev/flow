import React from 'react';
import { merge } from 'lodash';
import { Link, hashHistory, withRouter } from 'react-router';

class SignUpMemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formOpen: this.props.formOpen,
      member: { email: "", password: "", first_name: "", last_name: "" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this._resetSetAndErrors = this._resetSetAndErrors.bind(this);
  }

  componentWillUnmount() {
		this.props.receiveErrors([]);
	}

	update(field) {
    const currentState = this.state;
		return e => {
      const newState = merge(
        {}, currentState, { member: { [field]: e.currentTarget.value }
      });
      this.setState(newState);
    };
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.signUpMember(this.props.currentWorkspaceId, this.state.member)
      .then(() => {
        this.setState({ member: { password: "" } });
        this.props.toggleSignUpMember();
      });
	}

	renderErrors() {
		if (this.props.errors) {
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
	}

  _renderNameInput() {
    return(
      <div>
        <label className="session-form-label">first name:</label>
          <input type="text"
            value={this.state.member.first_name}
            onChange={this.update("first_name")}
            className="session-input" />
        <label className="session-form-label">last name:</label>
          <input type="text"
            value={this.state.member.last_name}
            onChange={this.update("last_name")}
            className="session-input" />
      </div>
    );
  }

  _resetSetAndErrors() {
    this.props.receiveErrors([]);
    this.setState({
      member: { email: "", password: "", first_name: "", last_name: "" }
    });
  }

  render() {
    if (this.props.formOpen) {
      const text = "Invite New User";
      return (
        <div className="session-form">
          <div className="session-form-container">
            <div id="session-form-close">
              <h3 onClick={this.props.toggleSignUpMember}>&#10006;</h3>
            </div>
            <div className="session-form-header">
              <h1>{text}</h1>
            </div>
            <form onSubmit={this.handleSubmit} className="session-form-box">
              {this.renderErrors()}
              {this._renderNameInput()}
                <label className="session-form-label">email:</label>
                  <input type="text"
                    value={this.state.member.email}
                    onChange={this.update("email")}
                    className="session-input" />
                <label className="session-form-label">password:</label>
                  <input type="password"
                    value={this.state.member.password}
                    onChange={this.update("password")}
                    className="session-input" />
                <input type="submit" value={text} />
            </form>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SignUpMemberForm;
