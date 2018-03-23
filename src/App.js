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

  switchNameHandler = newName => {

    this.setState({
      persons: [
        { name: "Marcos Barrera", age: 21 },
        { name: newName, age: 22 },
        { name: "Brandon", age: 21 }
      ],
      showPersons: false
    })

  }

  nameChangedHandler = event => {

    this.setState({
      persons: [
        { name: "Marcos Barrera", age: 21 },
        { name: event.target.value, age: 22 },
        { name: "Brandon", age: 21 }
      ]
    })

  }

  togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons });


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        
          { 
            this.state.showPersons ? 
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />

                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, "Tío")}
                  changed={this.nameChangedHandler}
                  > My hobbies: Ser falso natural </Person>
                
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
              </div> 
            
            : null
          }

      </div>
    );
  }
}

export default App;
