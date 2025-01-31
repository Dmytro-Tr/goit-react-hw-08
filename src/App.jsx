import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectisRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import HomePage from "./pages/HomePage/HomePage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginForm from "./pages/LoginForm/LoginForm";
// import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
// const LoginForm = lazy(() => import("./pages/LoginForm/LoginForm"));
const RegistrationForm = lazy(() => import("./pages/RegistrationForm/RegistrationForm"));

// saliwan321@mail.com
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationForm />} />}
          />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
          <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
