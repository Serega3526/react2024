import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form"
// import * as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup"

function ControlPage() {
    // const schema = yup.object().shape({
    //     email: yup.string().email().required(),
    //     password: yup.string().min(8).max(32).required(),
    //   });
    // const { register, handleSubmit, formState: { errors }, reset } = useForm({
    //     resolver: yupResolver(schema),
    //   });

    //   const onSubmitHandler = (data) => {
    //     console.log({ data });
    //     reset();
    //   };

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
        {/* <label>
          Email
          <input {...register("email")} placeholder="email" type="email" name="email" required />
        </label>
        <p>{errors.email?.message}</p>
        <label>
          Password
          <input {...register("password")} placeholder="password1" type="password" name="password1" required />
        </label>
        <p>{errors.password?.message}</p> */}
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
export default ControlPage;
