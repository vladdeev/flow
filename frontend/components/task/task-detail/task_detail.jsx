import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {
  deepPurple200,
  deepPurple500,
  lightRed200,
  grey50,
  grey600,
  deepPurple50,
  red500,
  blue500,
  redA400,
  pink400
} from 'material-ui/styles/colors';

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

  componentWillUnmount() {
    this.props.updateTask(this.state);
  }

  componentWillMount() {
    this.props.fetchTask(this.props.params.taskId)
      .then((action) => { this.setState(action.task); });
  }

  handleDateChange(e, date) {
    const dateStr = date.toISOString().slice(0,10).concat(" 20:00:00");
    this.setState({ due_date: dateStr });
  }

  renderHeader() {
    let date = '';

    if (this.state.due_date) {
      date = new Date(this.state.due_date);
    }

    return(
      <DatePicker
        value={date}
        onChange={this.handleDateChange}
        container="inline">
      </DatePicker>
      );
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
          rows={3}
          rowsMax={4}
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
