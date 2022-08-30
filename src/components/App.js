import { useState, useEffect } from 'react';
import '../styles/App.scss';
import '../styles/Reset.scss'
import getDataApi from '../services/getDataApi';
import ls from '../services/localStorage';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail'
import Filter from './Filters';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";


function App() {

  const [characterData, setCharacterData] = useState([])
  const [filterByName, setFilterByName] = useState(ls.get('data',{}).filterByName || '')
  const [filterByHouse, setFilterByHouse] =useState(ls.get('data', {}).filterByHouse || 'Gryffindor')

  useEffect(()=>{
    getDataApi()
    .then((dataFromApi)=>{
      setCharacterData(dataFromApi)
    });
  }, [])

  useEffect(()=>{
    ls.set('data',{
      filterByName: filterByName,
      filterByHouse: filterByHouse,
    })
  }, [filterByName, filterByHouse])

    const handleFilterHouse=(value)=>{
      setFilterByHouse(value)
    }

    const handleFilterName=(value)=>{
      setFilterByName(value)
    }


    const characterFilters= characterData
    .filter((character)=>{
      return filterByHouse === 'all' ? true : character.house === filterByHouse;   
    })
    .filter((character)=>{
      return character.name.toLocaleUpperCase().includes(filterByName.toLocaleUpperCase())
    });

    //obtener id del personaje

    const {pathname} = useLocation ();
    const dataPath = matchPath('/character/:characterId', pathname)
    const characterId = dataPath !== null ? dataPath.params.characterId : null
    const characterFound = characterData.find((character)=>{return character.id === parseInt(characterId)})



  return (
    <div className="App">
      <header>
        <h1>Harry Potter's characters</h1>
      </header>
      <Routes>
        <Route path='/'
        element={
          <>
            <Filter 
            filterByHouse={filterByHouse} 
            handleFilterHouse={handleFilterHouse}
            
            filterByName={filterByName}
            handleFilterName={handleFilterName}
            />

            <CharacterList character={characterFilters} filterByName={filterByName}/>
          </>
        }/>

        <Route path='/character/:characterId'
        element={<CharacterDetail characterFilters={characterFilters} characterFound={characterFound} characterData={characterData  }/>}
        />


      </Routes>
      
    </div>
  );
}

export default App;
