import { props } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../utils/counter';
import { useState } from 'react';
import { RootState } from '../../store/store';

export default function PeopleItem(props: props) {
  const [checked, setChecked] = useState(false);
  const count = useSelector((state: RootState) => state.counter.value);

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
        <input type="checkbox" checked={count === 0 ? false : checked} onChange={chengeCheckbox} />
        <p>Add to state</p>
      </div>
      <div data-testid="detail-click" className="wrap__person" onClick={props.click}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
