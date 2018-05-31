import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

class CommentForm extends Component {
  

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({
      author: '',
      text: ''
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    const style = {
      marginLeft: 20,
    };
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} style={style}>
        <TextField
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
          name="comment-text"
        />
        <TextField
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          name="comment-author"
        />
        <IconButton type="submit" >
          <ContentSend />
        </IconButton>
      </form>
    );
  }
}

export default CommentForm;