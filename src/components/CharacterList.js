import '../styles/CharacterList.scss'
import CharacterCard from './CharacterCard';

const CharacterList = (props)=>{
    const characterItem = props.character
    .map((pj, index)=>{
        return (
            <CharacterCard character={pj} key={index} characterFound={props.characterFound} characterData={props.characterData  }/>
            )
    
    });
    return (
    <section>
        <ul className='profile'>
            {characterItem}
        </ul>
    </section>)
}

export default CharacterList;


