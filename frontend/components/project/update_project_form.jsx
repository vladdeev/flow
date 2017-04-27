import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UpdateProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: this.props.currentProjectName, formOpen: this.props.formOpen };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.resetSetAndErrors = this.resetSetAndErrors.bind(this);
  }

  updateForm(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = {
      id: this.props.currentProject,
      title: this.state.title
    };
    this.props.receiveErrors([]);
    this.setState({ title: "", formOpen: this.props.formOpen });
    this.props.updateProject(this.props.currentWorkspace, project)
      .then(() => {
        this.props.toggleUpdateProject();
        hashHistory.push(`/${this.props.currentWorkspace}/${this.props.currentProject}`)
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
    this.props.toggleUpdateProject();
  }

  render() {
    if (this.props.formOpen) {
      return(
        <span className="project-form">
  				<div className="project-form-container">
  					<div id="form-close">
  						<h3 onClick={this.resetSetAndErrors}>&#10006;</h3>
  					</div>
  					<div className="project-form-header">
  						<h1>Rename Project</h1>
  					</div>
  					<form onSubmit={this.handleSubmit} className="project-form-box">
  						{this.renderErrors()}
  							<label className="project-form-label">title:</label>
  								<input type="text"
  									value={this.state.title}
  									onChange={this.updateForm("title")}
  									className="title-input" />
  							<input type="submit" value="Update" />
  					</form>
  				</div>
  			</span>
      )
    } else {
      return null
    }
  }
}

export default withRouter(UpdateProjectForm);
