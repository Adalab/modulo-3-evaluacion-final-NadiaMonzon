import '../styles/CharacterList.scss'
import CharacterCard from './CharacterCard';

const CharacterList = (props)=>{
    const characterItem = props.character
    .map((character)=>{
        return (
            <CharacterCard character={character}/>
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


