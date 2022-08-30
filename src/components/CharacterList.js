import '../styles/CharacterList.scss'
import CharacterCard from './CharacterCard';

const CharacterList = (props)=>{
    const characterItem = props.character
    .map((pj, index)=>{
        return (
            <CharacterCard character={pj} key={index} characterFound={props.characterFound} characterData={props.characterData  }/>
            )
    
    });
    const renderErrorMsg =()=>{
        if (characterItem.length===0) {
            return (
            <p>{`Curiosity is not a sin, Harry, but we must be cautious with it.${props.filterByName} didn't show up in this search, try again.`} </p>)
        }
    }
    return (
    <section>
        <ul className='profile'>
            {characterItem}
        </ul>
        {renderErrorMsg()}
    </section>)
}

export default CharacterList;


