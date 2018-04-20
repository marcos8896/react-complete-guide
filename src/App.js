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

  nameChangedHandler = (id, event) => {

    const personIndex = this.state.persons
                      .findIndex( currentPerson =>  currentPerson.id === id );
    
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons });

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
                        click={() => this.deletePersonHandler(index)}
                        key={person.id} 
                        name={person.name}
                        changed={(event) => this.nameChangedHandler(person.id, event)}
                        />
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
