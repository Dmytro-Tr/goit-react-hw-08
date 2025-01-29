import { Field, Form, Formik } from "formik";

const RegisterPage = () => {
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
      {" "}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
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

export default RegisterPage;
