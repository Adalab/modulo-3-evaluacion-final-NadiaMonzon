import Gryffindor from '../images/griffindorlogo.jpg'
import Hufflepuff from "../images/hufflepufflogo.jpg";
import Slytherin from "../images/slytherinlogo.jpg";
import Ravenclaw from "../images/ravenclawlogo.jpg";
import Logo from "../images/harrypotterlogo.png";
import { Link } from "react-router-dom";

const CharacterCard = (props)=>{
    return (
        <li key={props.index}>
                <Link to={`/character/${props.character.id}`}>
                    <img src={
                    (props.character.image==='' && props.character.house === 'Gryffindor' ? Gryffindor : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Hufflepuff' ? Hufflepuff : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Slytherin' ? Slytherin : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Ravenclaw' ? Ravenclaw : props.character.image) ||
                    (props.character.image==='' && props.character.house === '' ? Logo : props.character.image)
                } 
                    alt={`${props.character.name}'s snapshot`} title={`${props.character.name}'s picture`} className='profile_picture'/>
                    <h3 className='profile_name'>{props.character.name}</h3>
                    <h5 className='profile_species'>{props.character.species}</h5>
                    </Link>
            </li>
    )
}

export default CharacterCard;