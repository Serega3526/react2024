import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <p>404 error</p>
      <Link to="/">Go to Main</Link>
    </>
  );
}

export default NotFoundPage;
