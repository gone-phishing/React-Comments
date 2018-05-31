import React, { Component } from 'react';
import Comment from './Comment.jsx';

class CommentList extends Component {

	render() {
		var commentNodes = this.props.data.map(function(comment, i) {
	      	return (
	        	<Comment 
	        		author={comment.author} 
	        		text={comment.text} 
	        		key={i}
	        		comment_id={comment.id}
	        		parent_id={comment.parent_id}
	        		avatar={comment.avatar}
	        		isFav={comment.isFav}
	        	/>
	      	);
    	});
    	//console.log(this.props.data);
		return(
			<div>
				{commentNodes}
			</div>
		);
	}
}

export default CommentList;