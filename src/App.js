import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Marcos", age: 21 },
      { id: 2, name: "Diego", age: 22 },
      { id: 3, name: "Brandon", age: 21 }
    ]
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

  deletePersonHandler = personIndex => {

    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);

    this.setState({persons});

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

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          
          {
            this.state.persons.map((person, index) => {
              return <Person 
                        age={person.age} 
                        name={person.name}
                        click={this.deletePersonHandler.bind(this, index)}
                        key={person.id} />
            })
          }

        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          
          {persons}

      </div>
    );
  }
}

export default App;
