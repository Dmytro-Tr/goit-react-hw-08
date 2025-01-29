import { Field, Form, Formik } from "formik";

const LoginPage = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const handleSubmit = (values, option) => {
    console.log(values);
    option.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field
              name="password"
              type="password"
            />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
