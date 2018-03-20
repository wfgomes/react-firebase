import React, {Component} from 'react';

class MessageList extends Component {
	constructor(props){
		super(props);
		this.state = {
			messages: []
		}
		this.readData();
	}

	readData(){
		return this.props.db.database().ref('/messages').once('value').then(function(snapshot) {
		  //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
		  console.log(snapshot.val());
		  
		});
	}

	render (){
		return (
			<div>
				MessageList Component
			</div>

			
		)
	}
}    

export default MessageList