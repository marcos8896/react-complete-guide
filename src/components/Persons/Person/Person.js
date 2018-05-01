import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {

    return (
      <WithClass classes={classes.Person}>

        <AuthContext.Consumer>
          { auth => auth ? <p>I'm authenticated!</p>: null }
        </AuthContext.Consumer>

        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </WithClass>
    )

  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;