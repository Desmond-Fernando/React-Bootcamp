import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// Class Components
class App extends Component {
  // Local state
  constructor() {
    super();

    // this.state = {
    //   name: 'VInnod',
    //   company: 'Home',
    // };

    this.state = {
      name: { firstName: 'Desmond', lastName: 'Fernando' },
      company: 'Home',
    };
  }
  // React will rerender this when ever state changes
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Hi {this.state.name}, I work at {this.state.company} */}
            Hi {this.state.name.firstName}, I work at {this.state.company}
          </p>

          <button
            onClick={() => {
              // Prefered approach
              this.setState(
                // This state and props are optional
                // (state, props) => {
                () => {
                  return {
                    name: { firstName: 'Vinod', lastName: 'Warnakula' },
                  };
                },
                // this secondary callback is also optional but this will output the correct states, as React will batch the rendering in a async way
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

// Functional Components

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
