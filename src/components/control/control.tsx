import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import shemaInputs from "../../utils/shema";
import { IFormInput } from "../../types/types";
import { useDispatch } from "react-redux";
import { addToStateControl } from "../../app/slices/controlPageSlice/controlPageSlice";
import { addToAllForms } from "../../app/slices/allForms/allForms";
import { getBase64 } from "../../utils/convertTo64";

export const ControlPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm<IFormInput>({
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
      country: "",
    },
  });

  const onSubmitHandler = async(data: IFormInput) => {
    const file = data.picture && (data.picture as FileList)[0];
    let base64: string = "";
    if (file) {
      base64 = (await getBase64(file as File)) as string;
    }
    const formDataForSave = { ...data, picture: base64 };
    dispatch(addToStateControl(formDataForSave));
    dispatch(addToAllForms(formDataForSave));
    navigate("/");
  };

  const { isValid } = formState;

  return (
    <>
      <Link to="/">Back to Main Page</Link>;
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Name</label>
        <input
          {...register("name")}
          placeholder="Name"
          type="text"
          name="name"
        />
        {errors.name ? (
          <p className="error__message">{errors.name.message}</p>
        ) : (
          <p></p>
        )}

        <label>Age</label>
        <input {...register("age")} placeholder="Age" type="text" name="age" />
        {errors.age ? (
          <p className="error__message">{errors.age.message}</p>
        ) : (
          <p></p>
        )}

        <label>Email</label>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          name="email"
        />
        {errors.email ? (
          <p className="error__message">{errors.email.message}</p>
        ) : (
          <p></p>
        )}

        <label>Password</label>
        <input
          {...register("password1")}
          placeholder="Password1"
          type="password"
          name="password1"
        />
        {errors.password1 ? (
          <p className="error__message">{errors.password1.message}</p>
        ) : (
          <p></p>
        )}

        <label>Password</label>
        <input
          {...register("password2")}
          placeholder="Password2"
          type="password"
          name="password2"
        />
        {errors.password2 ? (
          <p className="error__message">{errors.password2.message}</p>
        ) : (
          <p></p>
        )}

        <label>Gender</label>
        <select {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>T&C</label>
        <input {...register("TC")} type="checkbox" name="T&C" />
        {errors.TC ? (
          <p className="error__message">{errors.TC.message}</p>
        ) : (
          <p></p>
        )}

        <label>Picture</label>
        <input {...register("picture")} type="file" name="picture" />
        {errors.picture ? (
          <p className="error__message">{errors.picture.message}</p>
        ) : (
          <p></p>
        )}

        <label>Country</label>
        <input
          {...register("country")}
          placeholder="Country"
          type="text"
          name="country"
        />
        {errors.country ? (
          <p className="error__message">{errors.country.message}</p>
        ) : (
          <p></p>
        )}

        <button type="submit" disabled={!isValid}>
          Sign in
        </button>
        {!isValid && (
          <p className="error__message">Fill in all the fields correctly</p>
        )}
      </form>
    </>
  );
};
export default ControlPage;
