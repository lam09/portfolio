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

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("https://cv.lataa.sk/all")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
        });
      })
      .catch(err => {
        this.setState({});
      });
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
    };
    this.setState(state);
  };
  onNewCommentSummit() {
    var comment = {};
    comment.name = this.state.name;
    comment.comment = this.state.comment;
    var commentList = this.state.comments;
    commentList.unshift(comment);
    var state = {
      name: "",
      comment: "",
      comments: commentList
    };
    fetch("https://cv.lataa.sk/add", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    }).then((res) => { return res.json(); }).then((res) => {
      //console.log(res);
      this.setState(state);
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." value={this.state.name} onChange={this.onNameChanged} />
                <p className="help-block text-danger"></p>
              </div>
            </div>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Comment</label>
                <textarea className="form-control" id="message" rows="2" placeholder="Comment" required="required" data-validation-required-message="Please enter a message." value={this.state.comment} onChange={this.onCommentChanged}></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            {/* <input type="text" value={this.state.comment} onChange={this.onCommentChanged} /> */}
            {/* <input type="text" value={this.state.name} onChange={this.onNameChanged} /> */}
            <button type="submit" className="btn btn-primary btn-xl" onClick={this.onNewCommentSummit}>Add comment</button>
          </div>
        </div>
        {this.state.comments.length === 0 && !this.state.loading ? (
          <div className="alert text-center alert-info">
            Be the first to comment
        </div>
        ) : null}
        <div className="container comment-box">
          {this.state.comments.map((comment, index) => (
            <Comment key={index} comment={comment}></Comment>
          ))}
        </div>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="tip left">
        <div className="row name-box">
          <h5 className="name">{this.props.comment.name} </h5>
        </div>
        <div className="row comment-text">
          <span className="comment">{this.props.comment.comment} </span>
        </div>
      </div>
    );
  }
}
export default CommentApp;