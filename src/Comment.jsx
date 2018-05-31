import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import CommentBox from './CommentBox.jsx';
import IconButton from 'material-ui/IconButton';
import ShareIcon from 'material-ui/svg-icons/social/share';
import UnlikeIcon from 'material-ui/svg-icons/action/favorite-border';
import LikeIcon from 'material-ui/svg-icons/action/favorite';

class Comment extends Component {

	render() {
		return(
			<div >
				<Card>
				    <CardHeader
				      title={this.props.author}
				      subtitle={this.props.text}
				      avatar={this.props.avatar}
				      actAsExpander={true}
      				  showExpandableButton={true}
				    />
				    
				    <CardText expandable={true}>
				      <CommentBox parent_id={this.props.comment_id} />
				    </CardText>

				    <CardActions>
				    	{
				    		this.props.isFav && 
				    		<IconButton><LikeIcon color={'red'}/></IconButton>
				    	}
				      	{
				      		!this.props.isFav &&
				      		<IconButton><UnlikeIcon /></IconButton>
				      	}
				      	<IconButton><ShareIcon /></IconButton>
				    </CardActions>
				</Card>
			</div>
			
		);
	}
}
export default Comment;