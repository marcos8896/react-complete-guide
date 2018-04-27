import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {

  let conditionalClasses = [];
  let btnClass = '';
  
  if(props.showPersons) btnClass = classes.Red;

  if (props.persons.length <= 2) conditionalClasses.push( classes.red );

  if (props.persons.length <= 1) conditionalClasses.push( classes.bold );

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={conditionalClasses.join(' ')}>Mi estringsita :P</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>Toggle persons</button>
    </div>
 );

};

export default Cockpit;