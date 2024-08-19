import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

function MainPage() {
  const nameControl = useSelector(
    (state: RootState) => state.control.data.name,
  );
  const ageControl = useSelector((state: RootState) => state.control.data.age);
  const password1Control = useSelector(
    (state: RootState) => state.control.data.password1,
  );
  const password2Control = useSelector(
    (state: RootState) => state.control.data.password2,
  );
  const emailControl = useSelector(
    (state: RootState) => state.control.data.email,
  );
  const genderControl = useSelector(
    (state: RootState) => state.control.data.gender,
  );
  const TCControl = useSelector((state: RootState) => state.control.data.TC);
  const pictureControl = useSelector((state: RootState) => state.control.data.picture) as string
  const countryControl = useSelector(
    (state: RootState) => state.control.data.country,
  );

  const nameUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.name,
  );
  const ageUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.age,
  );
  const password1Uncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.password1,
  );
  const password2Uncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.password2,
  );
  const emailUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.email,
  );
  const genderUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.gender,
  );
  const TCUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.TC,
  );
  const countryUncontrol = useSelector(
    (state: RootState) => state.uncontrol.data.country,
  );

  const allForms = useSelector((state: RootState) => state.allForms);
  // const ageAll = useSelector((state: RootState) => state.uncontrol.data.age)
  // const password1All = useSelector((state: RootState) => state.uncontrol.data.password1)
  // const password2All = useSelector((state: RootState) => state.uncontrol.data.password2)
  // const emailAll = useSelector((state: RootState) => state.uncontrol.data.email)
  // const genderAll = useSelector((state: RootState) => state.uncontrol.data.gender)
  // const TCAll = useSelector((state: RootState) => state.uncontrol.data.TC)
  // const countryAll = useSelector((state: RootState) => state.uncontrol.data.country)

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
      <div className="forms__wrapper">
        <div className="form__item">
        <h2>Last control</h2>
        {!nameControl ? (
          <div>There are no completed forms</div>
        ) : (
          (
            <div>
              <p>Name: {nameControl}</p>
              <p>Age: {ageControl}</p>
              <p>Password1: {password1Control}</p>
              <p>Password2: {password2Control}</p>
              <p>Email: {emailControl}</p>
              <p>Gender: {genderControl}</p>
              <p>TC: {String(TCControl)}</p>
              <p>Country: {countryControl}</p>
              <img src={pictureControl} alt="" />
            </div>
          )
        )}
        </div>
        <div className="form__item">
        <h2>Last uncontrol</h2>
        {!nameUncontrol ? (
          <div>There are no completed forms</div>
        ) : (
          <div>
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
        <div className="form__item form__item-all">
          <h2>All forms</h2>
          {allForms && <div>There are no completed forms</div>}
          {allForms.map((form) => (
            <div>
              <p>Name: {form.name}</p>
              <p>Age: {form.age}</p>
              <p>Password1: {form.password1}</p>
              <p>Password2: {form.password2}</p>
              <p>Email: {form.email}</p>
              <p>Gender: {form.gender}</p>
              <p>TC: {String(form.TC)}</p>
              <p>Country: {form.country}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
