import React from 'react';
import TeamMember from './team_member';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMembers(this.props.currentWorkspace);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentWorkspace !== nextProps.currentWorkspace) {
      this.props.fetchAllMembers(nextProps.currentWorkspace);
    }
  }

  render() {
    return(
      <section className="team-index">
        <ul>
          <li>team</li>
          {Object.values(this.props.membersList).map(member => (
            <TeamMember
              key={member.id}
              member={member}
              currentWorkspace={this.props.currentWorkspace}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default TeamIndex;
