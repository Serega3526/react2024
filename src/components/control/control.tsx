import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import shemaInputs from "../../utils/shema";
import { IFormInput } from "../../types/types";
import { useDispatch } from "react-redux";
import { addToStateControl } from "../../app/slices/controlPageSlice/controlPageSlice";


 
export const ControlPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, formState } = useForm<IFormInput>({
      resolver: yupResolver<IFormInput>(shemaInputs),
      mode: "onTouched",
      reValidateMode: "onChange",
      defaultValues: {
      name: "",
      age: undefined,
      email: "",
      password1: "",
      password2: "",
      gender: "",
      TC: false,
      picture: undefined,
      country: ""
    },
    });

      const onSubmitHandler = (data: IFormInput) => {
        const formDataForSave = { ...data };
        dispatch(addToStateControl(formDataForSave))
        console.log({ formDataForSave });
        navigate('/')
      };

      const {isValid} = formState

  return (
    <>
      <Link to="/">Back to Main Page</Link>;
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <label>Name</label>
        <input {...register("name")} placeholder="Name" type="text" name="name" />
        {errors.name ? (<p>{errors.name.message}</p>) : <p>Заполните поле Name</p>}

        <label>Age</label>
          <input {...register("age")} placeholder="Age" type="text" name="age"  />
        {errors.age && <p>{errors.age.message}</p>}

        <label>Email</label>
          <input {...register("email")} placeholder="Email" type="email" name="email" />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
          <input {...register("password1")} placeholder="Password1" type="password" name="password1" />
        {errors.password1 && <p>{errors.password1.message}</p>}

        <label>Password</label>
          <input {...register("password2")} placeholder="Password2" type="password" name="password2" />
        {errors.password2 && <p>{errors.password2.message}</p>}

        <label>Gender</label>
        <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>

        <label>T&C</label>
          <input {...register("TC")} type="checkbox" name="T&C" />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Picture</label>
          <input {...register("picture")} type="file" name="picture" />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Country</label>
        <input {...register("country")} placeholder="Country" type="text" name="country" />
        {errors.name && <p>{errors.name.message}</p>}

        <button type="submit" disabled={!isValid}>Sign in</button>
        {!isValid && <p>Невалидная форма</p>}
      </form>
    </>
  );
}
export default ControlPage;
