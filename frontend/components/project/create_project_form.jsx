import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class CreateProjectForm extends React.Component {
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
    const project = {
      title: this.state.title
    };
    this.props.receiveErrors([]);
    this.setState({ title: "", formOpen: this.props.formOpen });
    this.props.createProject(this.props.currentWorkspace, project)
      .then((action) => {
        this.props.toggleCreateProject();
        hashHistory.push(`/${this.props.currentWorkspace}/${action.project.id}`)
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
    this.props.toggleCreateProject();
  }

  render() {
    if (this.props.formOpen) {
      return(
        <div className="project-form">
  				<div className="project-form-container">
  					<div id="form-close">
  						<h3 onClick={this.resetSetAndErrors}>&#10006;</h3>
  					</div>
  					<div className="project-form-header">
  						<h1>Create New Project</h1>
  					</div>
  					<form onSubmit={this.handleSubmit} className="project-form-box">
  						{this.renderErrors()}
  							<label className="project-form-label">title:</label>
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

export default CreateProjectForm;
