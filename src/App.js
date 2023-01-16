import './App.css';
import { useState, useEffect } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
   const [searchField, setSearchField] = useState('');
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   const onSearchChange = (event) => setSearchField(event.target.value.toLowerCase());

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((results) => {
            setMonsters(results);
         });
   }, []);

   useEffect(() => {
      setFilteredMonsters(monsters.filter((monster) => monster.name.toLowerCase().includes(searchField)));
   }, [monsters, searchField]);

   return (
      <div className="App">
         <h1 className="app-title">Monsters</h1>
         <SearchBox onChangeHandler={onSearchChange} placeHolder="Search monsters..." className="monsters-search-box" />
         <Cardlist monsters={filteredMonsters} />
      </div>
   );
};
/*
class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [{ name: 'work' }, { name: 'money' }, { name: 'sport' }],
         searchField: '',
      };
   }

   componentDidMount() {
      console.log('2- CompDMOunt');
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((results) =>
            this.setState(() => {
               return {
                  monsters: results,
               };
            })
         );
   }


   render() {
      const { monsters, searchField } = this.state;
      const { onSearchChange } = this;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
         <div className="App">
            <h1 className="app-title">Monsters</h1>
            <SearchBox
               onChangeHandler={onSearchChange}
               placeHolder="Search monsters..."
               className="monsters-search-box"
            />
            <Cardlist monsters={filteredMonsters} />
         </div>
      );
   }
}
*/
export default App;
