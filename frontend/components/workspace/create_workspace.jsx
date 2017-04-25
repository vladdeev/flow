import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class CreateWorkspaceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", formOpen: this.props.formOpen };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.resetSetAndErrors = this.resetSetAndErrors.bind(this);
  }

  openForm() {
    this.setState({ formOpen: true });
  }

  closeForm() {
    this.setState({ formOpen: false });
  }

  updateForm(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const workspace = {
      title: this.state.title
    };
    this.props.receiveErrors([]);
    this.setState({ title: "", formOpen: this.props.formOpen });

    this.props.createWorkspace(workspace)
      .then((action) => {
        this.props.toggleCreateWorkspace();
        hashHistory.push(`/${action.workspace.id}`)
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

  resetSetAndErrors() {
    this.props.receiveErrors([]);
    this.setState({ title: "", formOpen: this.props.formOpen });
    this.props.toggleCreateWorkspace();
  }

  render() {
    if (this.props.formOpen) {
      return(
        <div className="workspace-form">
  				<div className="workspace-form-container">
  					<div id="form-close">
  						<h3 onClick={this.resetSetAndErrors}>&#10006;</h3>
  					</div>
  					<div className="workspace-form-header">
  						<h1>Create New Workspace</h1>
  					</div>
  					<form onSubmit={this.handleSubmit} className="workspace-form-box">
  						{this.renderErrors()}
  							<label className="workspace-form-label">title:</label>
  								<input type="text"
  									value={this.state.title}
  									onChange={this.updateForm("title")}
  									className="title-input" />
  							<input type="submit" value="Create" />
  					</form>
  				</div>
  			</div>
      )
    } else {
      return null
    }
  }
}

export default CreateWorkspaceForm;
