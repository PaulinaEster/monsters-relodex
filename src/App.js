import react, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [ ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(users => this.setState({ monsters : users }))
  }
  
  render(){

    const { monsters, searchField } = this.state;

    const filterMonters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input 
          className='search'
          type='search' 
          placeholder='seacrh monsters' 
          onChange={e => {
            this.setState({ searchField: e.target.value });
            
          }} 
        />
        <CardList monsters={filterMonters}/>
      </div>
    )
  } 
}

export default App;
