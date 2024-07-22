import { props } from '../types/types';

export default function PeopleItem(props: props) {
  return (
    <div className="peopleCard">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
  );
}
