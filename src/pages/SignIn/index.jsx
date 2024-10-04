//---------------------Basic imports-----------------------
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SignIn.module.scss";

//----------------------Libraries---------------------------
import { Formik } from "formik";

//--------------------Validations---------------------------
import VALIDATIONS from "../../validation";

//----------------------Components--------------------------
import { Input, Button } from "../../components";
import fetchRequest from "../../utils/fetchRequest";
import { setToken } from "../../utils/localStorage";

const SignIn = () => {
  const history = useHistory();

  return (
    <div className={styles.signIn}>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{ login: "", password: "" }}
        validationSchema={VALIDATIONS.loginSchema}
        onSubmit={async (values) => {
          const body = {
            login: values.login,
            password: values.password,
          };

          const response = await fetchRequest("api/admin/login", "POST", body);

          if (response && response.accessToken) {
            setToken(response.accessToken);
            history.push("/analytics");
          }
        }}
      >
        {({ errors, values, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.signIn__inner}>
            <div className={styles.signIn__title}>GeoPods Admin</div>
            <div className={styles.signIn__form}>
              <Input
                formHelper
                placeholder="Login"
                name="login"
                value={values.login}
                error={errors.login}
                onChange={setFieldValue}
              />
              <Input
                formHelper
                placeholder="Password"
                name="password"
                password
                value={values.password}
                error={errors.password}
                onChange={setFieldValue}
              />
              <Button type="submit">
                <span>Sign In</span>
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
