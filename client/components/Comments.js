import React from 'react';

const Comments = React.createClass({
  renderComment(comment, idx) {
    return(
      <div className="comment" key={idx}>
        <p>
          <strong>{comment.user}</strong> {comment.text}
            <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
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
