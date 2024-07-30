import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../utils/constants';
import { useState } from 'react';
import { RootState } from '../../store/store';
import { addPeople, delPeople } from '../../utils/constants';
import { person } from '../../types/types';
import { Pages } from '../enums/enums';
import { useNavigate } from 'react-router-dom';

export default function PeopleItem(props: person) {
  const addPeoples = useSelector((state: RootState) => state.peoples.peoples);

  const [checked, setChecked] = useState(Boolean(addPeoples.find((people) => people.name === props.name)));
  const count = useSelector((state: RootState) => state.counter.value);

  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const handleDetail = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    const pathUrl = url.split('/');
    const id = pathUrl[pathUrl.length - 1];

    searchParams.set(Pages.DETAILS, id);

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  function chengeCheckbox() {
    setChecked(!checked);
    if (!checked) {
      dispatch(increment());
      dispatch(addPeople(props));
    } else {
      dispatch(decrement());
      dispatch(delPeople(props));
    }
  }
  const dispatch = useDispatch();

  return (
    <div className="peopleCard">
      <div className="wrap__checkbox">
        <input type="checkbox" checked={count === 0 ? false : checked} onChange={chengeCheckbox} />
        <p>Add to state</p>
      </div>
      <div
        data-testid="detail-click"
        className="wrap__person"
        onClick={(e: React.MouseEvent) => handleDetail(e, props.url)}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
