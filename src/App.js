import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Marcos" age="21" />
        <Person name="Diego" age="22"> My hobbies: Ser falso natural </Person>
        <Person name="Brandon" age="21" />
      </div>
    );
  }
}

export default App;
