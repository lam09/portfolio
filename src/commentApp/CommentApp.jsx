import React, { Component } from "react";

class CommentApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      comments: []
    };
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onCommentChanged = this.onCommentChanged.bind(this);
    this.onNewCommentSummit = this.onNewCommentSummit.bind(this);
  }

  onNameChanged(e) {
    let input_name = e.target.value;
    var state = {
      name: input_name,
      comment: this.state.comment,
      comments: this.state.comments
    }
    this.setState(state);
  };
  onCommentChanged(e) {
    let input_comment = e.target.value;
    var state = {
      comment: input_comment,
      name: this.state.name,
      comments: this.state.comments
    }
    this.setState(state);
  };
  onNewCommentSummit() {
    var comment = {};
    comment.name = this.state.name;
    comment.comment = this.state.comment;
    var commentList = this.state.comments;
    commentList.push(comment);
    var state = {
      name: "",
      comment: "",
      comments: commentList
    };
    this.setState(state);
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.comment} onChange={this.onCommentChanged} />
          <input type="text" value={this.state.name} onChange={this.onNameChanged} />
          <button onClick={this.onNewCommentSummit}>Add comment</button>
        </div>
        {this.state.comments.length === 0 && !this.state.loading ? (
          <div className="alert text-center alert-info">
            Be the first to comment
        </div>
        ) : null}
        <ul>
          {this.state.comments.map((comment, index) => (
            <Comment key={index} comment={comment}></Comment>
          ))}
        </ul>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.comment.name} </h5>
        <p>{this.props.comment.comment} </p>
      </div>
    );
  }
}
export default CommentApp;