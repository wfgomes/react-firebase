import React, {Component} from 'react';
import on from '../images/on.png';
import off from '../images/off.png';

class Lampada extends Component {
	constructor(props){
		super(props);
		this.state = {
			lampada: ''
			
		}
	}

	componentDidMount() {
		this.props.db.database().ref('/lampada').on('value', snapshot => {
			let lamp = snapshot.val();
			console.log("Lampada: " + lamp);

			if (lamp == 'on'){
				this.setState({
					lampada: on
				})	
			} else if (lamp == 'off'){
				this.setState({
					lampada: off
				})
			} else {
				this.setState({
					lampada: ''
				})
			}
			
			
		}); 
  	}

	render (){
		return (
			<div>
				<h3>{this.state.speed}</h3>
				<img src={this.state.lampada} width="300" height="300"/>
			</div>

			
		)
	}
}    

export default Lampada