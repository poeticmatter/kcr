import React from 'react';
import ReactDOM from 'react-dom';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

import {cards} from "./cards";

class App extends React.Component {


  constructor(props) {
    super(props);


  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyD-N9w8_L7EWZ9ixT7mvT5gwbcKLak5JOA",
      authDomain: "keyforge-crowdsource-ranking.firebaseapp.com",
      databaseURL: "https://keyforge-crowdsource-ranking-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "keyforge-crowdsource-ranking",
      storageBucket: "keyforge-crowdsource-ranking.appspot.com",
      messagingSenderId: "933315858425",
      appId: "1:933315858425:web:72008c40f28a61ba37b728",
      measurementId: "G-91F6G5L27G"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }else {
      firebase.app();
    }
  }

  render() {
    return (
      <div>
        hello?
      </div>
    );
  }
}

export default App;
