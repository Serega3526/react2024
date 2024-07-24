import { props } from '../types/types';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../utils/counter';
import { useState } from 'react';

export default function PeopleItem(props: props) {
  const [checked, setChecked] = useState(false);

  function chengeCheckbox() {
    setChecked(!checked);
    console.log(checked);
    if (!checked) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }

  const dispatch = useDispatch();

  return (
    <div className="peopleCard">
      <div className="wrap__checkbox">
        <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
        <p>Add to state</p>
      </div>
      <div className="wrap__person" onClick={props.click}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
