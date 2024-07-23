import { props } from '../types/types';

export default function PeopleItem(props: props) {
  return (
    <div className="peopleCard">
      <div className='wrap__checkbox'>
        <input type="checkbox" />
        <p>Add to state</p>
      </div>
      <div className='wrap__person' onClick={props.click}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
