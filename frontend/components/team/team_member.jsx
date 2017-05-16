import React from 'react';
import { Link } from 'react-router';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.member;
  }

  render() {

    return(
      <li className="team-member">
        <h4>{this.state.id}</h4>
      </li>
    );
  }
}

export default TeamMember;
