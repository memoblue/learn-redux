import React from 'react';

const Comments = React.createClass({
  renderComment(comment, idx) {
    return(
      <div className="comment" key={idx}>
        <p>
          <strong>{comment.user}</strong> {comment.text}
            {/* bind(null) to pass args without running function on load */}
            <button className="remove-comment" onClick={this.handleClick.bind(null, idx)}>&times;</button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params; // params is from router
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  handleClick(idx) {
    const { postId } = this.props.params;
    const commentIndex = idx;
    console.log(postId, commentIndex);
    this.props.removeComment(postId, commentIndex);
  },
  render() {
    return(
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden /> {/* needed for enter key to work for submitting */}
        </form>
      </div>
    );
  }
});

export default Comments;
