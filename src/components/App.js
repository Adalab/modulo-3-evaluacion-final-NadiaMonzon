import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/getDataApi';

function App() {

  const [characterData, setCharacterData] = useState({
    name: '',
    species: '',
    gender:'' ,
    house: '' ,
    alive: '' ,
    image: '' ,
    othername: '',
  })

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
      </main>
    </div>
  );
}

export default App;
