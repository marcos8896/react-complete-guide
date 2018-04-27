import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />

        </div> 
      );
    }

    return (

      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}

      </div>

    );
  }
}

export default App;
