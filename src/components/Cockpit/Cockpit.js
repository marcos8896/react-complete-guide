import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'

const Cockpit = props => {

  let conditionalClasses = [];
  let btnClass = classes.Button;
  
  if(props.showPersons) btnClass = [classes.Button, classes.Red].join(' ');

  if (props.persons.length <= 2) conditionalClasses.push( classes.red );

  if (props.persons.length <= 1) conditionalClasses.push( classes.bold );

  return (
      <Aux>
        <h1>Hi, I'm a React App</h1>
        <p className={conditionalClasses.join(' ')}>Mi estringsita :P</p>
        <button 
          className={btnClass}
          onClick={props.clicked}>Toggle persons</button>
        <button onClick={props.login}>Log in</button>
      </Aux>
 );

};

export default Cockpit;