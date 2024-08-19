import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IFormInput } from "../../types/types";
import shemaInputs from "../../utils/shema";
import { useDispatch } from "react-redux";
import { addToStateUncontrol } from "../../app/slices/uncontrolPageSlice/uncontrolPageSlice";
import { addToAllForms } from "../../app/slices/allForms/allForms";

function UncontrolPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameUncontrol = useRef<HTMLInputElement>(null);
  const ageUncontrol = useRef<HTMLInputElement>(null);
  const emailUncontrol = useRef<HTMLInputElement>(null);
  const password1Uncontrol = useRef<HTMLInputElement>(null);
  const password2Uncontrol = useRef<HTMLInputElement>(null);
  const genderUncontrol = useRef<HTMLOptionElement>(null);
  const TCUncontrol = useRef<HTMLInputElement>(null);
  const pictureUncontrol = useRef<HTMLInputElement>(null);
  const countryUncontrol = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataForSave: IFormInput = {
      name: nameUncontrol.current?.value || "",
      age: Number(ageUncontrol.current?.value) || 0,
      email: emailUncontrol.current?.value || "",
      password1: password1Uncontrol.current?.value || "",
      password2: password2Uncontrol.current?.value || "",
      gender: genderUncontrol.current?.value === "male" ? "male" : "female",
      TC: TCUncontrol.current?.checked || false,
      picture: pictureUncontrol.current?.files || ({} as FileList),
      country: countryUncontrol.current?.value || "",
    };

    try {
      shemaInputs.validate(formDataForSave);
      dispatch(addToStateUncontrol(formDataForSave));
      dispatch(addToAllForms(formDataForSave));
      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Link to="/">Back to Main Page</Link>;
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input ref={nameUncontrol} placeholder="Name" type="text" name="name" />
        {/* {errors.name ? (<p className="error__message">{errors.name.message}</p>) : <p></p>} */}

        <label>Age</label>
        <input ref={ageUncontrol} placeholder="Age" type="text" name="age" />
        {/* {errors.age ? (<p className="error__message">{errors.age.message}</p>) : <p></p>} */}

        <label>Email</label>
        <input
          ref={emailUncontrol}
          placeholder="Email"
          type="email"
          name="email"
        />
        {/* {errors.email ? (<p className="error__message">{errors.email.message}</p>) : <p></p>} */}

        <label>Password</label>
        <input
          ref={password1Uncontrol}
          placeholder="Password1"
          type="password"
          name="password1"
        />
        {/* {errors.password1 ? (<p className="error__message">{errors.password1.message}</p>) : <p></p>} */}

        <label>Password</label>
        <input
          ref={password2Uncontrol}
          placeholder="Password2"
          type="password"
          name="password2"
        />
        {/* {errors.password2 ? (<p className="error__message">{errors.password2.message}</p>) : <p></p>} */}

        <label>Gender</label>
        <select>
          <option value="">Select Gender</option>
          <option ref={genderUncontrol} value="male">
            Male
          </option>
          <option ref={genderUncontrol} value="female">
            Female
          </option>
        </select>

        <label>T&C</label>
        <input ref={TCUncontrol} type="checkbox" name="T&C" />
        {/* {errors.TC ? (<p className="error__message">{errors.TC.message}</p>) : <p></p>} */}

        <label>Picture</label>
        <input ref={pictureUncontrol} type="file" name="picture" />
        {/* {errors.picture ? (<p className="error__message">{errors.picture.message}</p>) : <p></p>} */}

        <label>Country</label>
        <input
          ref={countryUncontrol}
          placeholder="Country"
          type="text"
          name="country"
        />
        {/* {errors.country ? (<p className="error__message">{errors.country.message}</p>) : <p></p>} */}

        <button type="submit">Sign in</button>
        {/* {!isValid && <p className="error__message">Fill in all the fields correctly</p>} */}
      </form>
    </>
  );
}
export default UncontrolPage;
