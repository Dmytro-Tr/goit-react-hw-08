import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import s from "./registerPage.module.css";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = (values, option) => {
    // console.log(values);
    dispatch(registerThunk(values)).unwrap();
    // .then(() => navigate("/"));
    option.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <p className={s.welcome_text}>Welcome, please register to continue!</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} className={s.form}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name:</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            Login
          </button>
          <p className={s.buttom_text}>
            You already have account?{" "}
            <Link to="/login" className={s.buttom_link}>
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
