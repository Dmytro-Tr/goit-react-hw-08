import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./loginForm.module.css";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, option) => {
    dispatch(loginThunk(values)).unwrap();
    option.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <p className={s.welcome_text}>Welcome, please login to continue!</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} className={s.form}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
          <p className={s.buttom_text}>
            You do not have account?
            <Link to="/register" className={s.buttom_link}>
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
