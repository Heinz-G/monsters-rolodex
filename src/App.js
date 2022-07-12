import { Component } from 'react';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
       {
          name: 'Linda'
        },
       {
          name: 'Frank'
        },
       {
          name: 'Jacky'
        },
        {
          name: 'Heinz'
        },
      ]
      
    }
  }
  render() {
    return (
      <div className="App">
        {
          //revisit the .map() function later in the appendix
          this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
  
}

export default App;
