import * as yup from "yup";
import validationValues from "../values";

const loginSchema = yup.object().shape({
  login: validationValues.login,
  password: validationValues.password,
});

export default loginSchema;
