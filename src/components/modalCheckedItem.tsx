import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ModalCheckedItem() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      {count > 0 && (
        <div className="modal__wrapper">
          <p>{count}</p>
          <button>Delete</button>
          <button>Create file</button>
        </div>
      )}
    </>
  );
}
