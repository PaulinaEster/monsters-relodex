import react, { Component } from 'react';
import cardList from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [ ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(users => this.setState({ monsters : users }))
  }
  
  render(){
    return (
      <div className="App">
        { 
          this.state.monsters.map(monster => {
            {/* <cardList name={monster.name} key={monster.id}/> */}
            <h2 key={monster.id}>{monster.name}</h2>})
        }
      </div>
    )
  } 
}

export default App;
