import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Marcos", age: 21 },
      { name: "Diego", age: 22 },
      { name: "Brandon", age: 21 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Ser falso natural </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
