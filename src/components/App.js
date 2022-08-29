import { useState, useEffect } from 'react';
import '../styles/App.scss';
import '../styles/Reset.scss'
import getDataApi from '../services/getDataApi';
import CharacterList from './CharacterList';
import Filter from './Filters';


function App() {

  const [characterData, setCharacterData] = useState([])
  const [filterByHouse, setFilterByHouse] =useState('Gryffindor')

  useEffect(()=>{
    getDataApi()
    .then((dataFromApi)=>{
      console.log(dataFromApi);
      setCharacterData(dataFromApi)
    });
  }, [])

    const handleFilterHouse=(value)=>{
      setFilterByHouse(value)
    }


    const characterFilters= characterData.filter((character)=>{
      return filterByHouse === 'all' ? true : character.house === filterByHouse;   
    });


  return (
    <div className="App">
      <header>
        <h1>Harry Potter's characters</h1>
      </header>
      <main>
        <Filter 
        filterByHouse={filterByHouse} 
        handleFilterHouse={handleFilterHouse}/>

        <CharacterList character={characterFilters}/>
      </main>
    </div>
  );
}

export default App;
