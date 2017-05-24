import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link, hashHistory, withRouter } from 'react-router';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
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
class WorkspaceDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  getInitials() {
    const first = this.props.currentUser.first_name.slice(0,1);
    const last = this.props.currentUser.last_name.slice(0,1);
    return first.concat(last);
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose () {
    this.setState({
      open: false,
    });
  }

  getItems() {
    let items = [];
    const workspaces = Object.values(this.props.workspacesList);
    for (let i = 0; i < workspaces.length; i++ ) {
      let workspace = workspaces[i];
      items.push(<MenuItem
        value={workspace.id}
        key={i}
        primaryText={workspace.title}
      />);
    }

    return items;
  }

  render() {
    const style = {margin: 5, fontSize: '15px', fontWeight: 300};
    const colorIndex = this.props.currentUser.id % 5;
    const color = avatarColors[colorIndex];

    return (
      <div>
        <Avatar
          onTouchTap={this.handleTouchTap}
          color={grey50}
          backgroundColor={color}
          size={30}
          style={style}>{this.getInitials()}
        </Avatar>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {this.getItems()}
            <Divider />
            <MenuItem
              primaryText="More"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Create new Workspace" />,
                <MenuItem primaryText="Leave current Workspace" />,
              ]}
            />

            <Divider />
            <MenuItem
              primaryText="Sign Out"
              onTouchTap={this.props.signOut} />
          </Menu>
        </Popover>
      </div>
    );
  }
}





export default withRouter(WorkspaceDropdown);
