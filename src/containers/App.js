import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    let btnClass = '';

    if( this.state.showPersons ) {
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

      btnClass = classes.Red;

    }

    let conditionalClasses = [];
    if (this.state.persons.length <= 2) conditionalClasses.push( classes.red );

    if (this.state.persons.length <= 1) conditionalClasses.push( classes.bold );

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={conditionalClasses.join(' ')}>Mi estringsita :P</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          
        {persons}

      </div>

    );
  }
}

export default App;