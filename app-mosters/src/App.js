import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

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
        {filteredMonsters.map((monster) => {
          return (
            // This key is nessary otuer element so that React to effeciently decide which only or needed component to render rather than everything
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
