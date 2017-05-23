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

    this.handleDelete = this.handleDelete.bind(this);
  }

  getMemberName() {
    return this.props.author.first_name.concat(" ").concat(this.props.author.last_name);
  }

  getInitials() {
    const first = this.props.author.first_name.slice(0,1);
    const last = this.props.author.last_name.slice(0,1);
    return first.concat(last);
  }

  renderCommentBody() {
    var text = this.props.comment.body;
    return (
      <div className="comment-item-body">
          {text.split("\n").map(i => {
              return <div>{i}</div>;
          })}
      </div>
    );
  }

  renderAvatar() {
    const style = {margin: 5, fontSize: '15px', fontWeight: 300};
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

    handleDelete() {
      this.props.deleteComment(this.props.comment.id);
    }

    render() {
      return(
        <section className="comment-item-container">
          {this.renderAvatar()}
          <div className="comment-item">
            <nav className="comment-item-header">
              <div className="comment-item-header-left">
                <p>{this.getMemberName()}</p>
                <h7>{this.renderTimeCreated()}</h7>
              </div>
              <div className="comment-item-header-right">
                <CommentItemDropdown
                  handleDelete={this.handleDelete}
                />
              </div>
            </nav>
            {this.renderCommentBody()}
          </div>
        </section>
      );
    }


}

export default withRouter(CommentIndexItem);
