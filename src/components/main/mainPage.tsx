import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

function MainPage() {
const nameControl = useSelector((state: RootState) => state.control.data.name)
const ageControl = useSelector((state: RootState) => state.control.data.age)
const password1Control = useSelector((state: RootState) => state.control.data.password1)
const password2Control = useSelector((state: RootState) => state.control.data.password2)
const emailControl = useSelector((state: RootState) => state.control.data.email)
const genderControl = useSelector((state: RootState) => state.control.data.gender)
const TCControl = useSelector((state: RootState) => state.control.data.TC)
const countryControl = useSelector((state: RootState) => state.control.data.country)

const nameUncontrol = useSelector((state: RootState) => state.uncontrol.data.name)
const ageUncontrol = useSelector((state: RootState) => state.uncontrol.data.age)
const password1Uncontrol = useSelector((state: RootState) => state.uncontrol.data.password1)
const password2Uncontrol = useSelector((state: RootState) => state.uncontrol.data.password2)
const emailUncontrol = useSelector((state: RootState) => state.uncontrol.data.email)
const genderUncontrol = useSelector((state: RootState) => state.uncontrol.data.gender)
const TCUncontrol = useSelector((state: RootState) => state.uncontrol.data.TC)
const countryUncontrol = useSelector((state: RootState) => state.uncontrol.data.country)

  return (
    <>
    <nav>
      <li>
        <Link to="/control">ControlPage</Link>
      </li>

      <li>
        <Link to="/uncontrol">UncontrolPage</Link>
      </li>
    </nav>
    <div>
    {nameControl && (
      <div>
        <h2>Last control</h2>
      <p>Name: {nameControl}</p>
      <p>Age: {ageControl}</p>
      <p>Password1: {password1Control}</p>
      <p>Password2: {password2Control}</p>
      <p>Email: {emailControl}</p>
      <p>Gender: {genderControl}</p>
      <p>TC: {String(TCControl)}</p>
      <p>Country: {countryControl}</p>
    </div>
    )}
    {nameUncontrol && (
      <div>
        <h2>Last uncontrol</h2>
      <p>Name: {nameUncontrol}</p>
      <p>Age: {ageUncontrol}</p>
      <p>Password1: {password1Uncontrol}</p>
      <p>Password2: {password2Uncontrol}</p>
      <p>Email: {emailUncontrol}</p>
      <p>Gender: {genderUncontrol}</p>
      <p>TC: {String(TCUncontrol)}</p>
      <p>Country: {countryUncontrol}</p>
    </div>
    )}
    </div>
    
    </>
  );
}

export default MainPage;
