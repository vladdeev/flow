import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.fetchTask(this.props.params.taskId)
      .then((action) => { this.setState(action.task); });
  }

  handleDateChange(e) {
    this.setState({ due_date: e.target.value });
  }

  renderHeader() {
    if (this.state.due_date) {
      return(
        <input
          type="date"
          value={this.state.due_date.slice(0,10)}
          onChange={this.handleDateChange}
          onBlur={() => { this.props.updateTask(this.state);}} />
      );
    } else {
      return(
        <input type="date" value='' onChange={this.handleDateChange} />
      );
    }
  }

  renderTitle() {
    return(
      <TextField
        id={`${this.state.id}`}
        hintText="Title"
        value={this.state.title}
        onChange={this.handleChange('title')}
        multiLine={false}
        underlineShow={true}
        style={titleStyle}
        inputStyle ={{width: '100%'}}
        onBlur={() => { this.props.updateTask(this.state); }} />
      );
  }

  renderDescription() {
    return(
      <div className='task-detail-description'>
        <TextField
          id={`${this.state.title}`}
          hintText="Description"
          value={this.state.description}
          onChange={this.handleChange('description')}
          multiLine={true}
          underlineShow={true}
          rows={4}
          rowsMax={5}
          fullWidth={true}
          style={descriptionStyle}
          onBlur={() => { this.props.updateTask(this.state); }}/>
      </div>
    );
  }

  render() {
    if (this.state) {
      return(
        <div className="task-detail">
          <Link to='/' onClick={this.props.deleteTask(this.state.id)}>DeleteTask</Link>
          {this.renderHeader()}
          {this.renderTitle()}
          {this.renderDescription()}
        </div>
      );
    } else {
      return null;
    }
  }
}

const titleStyle = {
  display: 'inline-block',
  paddingLeft: '10px',
  fontSize: '1em',
  height: '40px',
  paddingBottom: '3px',
  width: '95%'
};

const descriptionStyle = {
  display: 'inline-block',
  paddingLeft: '10px',
  fontSize: '1em',
  height: '120px',
  paddingBottom: '3px',
  width: '95%'
};
export default withRouter(TaskDetail);
