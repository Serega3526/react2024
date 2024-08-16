import { Link } from "react-router-dom";

function MainPage() {
  return (
    <nav>
      <li>
        <Link to="/control">ControlPage</Link>
      </li>

      <li>
        <Link to="/uncontrol">UncontrolPage</Link>
      </li>
    </nav>
  );
}

export default MainPage;
