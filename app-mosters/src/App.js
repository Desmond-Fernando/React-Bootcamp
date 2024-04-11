import { Component } from 'react';

import './App.css';

// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">New Monster Search App</h1>
      {/* <SearchBox
        className="search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      {/* <CardList monsters={'I am the monsters'} anything={['a', 'b']} /> */}
      {/* <CardList monsters={filteredMonsters} />  */}
    </div>
  );
};

export default App;
