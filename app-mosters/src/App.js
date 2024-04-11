import { Component } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';

// Class Components
class App extends Component {
  // Local state
  // this is the 1st method to run
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('1 - constructor');
  }

  // this is the 3rd method to run
  componentDidMount() {
    console.log('3 - componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  // Exrtacting anonymous function to defined method
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  // React will rerender this when ever state changes
  // this is the 2nd method to run
  render() {
    console.log('2 - render');

    // Using destructring instead of using 'this' everywhere
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        {/* <CardList monsters={'I am the monsters'} anything={['a', 'b']} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
