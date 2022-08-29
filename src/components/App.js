import { useState, useEffect } from 'react';
import '../styles/App.scss';
import '../styles/Reset.scss'
import getDataApi from '../services/getDataApi';
import CharacterList from './CharacterList';

function App() {

  const [characterData, setCharacterData] = useState([])

  useEffect(()=>{
    getDataApi()
    .then((dataFromApi)=>{
      console.log(dataFromApi);
      setCharacterData(dataFromApi)
    });
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Harry Potter's characters</h1>
      </header>
      <main>
        <CharacterList characterData={characterData}/>
      </main>
    </div>
  );
}

export default App;
