import { object, ref, string } from "yup";

export const registerSchema = object({
  confirmPassword: string()
    .required("required")
    .oneOf([ref("password"), null], "Passwords do not match"),
  password: string()
    .required("Password required")
    .min(8, "Minimum 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "must contain an uppercase letter, a lowercase letter and a number"
    ),
  email: string().required("Email is required").email("The email is not valid"),
});
