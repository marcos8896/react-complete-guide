import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  render() {
    return this.props.persons.map((person, index) => {
      return <Person 
          age={person.age} 
          click={() => this.props.clicked(index)}
          key={person.id} 
          name={person.name}
          changed={(event) => this.props.changed(person.id, event)}
          />
    })
  }
}

export default Persons;