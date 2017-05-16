import React from 'react';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

import {
  pink600,
  purple600,
  deepPurple600,
  blue600,
  lightBlue600,
  cyan600,
  grey50,
} from 'material-ui/styles/colors';

const avatarColors = {
  0: pink600,
  1: purple600,
  2: deepPurple600,
  3: blue600,
  4: lightBlue600,
  5: cyan600,
};

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.member;
  }

  getInitials() {
    const first = this.state.first_name.slice(0,1);
    const last = this.state.last_name.slice(0,1);
    return first.concat(last);
  }

  _renderAvatar() {
    const style = {margin: 5};
    const colorIndex = this.state.id % 5;
    const color = avatarColors[colorIndex];
    return (
      <Avatar
        color={grey50}
        backgroundColor={color}
        size={33}
        style={style}>{this.getInitials()}</Avatar>
      );
    }

  render() {
    return(
      <li className="team-member">
        {this._renderAvatar()}
      </li>
    );
  }
}

export default TeamMember;
