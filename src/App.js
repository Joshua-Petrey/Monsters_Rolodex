import { Component } from "react";
import "./App.css";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component' ;
class App extends Component {
  constructor() {
    super();
    //state object
    this.state = {
      monsters: [],
      searchText: ""
    };
    // our custom methods don't bind its this to the component, so we must do it manually.
    // this.handleChange = this.handleChange.bind(this) ;
  }
  //Set monsters names dynamically after the first render
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  // our custom class method. Since it's an arrow function it's this is set to the component
  handleChange = e => { this.setState({searchText: e.target.value}) } 


  render() {
    const { monsters, searchText } = this.state ;
    // filter monsters based on if searchText includes part of their name 
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchText.toLowerCase()) ) ;

    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder="Search monsters" handleChange={ this.handleChange}/>
        
        <CardList monsters={filteredMonsters}>
        
        </CardList>
        
      </div>
    );
  }
}

export default App;