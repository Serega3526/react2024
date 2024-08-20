import * as yup from "yup";

const shemaInputs = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .matches(
      /^[A-Z][\sa-zA-Z]*$/,
      "Name should contain only letters and start with an uppercase letter",
    ),
  age: yup
    .number()
    .required("Age is a required field")
    .integer("The age must be an integer")
    .positive("The age must be positive"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is a required field"),
  password1: yup
    .string()
    .min(8)
    .max(32)
    .required("Password1 is a required field")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
      "Password should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character",
    ),
  password2: yup
    .string()
    .min(8)
    .max(32)
    .required("Password2 is a required field")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
      "Password should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character",
    ),
  gender: yup.string().required("Gender is a required field"),
  TC: yup.boolean().required("TC is a required field"),
  picture: yup.mixed(),
  country: yup.string().required("Name is a required field"),
});

export default shemaInputs;
