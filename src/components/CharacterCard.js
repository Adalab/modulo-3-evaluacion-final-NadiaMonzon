import Gryffindor from '../images/griffindorlogo.jpg'
import Hufflepuff from "../images/hufflepufflogo.jpg";
import Slytherin from "../images/slytherinlogo.jpg";
import Ravenclaw from "../images/ravenclawlogo.jpg";
import Logo from "../images/harrypotterlogo.png";

const CharacterCard = (props)=>{
    return (
        <li>
                <a href="">
                    <img src={
                    (props.character.image==='' && props.character.house === 'Gryffindor' ? Gryffindor : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Hufflepuff' ? Hufflepuff : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Slytherin' ? Slytherin : props.character.image) ||
                    (props.character.image==='' && props.character.house === 'Ravenclaw' ? Ravenclaw : props.character.image) ||
                    (props.character.image==='' && props.character.house === '' ? Logo : props.character.image)
                } 
                    alt={`${props.character.name}'s image`} title={`${props.character.name}'s image`} className='profile_picture'/>
                    <h3 className='profile_name'>{props.character.name}</h3>
                    <h5 className='profile_species'>{props.character.species}</h5>
                </a>
            </li>
    )
}

export default CharacterCard;