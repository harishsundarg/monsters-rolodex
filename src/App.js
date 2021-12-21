import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import CardList from './components/cardlist/CardList';
import SearchBox from './components/searchbox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({ monsters: response.data }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
