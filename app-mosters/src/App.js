import { useState, useEffect } from 'react';

import './App.css';

import CardList from './fncomponents/card-list/card-list.component';
import SearchBox from './fncomponents/search-box/search-box.component';

const App = () => {
  //useState hook
  // Give us the ability encasulate local state in functional programming
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState('');

  // Run once during the first render and if any dependency changes in the dependency array
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const onStringChange = (event) => {
  //   setStringField(event.target.value);
  // };

  return (
    <div className="App">
      <h1 className="app-title">New Monster Search App</h1>
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      {/* <SearchBox
        className="search-box"
        placeholder="search String"
        onChangeHandler={onStringChange}
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
