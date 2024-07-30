import { Pages } from '../enums/enums';
import { useNavigate } from 'react-router-dom';
import { RAMApi } from '../../services/apiRAM';

export default function DetailCard() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get(Pages.DETAILS);
  const { data, isLoading } = RAMApi.useGetPersonQuery(Number(id));

  const handleDelDetails = () => {
    searchParams.delete(Pages.DETAILS);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  if (Number(!id)) return <></>;

  if (!data) return <></>;

  return (
    <>
      {isLoading ? (
        <span data-testid="is-loading" className="loader"></span>
      ) : data ? (
        <div>
          <button data-testid="detail-card-btn" onClick={handleDelDetails}>
            X
          </button>
          <img src={data.image} alt="" />
          <h3>{data.name}</h3>
          <p>{data.species}</p>
          <p>{data.gender}</p>
          <p>{data.type}</p>
          <p>{data.status}</p>
        </div>
      ) : null}
    </>
  );
}
