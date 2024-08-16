import { Link } from "react-router-dom";
// import * as yup from "yup";

function UncontrolPage() {

    // const schema = yup.object().shape({
    //     email: yup.string().email().required(),
    //     password: yup.string().min(8).max(32).required(),
    //   });
  return (
    <>
      <Link to="/">MainPage</Link>;
      <form>
        <label>
          Name
          <input placeholder="name" type="text" name="name" required />
        </label>
        <label>
          Age
          <input placeholder="age" type="text" name="age" required  />
        </label>
        <label>
          Email
          <input placeholder="email" type="email" name="email" required />
        </label>
        <label>
          Password
          <input placeholder="password1" type="password" name="password1" required />
        </label>
        <label>
          Password
          <input placeholder="password2" type="password" name="password2" required />
        </label>
        <label>
          Gender
          <p>
            <input name="gender" type="radio" value="nedzen" /> М
          </p>
          <p>
            <input name="gender" type="radio" value="nedzen" /> Ж
          </p>
        </label>
        <label>
          T&C
          <input type="checkbox" name="T&C" required />
        </label>
        <label>
          Picture
          <input type="file" name="picture" />
        </label>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}
export default UncontrolPage;
