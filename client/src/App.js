import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Joshua', age: 36 },
      { name: 'Eden', age: 25 },
      { name: 'AT', age: 29 }
    ],
    otherState: 'some other thing'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS this.state.persons[0].name = "Joshuas";
    this.setState( {
      persons: [
      { name: newName, age: 36 },
      { name: 'Eden', age: 25 },
      { name: 'Anderson', age: 28 }
      ] 
    })
  }
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Joshua', age: 36 },
        { name: event.target.value, age: 25 },
        { name: 'AT', age: 29 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '80px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really Working!</p>
       <button 
       style={style}
       onClick={this.switchNameHandler.bind(this, "Joshanica")}>Switch Name</button>
       <Person
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person
        name= {this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Josher!!")}
        changed={this.nameChangedHandler} >My Hobbies: Basketball</Person>
       <Person
        name= {this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
