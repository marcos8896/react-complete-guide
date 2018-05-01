import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor() {
    super();

    this.state = {
      persons: [
        { id: 1, name: "Marcos", age: 21 },
        { id: 2, name: "Diego", age: 22 },
        { id: 3, name: "Brandon", age: 21 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    }
  }

  componentWillMount() {

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

  togglePersonsHandler = () => this.setState((prevState, props) => {
    return { 
      showPersons: !prevState.showPersons,
      toggleClicked: prevState.toggleClicked + 1,
     }
  });

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

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

      <WithClass classes={classes.App}>
        <Cockpit
          login={this.loginHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>

      </WithClass>

    );
  }
}

export default App;
