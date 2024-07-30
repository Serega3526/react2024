import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../utils/constants';
import { delAllPeople } from '../../utils/constants';
import { useState } from 'react';

export default function ModalCheckedItem() {
  const [href, setHref] = useState('');
  const [download, setDownload] = useState('');
  const count = useSelector((state: RootState) => state.counter.value);
  const checkedPeople = useSelector((state: RootState) => state.peoples);
  const dispatch = useDispatch();

  const peopleToCsv = () => {
    return [
      Object.keys(checkedPeople.peoples[0]).join(';'),
      ...checkedPeople.peoples.map((result) => Object.values(result).join(';')),
    ].join('\n');
  };

  const handleDelete = () => {
    dispatch(deleteAll());
    dispatch(delAllPeople());
  };

  const handleClickDownload = () => {
    const csv = peopleToCsv();
    const csvBlob = new Blob([csv], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvBlob);
    setDownload(`${checkedPeople.peoples.length}_peoples.csv`);
    setHref(csvURL);
  };

  return (
    <>
      {count > 0 && (
        <div className="modal__wrapper">
          <p data-testid="test-count">{count}</p>
          <button onClick={handleDelete}>Delete</button>
          <button>
            <a href={href} download={download} onClick={() => handleClickDownload()}>
              Create file
            </a>
          </button>
        </div>
      )}
    </>
  );
}
