import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../utils/counter';

export default function ModalCheckedItem() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      {count > 0 && (
        <div className="modal__wrapper">
          <p data-testid="test-count">{count}</p>
          <button onClick={() => dispatch(deleteAll())}>Delete</button>
          <button>Create file</button>
        </div>
      )}
    </>
  );
}
