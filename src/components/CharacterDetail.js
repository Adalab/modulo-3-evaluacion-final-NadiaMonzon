import Gryffindor from '../images/griffindorlogo.jpg'
import Hufflepuff from "../images/hufflepufflogo.jpg";
import Slytherin from "../images/slytherinlogo.jpg";
import Ravenclaw from "../images/ravenclawlogo.jpg";
import Logo from "../images/harrypotterlogo.png";


const CharacterDetail =(props)=>{
    return (
        
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
                    <p>{`Species: ${props.characterFound.species}`}</p>
                    <p>{`Gender: ${props.characterFound.gender}`}</p>
                    <p>{props.characterFound.alive ? 'Status: alive :)' : 'Status: dead x.x'}</p>
                    <p>{`${props.characterFound.othername}`}</p>
                    <p>{`House: ${props.characterFound.house}`}</p>    
                </section>
    )
}

export default CharacterDetail;