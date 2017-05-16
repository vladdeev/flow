import React from 'react';
import TeamMember from './team_member';
import SignUpMemberForm from './sign_up_member';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signUpMemberFormOpen: false };
    this.toggleSignUpMember = this.toggleSignUpMember.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllMembers(this.props.currentWorkspace);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentWorkspace !== nextProps.currentWorkspace) {
      this.props.fetchAllMembers(nextProps.currentWorkspace);
    }
  }

  toggleSignUpMember() {
    if (this.state.signUpMemberFormOpen) {
      this.setState({ signUpMemberFormOpen: false });
    } else {
      this.setState({ signUpMemberFormOpen: true });
    }
  }

  render() {
    return(
      <section className="team-index">
        <p>team</p>
        <ul className="team-avatars">
          {Object.values(this.props.membersList).map(member => (
            <TeamMember
              key={member.id}
              member={member}
              currentWorkspace={this.props.currentWorkspace}/>
          ))}
        </ul>

        <h7 onClick={this.toggleSignUpMember}> + Invite Member</h7>

        <SignUpMemberForm
          toggleSignUpMember={this.toggleSignUpMember}
          currentWorkspaceId={this.props.currentWorkspace}
          formOpen={this.state.signUpMemberFormOpen}
          signUpMember={this.props.signUpMember}
          receiveErrors={this.props.receiveErrors}
          errors={this.props.errors} />
      </section>
    );
  }
}

export default TeamIndex;
