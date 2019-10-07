import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/')
    .then(res => res.json())
    .then(animals => this.setState({ animals }))
    .catch(err => console.log(err))
  }

  render() {
    let animalList;
    if (this.state.animals.length) {
      animalList = this.state.animals.map(animal => {
        return (
        <li>
          <p>{animal.name}</p>
          <p>{animal.type}</p>
        </li>
        )
      });
    } else {
      animalList = <p>Loading...</p>
    }

    return (
      <ul>
        {animalList}
      </ul>
    )
  }
}

export default App;