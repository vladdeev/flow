import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */

const buttonStyle = {
  height: 24,
  width: 20,
  color: 'grey',
};

const CommentItemDropdown = (props) => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton style={buttonStyle}><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}

    >
      <MenuItem onClick={props.handleDelete} primaryText="Delete Comment" />
    </IconMenu>
  </div>
);

export default CommentItemDropdown;
