import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import Lampada from './components/Lampada';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyCKHYIj2aSGOkzCEJFgWWD1J9pM1CF0PY0",
      authDomain: "iot-teste-5da47.firebaseapp.com",
      databaseURL: "https://iot-teste-5da47.firebaseio.com",
      storageBucket: "iot-teste-5da47.appspot.com",
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Lampada db={firebase}/>
      </div>

    );
  }
}

export default App;
