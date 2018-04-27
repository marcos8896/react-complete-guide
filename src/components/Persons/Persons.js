import React from 'react';
import Person from './Person/Person';

const Persons = props => (
  props.persons.map((person, index) => {
    return <Person 
              age={person.age} 
              click={() => props.clicked(index)}
              key={person.id} 
              name={person.name}
              changed={(event) => props.changed(person.id, event)}
              />
  })
);

export default Persons;