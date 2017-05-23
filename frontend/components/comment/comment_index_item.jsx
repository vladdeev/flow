import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import { merge } from 'lodash';
import Avatar from 'material-ui/Avatar';
import CommentItemDropdown from './comment_item_dropdown';
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

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getMemberName() {
    return this.props.author.first_name.concat(this.props.author.last_name);
  }

  getInitials() {
    const first = this.props.author.first_name.slice(0,1);
    const last = this.props.author.last_name.slice(0,1);
    return first.concat(last);
  }

  renderAvatar() {
    const style = {margin: 5};
    const colorIndex = this.props.author.id % 5;
    const color = avatarColors[colorIndex];
    return (
      <Avatar
        color={grey50}
        backgroundColor={color}
        size={33}
        style={style}>{this.getInitials()}</Avatar>
      );
    }

    renderTimeCreated() {
      const timeCreated = new Date(this.props.comment.created_at);
      const date = timeCreated.toLocaleDateString();
      const time = timeCreated.toLocaleTimeString();

      return `${date} at ${time}`;
    }

    render() {
      return(
        <section className="comment-item-container">
          {this.renderAvatar()}
          <div className="comment-item">
            <div className="comment-item-header">
              <p>{this.getMemberName()}</p>
              <p>{this.renderTimeCreated()}</p>
              <CommentItemDropdown />
            </div>
            <p className="comment-item-body">{this.props.comment.body}</p>
          </div>
        </section>
      );
    }


}

export default withRouter(CommentIndexItem);
