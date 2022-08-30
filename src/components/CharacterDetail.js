import Gryffindor from '../images/griffindorlogo.jpg'
import Hufflepuff from "../images/hufflepufflogo.jpg";
import Slytherin from "../images/slytherinlogo.jpg";
import Ravenclaw from "../images/ravenclawlogo.jpg";
import Logo from "../images/harrypotterlogo.png";


const CharacterDetail =(props)=>{
    const handleBackButton=()=>{
        window.history.back();
    }
    return (
        <>
        <section>
            <img src={
                    (props.characterFound.image==='' && props.characterFound.house === 'Gryffindor' ? Gryffindor : props.characterFound.image) ||
                    (props.characterFound.image==='' && props.characterFound.house === 'Hufflepuff' ? Hufflepuff : props.characterFound.image) ||
                    (props.characterFound.image==='' && props.characterFound.house === 'Slytherin' ? Slytherin : props.characterFound.image) ||
                    (props.characterFound.image==='' && props.characterFound.house === 'Ravenclaw' ? Ravenclaw : props.characterFound.image) ||
                    (props.characterFound.image==='' && props.characterFound.house === '' ? Logo : props.characterFound.image)
                } 
                    alt={`${props.characterFound.name}'s snapshot`} title={`${props.characterFound.name}'s picture`}/>
            <h3>{props.characterFound.name}</h3>
            <h4>{`${props.characterFound.othername}`}</h4>
            <p>{`Species: ${props.characterFound.species}`}</p>
            <p>{`Gender: ${props.characterFound.gender}`}</p>
            <p>{props.characterFound.alive ? 'Status: alive :)' : 'Status:dead x.x'}</p>
            <p>{props.characterFound.house=== '' ? 'House: none' : `House: ${props.characterFound.house}`}</p> 
              
        </section>
        <button onClick={handleBackButton}>Get back to the list</button>
        </>

    )
}

export default CharacterDetail;