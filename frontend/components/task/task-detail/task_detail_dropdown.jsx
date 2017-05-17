import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class TeamDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.task.id !== this.state.id ||
      nextProps.task.title !== this.state.title ||
      nextProps.task.description !== this.state.description ||
      nextProps.task.due_date !== this.state.due_date ||
      nextProps.task.completed !== this.state.completed
    ) {
      this.setState(nextProps.task);
    }
  }

  handleChange(event, index, value) {
    this.setState({ ['assignee_id']: value });
  }

  getItems() {
    let items = [];
    const members = Object.values(this.props.membersList);
    for (let i = 0; i < members.length; i++ ) {
      let member = members[i];
      let memberName = member.first_name.concat(' ').concat(member.last_name);
      items.push(<MenuItem value={member.id} key={i} primaryText={`${memberName}`} />);
    }

    return items;
  }

  render() {
    const style = {
      width: '120px',
      fontSize: '1em',
    };

    const underlineStyle = {
      bottom: 8,
      margin: 0,
      padding: 0,
    };

    const menuStyle = {
      lineHeight: '49px',
      paddingLeft: 0,
      paddingRight: 0,
    };

    return (
      <DropDownMenu
        onChange={this.handleChange}
        maxHeight={300}
        autoWidth={false}
        labelStyle={menuStyle}
        underlineStyle={ underlineStyle }
        style={style}
        onClose={() => { this.props.updateTask(this.state); }}
        value={this.state.assignee_id} >
        {this.getItems()}
      </DropDownMenu>
    );
  }
}
// this.props.updateTask(this.state);
export default TeamDropDown;
