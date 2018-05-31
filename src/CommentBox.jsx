import React, { Component } from 'react';
import './CommentBox.css';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class CommentBox extends Component {

    loadCommentsFromServer(requestid) {
        let _this = this;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //console.log(xmlHttp.responseText);
                var oldComments = _this.state.data;
                var comments = JSON.parse(xmlHttp.responseText);
                //console.log(comments);
                if(comments.length > 0) {
                    var newComments = null;
                    // comments.forEach(function(elem, index) {
                    //     oldComments.concat(elem);
                    // });
                    newComments = oldComments.concat(comments);
                    console.log(newComments);
                    _this.setState({
                        data: newComments
                    });
                }
            }
        }
        xmlHttp.open("GET", "http://localhost:10010/comments/" + requestid, true); // true for asynchronous 
        xmlHttp.send(null);

    }

    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            open: false
        });
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleCommentSubmit(comment) {
        var comments = this.state.data;
        // Optimistically set an id on the new comment. It will be replaced by an
        // id generated by the server. A production application would likely
        // not use Date.now() for this and would have a more robust system in place.
        comment.id = Date.now();
        comment.avatar = "https://pbs.twimg.com/profile_images/867975209147551744/FjDfAH4K_400x400.jpg";
        comment.parent_id = this.props.parent_id;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});

        let _this = this;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", "http://localhost:10010/addComment/", true); // true for asynchronous 
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                _this.setState({
                    open: true
                })
            }
        }
        xmlHttp.send(JSON.stringify(comment));
    }

    componentDidMount() {
        //console.log(this.props.parent_id);
        this.loadCommentsFromServer(this.props.parent_id);
    }
    render() {
        return(
            <MuiThemeProvider>
                <div className="commentBox">
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                    <CommentList data={this.state.data} />
                    <Snackbar
                      open={this.state.open}
                      message="Comment added successfully"
                      autoHideDuration={4000}
                      onRequestClose={this.handleRequestClose}
                    />
                </div>

            </MuiThemeProvider>
        );
    }
}

export default CommentBox;