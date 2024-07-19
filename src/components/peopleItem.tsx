
import { props } from '../types/types';


export default function PeopleItem (props: props) {
  

  

  return (
      <div className="peopleCard" onClick={props.click}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      {/* <p>Eye color: {props.eye_color}</p>
      <p>Birth year: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
      <p>Hair color: {props.hair_color}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin color: {props.skin_color}</p> */}
    </div>
  );
}

