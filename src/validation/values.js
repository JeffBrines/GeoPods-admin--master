import * as yup from "yup";

const validationValues = {
  login: yup.string().min(2, "Too short!").required("Required!"),
  password: yup.string().min(5, "Too short!").required("Required!"),
};

export default validationValues;
